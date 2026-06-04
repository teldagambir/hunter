/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Fee Sales Paket Promo Akhir Tahun
 *
 * Kolom:
 * - ARPU: Harga promo per bulan (ribuan Rp kecuali disebut)
 * - FEE BLM: Fee teknisi sebelum PPN
 * - FEE TBI: Fee teknisi termasuk PPN
 *
 * Source: Foto FEE SALES PAKET PROMO AKHIR TAHUN (Telkom internal)
 */

export interface PromoFee {
  id: string;
  namaPaket: string;
  tipe: "Bisnis 1:1" | "Basic 1:2";
  kategori: "Inet Only" | "Inet Phone" | "Netmonk + HSI B2B";
  speed: string;
  arpu: number;         // dalam Rupiah
  arpuLabel: string;
  feeBlm: number;       // Fee sebelum PPN
  feeTbi: number;       // Fee termasuk PPN
  feeBlmLabel: string;
  feeTbiLabel: string;
}

export const promoFees: PromoFee[] = [
  // ── HSI BISNIS 1:1 INET ONLY ──
  {
    id: "promo-bisnis-50-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 50 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "50 Mbps",
    arpu: 355000, arpuLabel: "Rp355.000",
    feeBlm: 250500, feeBlmLabel: "Rp250.500",
    feeTbi: 250000, feeTbiLabel: "Rp250.000",
  },
  {
    id: "promo-bisnis-75-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 75 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "75 Mbps",
    arpu: 415000, arpuLabel: "Rp415.000",
    feeBlm: 283000, feeBlmLabel: "Rp283.000",
    feeTbi: 283000, feeTbiLabel: "Rp283.000",
  },
  {
    id: "promo-bisnis-100-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 100 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "100 Mbps",
    arpu: 535000, arpuLabel: "Rp535.000",
    feeBlm: 329500, feeBlmLabel: "Rp329.500",
    feeTbi: 329000, feeTbiLabel: "Rp329.000",
  },
  {
    id: "promo-bisnis-150-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 150 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "150 Mbps",
    arpu: 620000, arpuLabel: "Rp620.000",
    feeBlm: 371500, feeBlmLabel: "Rp371.500",
    feeTbi: 371000, feeTbiLabel: "Rp371.000",
  },
  {
    id: "promo-bisnis-200-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 200 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "200 Mbps",
    arpu: 730000, arpuLabel: "Rp730.000",
    feeBlm: 453000, feeBlmLabel: "Rp453.000",
    feeTbi: 453000, feeTbiLabel: "Rp453.000",
  },
  {
    id: "promo-bisnis-300-inet",
    namaPaket: "HSI BISNIS 1:1 INET ONLY 300 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Only", speed: "300 Mbps",
    arpu: 1130000, arpuLabel: "Rp1.130.000",
    feeBlm: 620000, feeBlmLabel: "Rp620.000",
    feeTbi: 620000, feeTbiLabel: "Rp620.000",
  },

  // ── HSI BISNIS 1:1 INET PHONE ──
  {
    id: "promo-bisnis-50-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 50 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "50 Mbps",
    arpu: 425000, arpuLabel: "Rp425.000",
    feeBlm: 292500, feeBlmLabel: "Rp292.500",
    feeTbi: 292000, feeTbiLabel: "Rp292.000",
  },
  {
    id: "promo-bisnis-75-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 75 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "75 Mbps",
    arpu: 512500, arpuLabel: "Rp512.500",
    feeBlm: 329500, feeBlmLabel: "Rp329.500",
    feeTbi: 329000, feeTbiLabel: "Rp329.000",
  },
  {
    id: "promo-bisnis-100-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 100 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "100 Mbps",
    arpu: 605000, arpuLabel: "Rp605.000",
    feeBlm: 387500, feeBlmLabel: "Rp387.500",
    feeTbi: 387000, feeTbiLabel: "Rp387.000",
  },
  {
    id: "promo-bisnis-150-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 150 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "150 Mbps",
    arpu: 712500, arpuLabel: "Rp712.500",
    feeBlm: 450500, feeBlmLabel: "Rp450.500",
    feeTbi: 450000, feeTbiLabel: "Rp450.000",
  },
  {
    id: "promo-bisnis-200-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 200 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "200 Mbps",
    arpu: 830000, arpuLabel: "Rp830.000",
    feeBlm: 508000, feeBlmLabel: "Rp508.000",
    feeTbi: 508000, feeTbiLabel: "Rp508.000",
  },
  {
    id: "promo-bisnis-300-phone",
    namaPaket: "HSI BISNIS 1:1 INET PHONE 300 MBPS",
    tipe: "Bisnis 1:1", kategori: "Inet Phone", speed: "300 Mbps",
    arpu: 1260000, arpuLabel: "Rp1.260.000",
    feeBlm: 694500, feeBlmLabel: "Rp694.500",
    feeTbi: 694000, feeTbiLabel: "Rp694.000",
  },

  // ── HSI BISNIS 1:1 NETMONK + HSI B2B ──
  {
    id: "promo-bisnis-50-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 50 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "50 Mbps",
    arpu: 461400, arpuLabel: "Rp461.400",
    feeBlm: 283000, feeBlmLabel: "Rp283.000",
    feeTbi: 283000, feeTbiLabel: "Rp283.000",
  },
  {
    id: "promo-bisnis-75-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 75 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "75 Mbps",
    arpu: 528600, arpuLabel: "Rp528.600",
    feeBlm: 329500, feeBlmLabel: "Rp329.500",
    feeTbi: 329000, feeTbiLabel: "Rp329.000",
  },
  {
    id: "promo-bisnis-100-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 100 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "100 Mbps",
    arpu: 661100, arpuLabel: "Rp661.100",
    feeBlm: 397000, feeBlmLabel: "Rp397.000",
    feeTbi: 397000, feeTbiLabel: "Rp397.000",
  },
  {
    id: "promo-bisnis-150-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 150 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "150 Mbps",
    arpu: 761400, arpuLabel: "Rp761.400",
    feeBlm: 453000, feeBlmLabel: "Rp453.000",
    feeTbi: 453000, feeTbiLabel: "Rp453.000",
  },
  {
    id: "promo-bisnis-200-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 200 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "200 Mbps",
    arpu: 946100, arpuLabel: "Rp946.100",
    feeBlm: 518000, feeBlmLabel: "Rp518.000",
    feeTbi: 518000, feeTbiLabel: "Rp518.000",
  },
  {
    id: "promo-bisnis-300-netmonk",
    namaPaket: "HSI BISNIS 1:1 NETMONK + HSI B2B 300 MBPS",
    tipe: "Bisnis 1:1", kategori: "Netmonk + HSI B2B", speed: "300 Mbps",
    arpu: 1276100, arpuLabel: "Rp1.276.100",
    feeBlm: 701500, feeBlmLabel: "Rp701.500",
    feeTbi: 701000, feeTbiLabel: "Rp701.000",
  },

  // ── HSI BASIC 1:2 INET ONLY ──
  {
    id: "promo-basic-50-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 50 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "50 Mbps",
    arpu: 320000, arpuLabel: "Rp320.000",
    feeBlm: 225000, feeBlmLabel: "Rp225.000",
    feeTbi: 225000, feeTbiLabel: "Rp225.000",
  },
  {
    id: "promo-basic-75-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 75 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "75 Mbps",
    arpu: 365000, arpuLabel: "Rp365.000",
    feeBlm: 257500, feeBlmLabel: "Rp257.500",
    feeTbi: 257000, feeTbiLabel: "Rp257.000",
  },
  {
    id: "promo-basic-100-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 100 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "100 Mbps",
    arpu: 440000, arpuLabel: "Rp440.000",
    feeBlm: 287500, feeBlmLabel: "Rp287.500",
    feeTbi: 287000, feeTbiLabel: "Rp287.000",
  },
  {
    id: "promo-basic-150-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 150 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "150 Mbps",
    arpu: 540000, arpuLabel: "Rp540.000",
    feeBlm: 329500, feeBlmLabel: "Rp329.500",
    feeTbi: 329000, feeTbiLabel: "Rp329.000",
  },
  {
    id: "promo-basic-200-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 200 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "200 Mbps",
    arpu: 605000, arpuLabel: "Rp605.000",
    feeBlm: 406500, feeBlmLabel: "Rp406.500",
    feeTbi: 406000, feeTbiLabel: "Rp406.000",
  },
  {
    id: "promo-basic-300-inet",
    namaPaket: "HSI BASIC 1:2 INET ONLY 300 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Only", speed: "300 Mbps",
    arpu: 850000, arpuLabel: "Rp850.000",
    feeBlm: 520000, feeBlmLabel: "Rp520.000",
    feeTbi: 520000, feeTbiLabel: "Rp520.000",
  },

  // ── HSI BASIC 1:2 INET PHONE ──
  {
    id: "promo-basic-50-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 50 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "50 Mbps",
    arpu: 400000, arpuLabel: "Rp400.000",
    feeBlm: 283000, feeBlmLabel: "Rp283.000",
    feeTbi: 283000, feeTbiLabel: "Rp283.000",
  },
  {
    id: "promo-basic-75-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 75 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "75 Mbps",
    arpu: 452500, arpuLabel: "Rp452.500",
    feeBlm: 297000, feeBlmLabel: "Rp297.000",
    feeTbi: 297000, feeTbiLabel: "Rp297.000",
  },
  {
    id: "promo-basic-100-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 100 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "100 Mbps",
    arpu: 540000, arpuLabel: "Rp540.000",
    feeBlm: 329500, feeBlmLabel: "Rp329.500",
    feeTbi: 329000, feeTbiLabel: "Rp329.000",
  },
  {
    id: "promo-basic-150-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 150 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "150 Mbps",
    arpu: 655000, arpuLabel: "Rp655.000",
    feeBlm: 394500, feeBlmLabel: "Rp394.500",
    feeTbi: 394000, feeTbiLabel: "Rp394.000",
  },
  {
    id: "promo-basic-200-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 200 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "200 Mbps",
    arpu: 730000, arpuLabel: "Rp730.000",
    feeBlm: 453000, feeBlmLabel: "Rp453.000",
    feeTbi: 453000, feeTbiLabel: "Rp453.000",
  },
  {
    id: "promo-basic-300-phone",
    namaPaket: "HSI BASIC 1:2 INET PHONE 300 MBPS",
    tipe: "Basic 1:2", kategori: "Inet Phone", speed: "300 Mbps",
    arpu: 1060000, arpuLabel: "Rp1.060.000",
    feeBlm: 580000, feeBlmLabel: "Rp580.000",
    feeTbi: 580000, feeTbiLabel: "Rp580.000",
  },

  // ── HSI BASIC 1:2 NETMONK + HSI B2B ──
  {
    id: "promo-basic-50-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 50 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "50 Mbps",
    arpu: 416100, arpuLabel: "Rp416.100",
    feeBlm: 283000, feeBlmLabel: "Rp283.000",
    feeTbi: 283000, feeTbiLabel: "Rp283.000",
  },
  {
    id: "promo-basic-75-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 75 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "75 Mbps",
    arpu: 468600, arpuLabel: "Rp468.600",
    feeBlm: 308500, feeBlmLabel: "Rp308.500",
    feeTbi: 308000, feeTbiLabel: "Rp308.000",
  },
  {
    id: "promo-basic-100-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 100 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "100 Mbps",
    arpu: 556200, arpuLabel: "Rp556.200",
    feeBlm: 332000, feeBlmLabel: "Rp332.000",
    feeTbi: 332000, feeTbiLabel: "Rp332.000",
  },
  {
    id: "promo-basic-150-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 150 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "150 Mbps",
    arpu: 671400, arpuLabel: "Rp671.400",
    feeBlm: 404000, feeBlmLabel: "Rp404.000",
    feeTbi: 404000, feeTbiLabel: "Rp404.000",
  },
  {
    id: "promo-basic-200-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 200 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "200 Mbps",
    arpu: 806100, arpuLabel: "Rp806.100",
    feeBlm: 457500, feeBlmLabel: "Rp457.500",
    feeTbi: 457000, feeTbiLabel: "Rp457.000",
  },
  {
    id: "promo-basic-300-netmonk",
    namaPaket: "HSI BASIC 1:2 NETMONK + HSI B2B 300 MBPS",
    tipe: "Basic 1:2", kategori: "Netmonk + HSI B2B", speed: "300 Mbps",
    arpu: 1076100, arpuLabel: "Rp1.076.100",
    feeBlm: 590000, feeBlmLabel: "Rp590.000",
    feeTbi: 590000, feeTbiLabel: "Rp590.000",
  },
];

/** Map package kategoriAddon to promo fee kategori names */
const kategoriPromoMap: Record<string, string> = {
  "Internet Only": "Inet Only",
  Phone: "Inet Phone",
  Netmonk: "Netmonk + HSI B2B",
};

/** Helper: lookup promo fee by package speed + tipe + kategoriAddon */
export function findPromoFee(speed: string, tipe: string, kategori: string): PromoFee | undefined {
  const mappedKategori = kategoriPromoMap[kategori] || kategori;
  return promoFees.find(
    (p) =>
      p.speed === speed &&
      p.tipe.toLowerCase().includes(tipe.toLowerCase()) &&
      (p.kategori === mappedKategori || p.kategori.toLowerCase().includes(mappedKategori.toLowerCase())),
  );
}

/** Group promo fees by their category groups */
export function groupPromoFees() {
  const groups: Array<{ title: string; items: PromoFee[] }> = [
    { title: "Bisnis 1:1 — Inet Only", items: promoFees.filter(p => p.tipe === "Bisnis 1:1" && p.kategori === "Inet Only") },
    { title: "Bisnis 1:1 — Inet Phone", items: promoFees.filter(p => p.tipe === "Bisnis 1:1" && p.kategori === "Inet Phone") },
    { title: "Bisnis 1:1 — Netmonk + HSI B2B", items: promoFees.filter(p => p.tipe === "Bisnis 1:1" && p.kategori === "Netmonk + HSI B2B") },
    { title: "Basic 1:2 — Inet Only", items: promoFees.filter(p => p.tipe === "Basic 1:2" && p.kategori === "Inet Only") },
    { title: "Basic 1:2 — Inet Phone", items: promoFees.filter(p => p.tipe === "Basic 1:2" && p.kategori === "Inet Phone") },
    { title: "Basic 1:2 — Netmonk + HSI B2B", items: promoFees.filter(p => p.tipe === "Basic 1:2" && p.kategori === "Netmonk + HSI B2B") },
  ];
  return groups.filter(g => g.items.length > 0);
}

export function formatRupiah(n: number): string {
  return `Rp${n.toLocaleString("id-ID")}`;
}
