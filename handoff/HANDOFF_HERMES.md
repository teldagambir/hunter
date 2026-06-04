# Indibiz Hunter Handoff

## Goal
Continue development of **Indibiz Hunter** (PWA for field technicians), especially the Setoran flow and future Google Form integration.

## Current State
- App is a working PWA and deploys from GitHub/Vercel.
- Live repo: `github.com/teldagambir/hunter`
- Current live app: `https://hunter-phi-blond.vercel.app`
- Main focus: `src/pages/SetoranPage.tsx`
- Prospek page uses Leaflet and is stable.

## What works
- KTP OCR captures:
  - Nama PIC Pelanggan
  - Alamat KTP
- Address logic:
  - Ask if installation address == KTP address
  - If yes: use KTP address
  - If no: use GPS + Leaflet map + tap-to-place
- KTP preview persists when going back.
- PWA install flow works.
- Setoran/Prospek WIP hooks exist for future beta/prod split.

## What is intentionally incomplete
- Final submit is still a **draft**.
- Real Google Form `bit.ly/indibizteknisi` mapping is **not yet wired**.
- Google Form scraping is blocked by Google sign-in / browser security.
- Birth fields removed from the review flow.

## Important files
- `src/pages/SetoranPage.tsx`
- `src/pages/PetaProspekPage.tsx`
- `src/components/BottomNav.tsx`
- `src/pages/HomePage.tsx`
- `src/data/packages.ts`

## Current technical details
- Setoran map now reuses Leaflet like Prospek.
- Map interaction is tap-to-place / zoom, not custom image map.
- Setoran bottom submit currently logs a draft payload and alerts that real form mapping is pending.
- WIP lock hooks exist via env flag idea `VITE_LOCK_WIP=true`.

## Next best steps
1. Get the real Google Form field names / package options.
2. Map submit to the actual `bit.ly/indibizteknisi` flow.
3. Decide whether to keep Setoran and Prospek visible-but-disabled in prod or split beta/prod later.
4. Optionally reduce the page complexity further for field use.

## Notes
- Do not lose the current KTP OCR state restoration logic.
- Do not replace Leaflet with custom map rendering; the custom approach was flaky.
- The map in Setoran should stay close to Prospek’s implementation.
