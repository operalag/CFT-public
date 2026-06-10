import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import BurnDemo from "./components/BurnDemo";
import Faq from "./components/Faq";
import Signup from "./components/Signup";

export default function Home() {
  return (
    <main id="top">
      <Nav />

      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-bg">
          <img src="/img/ritual-turntable.jpg" alt="" />
        </div>
        <div className="wrap">
          <p className="kicker reveal in">Opera RK · A new standard for listening</p>
          <h1 className="display reveal in" data-d="1">
            A record you<br />hold once.<br />
            <span className="ash">Then it’s ash.</span>
          </h1>
          <p className="lead subline reveal in" data-d="2">
            <strong>CFT</strong> — the Consumable File Token. Music bound to a physical object and a
            self-destructing key. You may listen <span className="italic">one time</span>. After that,
            the recording is gone forever — and all that remains is the object in your hand and the proof
            that you were there.
          </p>
          <div className="cta-row reveal in" data-d="3">
            <a className="btn" href="#how">Experience the burn <span className="arrow">→</span></a>
            <a className="btn ghost" href="#standard">Read the standard</a>
          </div>
        </div>
        <div className="scrollcue"><span className="line" /> Scroll</div>
      </header>

      {/* ===================== MARQUEE ===================== */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          <span className="italic">Listen once.</span><b>·</b>
          <span className="italic">Own the moment, not the file.</span><b>·</b>
          <span className="italic">Scarcity returns to sound.</span><b>·</b>
          <span className="italic">The first record that can die.</span><b>·</b>
          <span className="italic">Listen once.</span><b>·</b>
          <span className="italic">Own the moment, not the file.</span><b>·</b>
          <span className="italic">Scarcity returns to sound.</span><b>·</b>
          <span className="italic">The first record that can die.</span><b>·</b>
        </div>
      </div>

      {/* ===================== THESIS / PROBLEM ===================== */}
      <section className="section problem" id="thesis">
        <div className="wrap">
          <Reveal><p className="eyebrow paper">The problem</p></Reveal>
          <Reveal delay={1}>
            <h2 className="big-claim measure">
              Streaming made music <em>infinite</em>, and therefore <em>weightless.</em>
            </h2>
          </Reveal>
          <div className="split mt-l">
            <Reveal>
              <div>
                <p className="lead paper-light measure-sm">
                  When everything is available, always, for almost nothing, the act of listening loses its
                  edges. Songs become wallpaper. We skip before the second chorus. The price of a play
                  spiralled to zero — and so did our attention.
                </p>
                <p className="lead paper-light measure-sm mt-m">
                  CFT asks a heretical question: <span className="italic" style={{ color: "var(--ember-glow)" }}>
                  what if a recording could be scarce again?</span> Not the ownership of a file — the
                  experience of hearing it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <figure className="figure" style={{ aspectRatio: "4/5" }}>
                <img src="/img/problem-passive.jpg" alt="A commuter listening, lost in the blur of infinite music" />
                <figcaption className="cap">Infinite access · zero weight</figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="stat-row mt-l">
            <Reveal as="div" className="stat"><div className="n">≈ $0.003</div><div className="l">paid to artists per stream</div></Reveal>
            <Reveal as="div" className="stat" delay={1}><div className="n">∞</div><div className="l">replays of every track, forever</div></Reveal>
            <Reveal as="div" className="stat" delay={2}><div className="n">1</div><div className="l">listens a CFT will ever allow</div></Reveal>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS / BURN DEMO ===================== */}
      <section className="section burn" id="how">
        <div className="glow" />
        <div className="wrap">
          <Reveal><p className="eyebrow paper" style={{ justifyContent: "center" }}>Feel it</p></Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg tcenter measure" style={{ margin: "0 auto", color: "var(--paper)" }}>
              Press play, and you spend it.
            </h2>
          </Reveal>
          <Reveal delay={2}><BurnDemo /></Reveal>
        </div>
      </section>

      {/* ===================== LIFECYCLE ===================== */}
      <section className="section">
        <div className="wrap">
          <Reveal><p className="eyebrow">The life of a CFT</p></Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg measure">Four states. One of them is permanent.</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lead measure mt-s">
              A CFT moves through a one-way lifecycle written into the standard. You can trade it, hold it,
              gift it — but you can only ever cross the final threshold once.
            </p>
          </Reveal>
          <div className="life-grid">
            <Reveal as="div" className="life" data-s="1">
              <div className="idx">01 / minted</div>
              <div className="state">Sealed</div>
              <p className="desc">The music is encrypted and bound to a physical object. It has never been heard. It is yours to keep, trade, or gift.</p>
              <div className="bar"><i /></div>
            </Reveal>
            <Reveal as="div" className="life" data-s="2" delay={1}>
              <div className="idx">02 / market</div>
              <div className="state">Carried</div>
              <p className="desc">While sealed, it changes hands freely on the open market. The artist earns a royalty every time it does. The tension grows: listen, or pass it on?</p>
              <div className="bar"><i /></div>
            </Reveal>
            <Reveal as="div" className="life" data-s="3" delay={2}>
              <div className="idx">03 / the once</div>
              <div className="state">Consumed</div>
              <p className="desc">You decide to listen. A single decryption is authorised. The music plays — start to finish, unpausable, unrepeatable.</p>
              <div className="bar"><i /></div>
            </Reveal>
            <Reveal as="div" className="life" data-s="4" delay={3}>
              <div className="idx">04 / forever</div>
              <div className="state">Ash</div>
              <p className="desc">The key is destroyed; the recording can never play again. The token lives on as proof you heard it — a relic you can still hold and trade.</p>
              <div className="bar"><i /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== THE OBJECT ===================== */}
      <section className="section object" style={{ background: "var(--paper-2)" }} id="object">
        <div className="wrap">
          <div className="obj-grid">
            <Reveal>
              <div className="obj-visual">
                <img src="/img/object-headphones.jpg" alt="The CFT physical object" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="eyebrow cipher">A thing you can hold</p>
                <h2 className="h-lg">Not a link. An object.</h2>
                <p className="lead measure-sm mt-s">
                  Every CFT is embodied in a physical artefact — a chip, a pressing, an object Philipp and
                  Opera RK design as carefully as the music. A tamper-resistant secure element inside it
                  holds a key that can never be copied out.
                </p>
                <ul className="feat-list">
                  <li><span className="ic">◷</span><div><div className="ft">Physically backed</div><div className="fd">The object is the key. Built on the Physical Backed Token model — the chip cryptographically proves authenticity, with no middleman.</div></div></li>
                  <li><span className="ic">⊘</span><div><div className="ft">Non-extractable</div><div className="fd">The private key is generated and sealed inside the secure element. It signs, but it never leaves.</div></div></li>
                  <li><span className="ic">✶</span><div><div className="ft">The ritual of the tap</div><div className="fd">To listen, you bring the object to your player. Presence is required. Listening becomes an act again.</div></div></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ARTIST ZERO ===================== */}
      <section className="section artist" id="artist">
        <div className="wrap">
          <div className="a-grid">
            <Reveal>
              <div className="portrait">
                <img src="/img/philipp.webp" alt="Philipp Zürcher in his studio, at the pedal steel guitar" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <span className="zero-badge"><b>★</b> Artist Zero</span>
                <p className="eyebrow">The first listen belongs to one musician</p>
                <h2 className="h-lg">Philipp Zürcher</h2>
                <p className="lead measure-sm mt-s">
                  A Swiss musician releasing the first work ever issued as a CFT. Not a single, not an
                  album — a piece of music engineered to be heard once, by one person at a time, and then
                  to pass into memory.
                </p>
                <p className="pullquote mt-m">
                  “I want you to be unable to take it for granted. To know, while it plays, that it is
                  leaving.”
                </p>
                <div className="cta-row mt-m">
                  <a className="btn" href="#join">Follow the first drop <span className="arrow">→</span></a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== THE STANDARD ===================== */}
      <section className="section standard" id="standard">
        <div className="wrap">
          <Reveal><p className="eyebrow paper">The standard · CFT v1.0 draft</p></Reveal>
          <div className="split" style={{ alignItems: "flex-start" }}>
            <Reveal>
              <h2 className="h-lg" style={{ color: "var(--paper)" }}>
                We didn’t invent the cryptography. We composed it — and added the one missing piece.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead paper-light measure-sm">
                A deep prior-art review confirmed it: no existing token standard destroys itself after a
                single use. CFT stands on proven building blocks and contributes the genuinely new layer —
                a <span className="italic" style={{ color: "var(--ember-glow)" }}>consume-once, self-destructing key.</span>
                {" "}It is being written as an open, formal EVM standard. Free for any artist to use.
              </p>
            </Reveal>
          </div>

          <div className="compose">
            <Reveal as="div" className="layer"><span className="code">ERC-721</span><div><div className="lt">Ownership &amp; trade</div><div className="ld">A CFT is a real, tradeable token. Buy it, sell it, gift it — while it’s still sealed.</div></div></Reveal>
            <Reveal as="div" className="layer" delay={1}><span className="code">ERC-2981</span><div><div className="lt">Artist royalties</div><div className="ld">The creator earns automatically on every resale, forever — written into the token.</div></div></Reveal>
            <Reveal as="div" className="layer" delay={2}><span className="code">ERC-5791</span><div><div className="lt">Physically backed</div><div className="ld">Binds the token to the chip in the object via a non-extractable key. The object is the proof.</div></div></Reveal>
            <Reveal as="div" className="layer" delay={3}><span className="code">ERC-2135</span><div><div className="lt">Consume on listen</div><div className="ld">The on-chain act of consumption — the moment the work is spent, recorded for all time.</div></div></Reveal>
            <Reveal as="div" className="layer" delay={1}><span className="code">threshold</span><div><div className="lt">Conditional decryption</div><div className="ld">The audio is released only when the single listen is authorised — guarded by a decentralised key network.</div></div></Reveal>
            <Reveal as="div" className="layer novel" delay={2}><span className="code star">★ CFT</span><div><div className="lt">The consume-once key</div><div className="ld">The new contribution: a key satisfiable at most once, then destroyed. The recording becomes unrecoverable. This is what no one had built.</div></div></Reveal>
          </div>

          <Reveal delay={1}>
            <div className="cta-row mt-l">
              <a className="btn on-dark" href="https://github.com/operalag/CFT" target="_blank" rel="noopener">Read the full spec on GitHub <span className="arrow">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== LINEAGE ===================== */}
      <section className="section lineage">
        <div className="wrap">
          <Reveal><p className="eyebrow">A lineage, not a gimmick</p></Reveal>
          <Reveal delay={1}><h2 className="h-lg measure">Art has always flirted with disappearance.</h2></Reveal>
          <Reveal delay={1}><p className="lead measure mt-s">CFT extends a recognised artistic tradition — scarcity and impermanence as the work itself — into sound, and onto the chain.</p></Reveal>
          <div className="timeline">
            <Reveal as="div" className="tl"><div className="yr">1998</div><div className="tt">DIVX</div><div className="td">A pay-per-window disc — the first mass attempt at play-limited physical media.</div></Reveal>
            <Reveal as="div" className="tl" delay={1}><div className="yr">2003</div><div className="tt">Flexplay</div><div className="td">A DVD chemically engineered to self-destruct hours after the seal was broken.</div></Reveal>
            <Reveal as="div" className="tl" delay={2}><div className="yr">2015</div><div className="tt">Wu-Tang · Shaolin</div><div className="td">A single physical copy of an album, sold as a unique art object. The defining precedent.</div></Reveal>
            <Reveal as="div" className="tl" delay={3}><div className="yr">2026</div><div className="tt">CFT</div><div className="td">The first to make self-destructing, play-limited, tradeable scarcity a reusable standard — for any artist.</div></Reveal>
          </div>
        </div>
      </section>

      {/* ===================== MOVEMENT / JOIN ===================== */}
      <section className="section movement" id="join">
        <div className="bg"><img src="/img/movement-crowd.jpg" alt="" /></div>
        <div className="wrap">
          <Reveal><p className="eyebrow paper" style={{ justifyContent: "center" }}>Join the debate</p></Reveal>
          <Reveal delay={1}>
            <h2 className="display" style={{ fontSize: "clamp(36px,6.5vw,82px)" }}>
              How should we<br />listen now?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead measure" style={{ margin: "26px auto 0" }}>
              CFT is a provocation as much as a product — a question about attention, value, and what we
              owe the music we love. Be there for the first listen, and help shape the standard.
            </p>
          </Reveal>
          <Reveal delay={2}><Signup /></Reveal>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section" id="faq">
        <div className="wrap">
          <Reveal><p className="eyebrow">Hard questions, honest answers</p></Reveal>
          <Reveal delay={1}><h2 className="h-lg measure" style={{ marginBottom: 18 }}>You’re sceptical. Good.</h2></Reveal>
          <Reveal delay={1}><Faq /></Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="wrap">
          <div className="ftop">
            <div className="brandblock">
              <div className="lg">CFT</div>
              <p style={{ maxWidth: "38ch", marginTop: 14 }}>
                The Consumable File Token. An open standard for music you can listen to once — a project by
                Opera RK with Philipp Zürcher.
              </p>
            </div>
            <div>
              <h5>The project</h5>
              <ul>
                <li><a href="#thesis">Thesis</a></li>
                <li><a href="#how">How it works</a></li>
                <li><a href="#artist">Artist Zero</a></li>
                <li><a href="#standard">The standard</a></li>
              </ul>
            </div>
            <div>
              <h5>Build &amp; read</h5>
              <ul>
                <li><a href="https://github.com/operalag/CFT" target="_blank" rel="noopener">CFT standard ↗</a></li>
                <li><a href="https://github.com/operalag/CFT/blob/main/spec/CFT-v1.0.md" target="_blank" rel="noopener">Specification ↗</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#join">Join the first listen</a></li>
              </ul>
            </div>
          </div>
          <div className="fbottom">
            <span>© 2026 Opera RK · <span className="claim">explore · create · evolve</span></span>
            <span>CFT v1.0 — Draft · Zürich, Switzerland</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
