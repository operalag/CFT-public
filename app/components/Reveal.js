"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, as = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.unobserve(e.target); }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-d={delay || undefined}
      className={`reveal ${shown ? "in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
