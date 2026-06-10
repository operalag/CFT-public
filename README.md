# CFT — The Vanishing Record (public website)

The public marketing & manifesto site for **CFT (Consumable File Token)** — an open standard by
[Opera RK](https://operal.tech) for music you can listen to **once**, then it's gone.

🔗 **Live:** [cft.operal.tech](https://cft.operal.tech)

## Stack
- **Next.js 15** (App Router, React 19) — deployed on Vercel
- Bespoke hand-authored design system (no UI framework) — *"tactile analog meets crypto"*
- Pure CSS + Canvas animation (the signature "burn" interaction); zero runtime UI dependencies
- Imagery: license-free photography via [Pexels](https://pexels.com), art-directed with warm duotone/grain

## Develop
```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Structure
```
app/
  layout.js            # fonts (Fraunces / Inter / IBM Plex Mono), metadata, SEO/OG
  page.js              # the full single-page experience
  globals.css          # the design system
  components/
    Nav.js             # sticky nav (client)
    Reveal.js          # scroll-in animation wrapper (IntersectionObserver)
    BurnDemo.js        # ★ canvas waveform that ignites and burns to ash (client)
    Faq.js             # accordion (client)
    Signup.js          # email capture (client) — wire to Hermes in Phase 1
public/
  img/                 # curated, self-hosted photography
  grain.svg            # paper-grain overlay
```

## Sections
Hero → Thesis (the problem with streaming) → **Burn demo** → Lifecycle (Sealed · Carried · Consumed · Ash)
→ The Object → Artist Zero (Philipp Zürcher) → The Standard → Lineage → Join the movement → FAQ.

## Notes
- The email signup currently captures client-side only. Connect it to the newsletter / **Hermes** agentic
  comms layer in Phase 1 (see the private project dossier).
- Links out to the open standard at [github.com/operalag/CFT](https://github.com/operalag/CFT).

---
© 2026 Opera RK · *explore · create · evolve*
