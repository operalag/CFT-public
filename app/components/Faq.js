"use client";
import { useRef, useState } from "react";

const QA = [
  {
    q: "Can’t someone just record the audio while it plays?",
    a: "In the Best-Effort profile, yes — in principle, as with any sound that reaches a speaker. But that misses the point. CFT is not unbreakable DRM; it is a cultural contract, like Wu-Tang’s single-copy album. The value lives in honouring the once. For collectors who want a hard guarantee, the Hardware-Enforced profile decrypts and plays inside a secure element on the object itself, so the file is never exposed in the clear.",
  },
  {
    q: "What happens if I lose the object?",
    a: "Then you’ve lost your listen — exactly as you would lose a one-of-a-kind pressing. The object is the key. That fragility is deliberate: it’s what makes holding one feel like holding something alive.",
  },
  {
    q: "Is the music really gone after I listen?",
    a: "Yes. On consumption the decryption key share is destroyed and the ciphertext becomes permanently unrecoverable. The token itself persists on-chain as an ‘ash’ — a provable, tradeable record that this work was heard, once, by you.",
  },
  {
    q: "How is this different from an NFT?",
    a: "An NFT proves you own a file you can replay forever. A CFT makes the act of listening itself scarce. No existing token standard destroys itself after a single use — that is precisely the gap CFT fills. It composes the proven parts of the NFT stack (ERC-721 ownership, ERC-2981 royalties, physically-backed binding) and adds the one missing piece: a consume-once, self-destructing key.",
  },
  {
    q: "Why would anyone buy something they can only hear once?",
    a: "For the same reason people buy a ticket to a concert that ends, a meal at a great restaurant, or a single-copy artwork: the most precious experiences are the ones that don’t repeat. CFT turns a recording into an event — and an heirloom you can pass on, unheard, or choose to spend.",
  },
  {
    q: "Can I sell or gift a CFT before I listen?",
    a: "Yes. While sealed, a CFT is freely tradeable, and the artist earns a royalty on every resale. The tension — listen now, or hold it, or pass it on still sealed — is the whole drama of owning one.",
  },
  {
    q: "Is this environmentally responsible?",
    a: "CFT targets a low-energy proof-of-stake EVM Layer-2, where a transaction’s footprint is negligible. The standard is chain-flexible; energy cost is a design criterion, not an afterthought.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {QA.map((item, i) => (
        <FaqRow key={i} {...item} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}

function FaqRow({ q, a, open, onClick }) {
  const inner = useRef(null);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <span className="pm">+</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? (inner.current ? inner.current.scrollHeight + 4 : 600) : 0 }}>
        <div className="inner" ref={inner}>{a}</div>
      </div>
    </div>
  );
}
