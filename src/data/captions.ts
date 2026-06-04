export interface CaptionTemplate {
  id: string;
  kategori: string;
  teks: string;
  paket?: string;
}

export const captionTemplates: CaptionTemplate[] = [
  {
    id: "umum-320",
    kategori: "Umum / Rp320rb",
    teks: "Internet bisnis Indibiz mulai Rp320rb/bulan. Cocok untuk toko, ruko, restoran, QRIS, WhatsApp Business, CCTV, kasir, dan operasional harian. Mau cek coverage? Hubungi saya.",
  },
  {
    id: "fb-qris",
    kategori: "F&B / QRIS",
    teks: "QRIS lemot pas jam ramai? GoFood/GrabFood sering error? Saatnya pindah ke Indibiz. Internet bisnis stabil mulai Rp320rb/bulan. Koneksi usaha tetap lancar.",
  },
  {
    id: "toko",
    kategori: "Toko / Ruko",
    teks: "Toko atau ruko butuh internet stabil untuk transaksi harian? Indibiz solusinya. Upload/download sama cepat, tanpa batas pemakaian, ada jaminan perbaikan.",
  },
  {
    id: "cctv",
    kategori: "CCTV",
    teks: "CCTV sering putus atau gambar pecah? Itu tandanya internet kurang kuat untuk upload. Indibiz dengan kecepatan upload stabil — CCTV tetap awas 24 jam.",
  },
  {
    id: "phone",
    kategori: "Phone Bundle",
    teks: "Butuh internet + telepon tetap untuk kantor? Phone Bundle dari Indibiz. Satu tagihan, dua layanan. Lebih praktis dan hemat.",
  },
  {
    id: "netmonk",
    kategori: "Netmonk",
    teks: "Bukan cuma internet. Dengan Netmonk, koneksi bisnis bisa dipantau real-time. Cocok untuk kantor, klinik, dan sekolah yang tidak mau operasional terganggu.",
  },
  {
    id: "corporate",
    kategori: "Corporate / Astinet",
    teks: "Kebutuhan internet dedicated untuk corporate, hotel, atau gedung? Astinet dari Telkom — koneksi premium dengan SLA tinggi. Konsultasi gratis.",
  },
];
