"use client";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) return;
    // No backend yet — captured client-side. Wire to Hermes / newsletter in Phase 1.
    setDone(true);
  };

  if (done) {
    return (
      <p className="lead" style={{ marginTop: 36, color: "var(--ember-glow)" }}>
        You’re on the list. We’ll be in touch before the first listen.
      </p>
    );
  }

  return (
    <form className="signup" onSubmit={submit}>
      <input
        type="email"
        inputMode="email"
        placeholder="you@somewhere.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
      />
      <button className="btn on-dark" type="submit">
        Notify me <span className="arrow">→</span>
      </button>
      <span className="note">No spam. One message when the first CFT goes live. Powered by Opera RK.</span>
    </form>
  );
}
