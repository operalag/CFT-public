"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        <span className="dot" /> CFT
      </a>
      <div className="links">
        <a href="#thesis">Thesis</a>
        <a href="#how">How it works</a>
        <a href="#artist">Artist Zero</a>
        <a href="#standard">The standard</a>
        <a href="#faq">FAQ</a>
        <a href="#join" className="navcta">Join the first listen</a>
      </div>
    </nav>
  );
}
