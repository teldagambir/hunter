# Indibiz Hunter — Session State (2026-06-03)

## Overview
PWA for Telkom Gambir-Cideng technicians. Deployed on Vercel.
- **URL:** https://hunter-phi-blond.vercel.app
- **Shortlink:** tinyurl.com/gambircideng
- **GitHub:** github.com/teldagambir/hunter (main branch)
- **App Name:** Indibiz Hunter (short: iB Hunter)
- **Icon:** Crosshair/target with "H" — dark charcoal bg, red center, gold accents

## Current Features

### Pages
1. **HomePage** — Dashboard with 4 nav cards + install banner
2. **PaketPage** — Tab: "Semua Paket" + "Paket Promo"
   - Semua Paket: 128 packages, category filters, search, grouped view. Fee badge (TBI) on every card.
   - Paket Promo: 37 promo packages with ARPU + Fee TBI, grouped by category
3. **ProductKnowledgePage** — Tabs: FAQ / Library / Kuis
   - FAQ: 31 items, grouped by topic (Dasar, Rekomendasi, Produk, Keberatan, Skenario), filter pills, search
   - Library: 11 product deep-dives
   - Kuis: 6 progressive levels, certificate generation with name
4. **PetaProspekPage** — OpenStreetMap + Leaflet, 141 prospect points, filters, search, bottom sheet
5. **BuatKontenPage** — WA message generator, caption templates, poster request system

### Features
- **PWA Installable:** manifest, service worker, offline support via Workbox
- **Install Banner:** appears on homepage after 1.5s, fallback to manual instructions
- **Offline:** precached assets + Google Fonts caching
- **Copy to clipboard** on package info and generated messages

## Tech Stack
- React 19 + TypeScript + Vite 8
- Tailwind CSS 4
- Leaflet / react-leaflet (maps)
- Workbox (service worker via vite-plugin-pwa)
- Vercel deployment

## Recent Changes (last commit: 7852f08)
- Rename to "Indibiz Hunter"
- New hunter-themed icon (crosshair + H)
- PWA install banner with fallback
- FAQ grouped by topic with filter pills
- Removed Rekomendasi tab
- Fee TBI shown on all package cards
- Added packages: Mesh WiFi, Antares Eazy (higher speeds), Pijar (all speeds), standard pricing, winback 150-300M
- Promo fee data from FEE SALES PAKET PROMO AKHIR TAHUN document

## Next / Ongoing
- **Prospek Map** — listed as "on development" in Telegram message
- **Custom domain** — could make URL more memorable

## Known Issues
- git push via CLI auth fails (token works via REST API only, force-push via API needed)
- Repo history has orphan commits from API pushes (force-push only)

## Telegram Message Sent to Group
```markdown
📢 PENGUMUMAN — TEKNISI GAMBIR CIDENG

Telah tersedia Indibiz Hunter, aplikasi pendukung operasional lapangan.

---

FITUR YANG TERSEDIA:

1. Daftar Paket & Fee
Seluruh paket Indibiz (Basic, Bisnis, WMS) dilengkapi fee teknisi. Fee yang tercantum sudah termasuk PPN.

2. Paket Promo
Daftar paket promo periode berjalan dengan harga dan fee yang berlaku.

3. Product Knowledge
— FAQ: 30+ pertanyaan umum pelanggan dan cara penanganannya.
— Library Produk: penjelasan Netmonk, Antares Eazy, OCA, WMS, dan produk lainnya.
— Kuis 6 Level: untuk menguji pemahaman produk. Bagi yang menyelesaikan seluruh level dengan nilai 100, silakan lapor ke koordinator. Tersedia hadiah.

4. Prospek Map (Dalam Pengembangan)
Peta titik prospek dengan informasi kontak dan prioritas kunjungan.

5. Generator Konten
Pembuatan pesan WhatsApp penawaran dengan mengisi data pelanggan.

6. Mode Offline
Aplikasi tetap dapat digunakan tanpa koneksi internet.

---

CARA INSTALASI:

1. Buka tautan: tinyurl.com/gambircideng
2. Tap "Install" pada banner yang muncul, atau melalui menu ⋮ → "Add to Home Screen".
3. Ikon "iB Hunter" akan muncul di layar utama perangkat.

---

Pertanyaan, saran, atau permintaan fitur dapat disampaikan melalui grup ini.

Link: tinyurl.com/gambircideng
```
