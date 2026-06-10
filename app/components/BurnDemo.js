"use client";
import { useEffect, useRef, useState } from "react";

// Phases: idle -> playing -> burning -> ashed
export default function BurnDemo() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({ phase: "idle", t0: 0, bars: [], particles: [], dpr: 1 });
  const [phase, setPhase] = useState("idle");
  const [status, setStatus] = useState("One copy. One listen. No undo.");

  // build/refresh bar geometry
  const layout = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const N = Math.max(48, Math.floor(rect.width / 9));
    const bars = [];
    for (let i = 0; i < N; i++) {
      // pseudo-random but stable waveform shape
      const env = Math.sin((i / N) * Math.PI); // fade at edges
      const wob =
        0.5 +
        0.5 *
          Math.abs(
            Math.sin(i * 0.45) * 0.6 +
              Math.sin(i * 1.7 + 1) * 0.3 +
              Math.sin(i * 0.13) * 0.4
          );
      bars.push({ h: Math.max(0.06, env * wob), ember: 0, gone: 0 });
    }
    const s = stateRef.current;
    s.bars = bars;
    s.dpr = dpr;
  };

  useEffect(() => {
    layout();
    const onResize = () => { if (stateRef.current.phase === "idle") layout(); };
    window.addEventListener("resize", onResize);

    const draw = (now) => {
      const canvas = canvasRef.current;
      const s = stateRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const W = canvas.width, H = canvas.height, dpr = s.dpr;
      ctx.clearRect(0, 0, W, H);
      const N = s.bars.length;
      const mid = H * 0.56;
      const gap = (W / N);
      const bw = gap * 0.46;
      const maxH = H * 0.40;

      const t = (now - s.t0) / 1000;
      const PLAY_DUR = 4.2;
      let playhead = -1;
      if (s.phase === "playing") {
        playhead = Math.min(1, t / PLAY_DUR);
        if (t >= PLAY_DUR) { igniteAll(); }
      }

      for (let i = 0; i < N; i++) {
        const b = s.bars[i];
        const x = i * gap + gap / 2;
        const frac = i / N;
        const played = playhead >= 0 && frac <= playhead;

        // burning dynamics
        if (b.ember > 0 && s.phase !== "playing") {
          b.gone = Math.min(1, b.gone + 0.012 + Math.random() * 0.02);
        }
        const h = b.h * maxH * (1 - b.gone);
        if (h <= 0.3) continue;

        let col;
        if (b.ember > 0) {
          // hot bar: ember -> fades up as it disappears
          const heat = b.ember * (1 - b.gone);
          col = `rgba(${224 + 0 * heat}, ${Math.round(98 + 70 * (1 - heat))}, ${Math.round(40 * (1 - heat))}, ${0.85 * (1 - b.gone) + 0.1})`;
        } else if (played) {
          col = "rgba(240,163,90,0.95)";
        } else if (s.phase === "ashed") {
          col = "rgba(241,234,217,0.10)";
        } else {
          col = "rgba(241,234,217,0.34)";
        }
        ctx.fillStyle = col;
        roundRect(ctx, x - bw / 2, mid - h, bw, h * 1.55, bw * 0.4);
        ctx.fill();
      }

      // playhead line
      if (s.phase === "playing" && playhead >= 0) {
        const px = playhead * W;
        const g = ctx.createLinearGradient(px - 30 * dpr, 0, px, 0);
        g.addColorStop(0, "rgba(240,163,90,0)");
        g.addColorStop(1, "rgba(240,163,90,0.9)");
        ctx.fillStyle = g;
        ctx.fillRect(px - 30 * dpr, mid - maxH, 30 * dpr, maxH * 1.7);
        ctx.fillStyle = "rgba(255,200,140,0.95)";
        ctx.fillRect(px - 1 * dpr, mid - maxH, 2 * dpr, maxH * 1.7);
      }

      // ember particles
      for (let p = s.particles.length - 1; p >= 0; p--) {
        const pt = s.particles[p];
        pt.x += pt.vx; pt.y += pt.vy; pt.vy += 0.02 * dpr; pt.life -= pt.decay;
        pt.vx *= 0.99;
        if (pt.life <= 0) { s.particles.splice(p, 1); continue; }
        ctx.globalAlpha = Math.max(0, pt.life);
        ctx.fillStyle = pt.c;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // spawn rising embers while burning
      if (s.phase === "burning") {
        const alive = s.bars.some((b) => b.gone < 1 && b.ember > 0);
        for (let k = 0; k < 4; k++) {
          const i = Math.floor(Math.random() * N);
          const b = s.bars[i];
          if (b.gone < 0.96 && b.ember > 0) {
            s.particles.push({
              x: (i / N) * W + (Math.random() - 0.5) * gap,
              y: mid - b.h * maxH * (1 - b.gone) + (Math.random() * 10 - 5) * dpr,
              vx: (Math.random() - 0.5) * 0.7 * dpr,
              vy: -(0.6 + Math.random() * 1.5) * dpr,
              r: (0.6 + Math.random() * 1.8) * dpr,
              life: 1,
              decay: 0.008 + Math.random() * 0.012,
              c: Math.random() > 0.4 ? "rgba(240,140,50,1)" : "rgba(255,200,120,1)",
            });
          }
        }
        if (!alive && s.particles.length === 0) {
          s.phase = "ashed";
          setPhase("ashed");
          setStatus("Heard once. Now only a memory and an object.");
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", onResize); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function igniteAll() {
    const s = stateRef.current;
    s.phase = "burning";
    setPhase("burning");
    setStatus("The key is being destroyed…");
    s.bars.forEach((b, i) => { b.ember = 0.7 + Math.random() * 0.3; b.gone = -((i / s.bars.length) * 0.15); });
  }

  const start = () => {
    const s = stateRef.current;
    if (s.phase !== "idle") return;
    s.t0 = performance.now();
    s.phase = "playing";
    setPhase("playing");
    setStatus("Listening… this will not happen twice.");
  };

  const reset = () => {
    const s = stateRef.current;
    s.phase = "idle";
    s.particles = [];
    layout();
    setPhase("idle");
    setStatus("One copy. One listen. No undo.");
  };

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="demo-status">{status}</div>
      <div className="cta-row" style={{ justifyContent: "center", marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
        {phase === "idle" && (
          <button className="btn on-dark" onClick={start}>
            ▶ Listen once <span className="arrow">→</span>
          </button>
        )}
        {(phase === "playing" || phase === "burning") && (
          <button className="btn ghost" style={{ borderColor: "rgba(241,234,217,.4)", color: "rgba(241,234,217,.7)", cursor: "not-allowed" }} disabled>
            {phase === "playing" ? "Cannot be paused" : "Burning…"}
          </button>
        )}
        {phase === "ashed" && (
          <button className="btn ghost" style={{ borderColor: "rgba(241,234,217,.4)", color: "var(--paper)" }} onClick={reset}>
            ↺ Replay the demonstration
          </button>
        )}
      </div>
      <p className="demo-sub">
        A demonstration, not the real thing — but it is exactly how a CFT behaves. Once consumed, the
        decryption key is destroyed and the recording can never be played again. What remains is the
        object you hold and the proof, on-chain, that you were there.
      </p>
    </>
  );
}

function roundRect(ctx, x, y, w, h, r) {
  if (w < 0) { x += w; w = -w; }
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
