export interface FaqItem {
  id: string;
  tanya: string;
  jawab: string;
  tag?: string;
}

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    tanya: "Apa bedanya Basic 1:2 dan Bisnis 1:1?",
    jawab: "Basic 1:2 artinya rasio download:upload. Contoh paket 50 Mbps berarti download hingga 50 Mbps dan upload hingga 25 Mbps. Bisnis 1:1 artinya download dan upload setara, lebih cocok untuk live selling, CCTV cloud, upload file, kantor, atau banyak device.",
    tag: "dasar",
  },
  {
    id: "faq-2",
    tanya: "Apa itu Non-FUP?",
    jawab: "Non-FUP artinya tidak ada batas pemakaian. Pelanggan bisa pakai internet sepuasnya tanpa khawatir kecepatan turun setelah pemakaian tertentu. Ini beda dengan internet rumahan yang biasanya ada FUP.",
    tag: "dasar",
  },
  {
    id: "faq-3",
    tanya: "Apa bedanya Indibiz dan IndiHome?",
    jawab: "Indibiz adalah internet khusus untuk bisnis. Kecepatan upload dan download sama (simetris), prioritas koneksi lebih tinggi, dan ada SLA (jaminan perbaikan). IndiHome untuk rumahan — upload lebih lambat dan tidak ada SLA bisnis.",
    tag: "dasar",
  },
  {
    id: "faq-4",
    tanya: "Kenapa usaha sebaiknya tidak pakai paket data sebagai internet utama?",
    jawab: "Paket data tidak stabil, kecepatan turun kalau banyak dipakai, dan tidak dirancang untuk operasional bisnis. Kalau QRIS, kasir online, atau order masuk tiba-tiba lemot, itu bisa ganggu transaksi dan bikin pelanggan pergi.",
    tag: "dasar",
  },
  {
    id: "faq-5",
    tanya: "Kapan menawarkan Basic 50 Mbps?",
    jawab: "Tawarkan Basic 50 Mbps sebagai paket pertama ke hampir semua pelanggan usaha kecil. Ini paket termurah dan paling aman. Cocok untuk UMKM, toko kecil, F&B, ruko — yang butuh internet stabil untuk QRIS, WhatsApp, dan kasir.",
    tag: "rekomendasi",
  },
  {
    id: "faq-6",
    tanya: "Kapan menawarkan Bisnis 50 Mbps 1:1?",
    jawab: "Tawarkan Bisnis 50 Mbps kalau pelanggan butuh upload stabil — misalnya toko online, live selling, atau bisnis yang banyak upload foto/video produk. Juga cocok kalau pelanggan butuh CCTV cloud atau koneksi prioritas lebih tinggi.",
    tag: "rekomendasi",
  },
  {
    id: "faq-7",
    tanya: "Kapan menawarkan paket 100 Mbps?",
    jawab: "Tawarkan 100 Mbps kalau pelanggan punya banyak device (lebih dari 10-15 perangkat), sering upload file besar, atau operasionalnya sudah padat (contoh: restoran ramai, kantor kecil dengan 5+ karyawan).",
    tag: "rekomendasi",
  },
  {
    id: "faq-8",
    tanya: "Apa itu Netmonk?",
    jawab: "Netmonk adalah layanan monitoring jaringan. Pelanggan bisa pantau kondisi koneksi dan perangkat jaringan secara real-time. Cocok untuk bisnis yang tidak mau operasional terganggu karena internet bermasalah.",
    tag: "produk",
  },
  {
    id: "faq-9",
    tanya: "Netmonk cocok untuk pelanggan seperti apa?",
    jawab: "Cocok untuk kantor, klinik, sekolah, atau bisnis yang punya banyak perangkat dan butuh stabilitas. Jangan tawarkan Netmonk ke pelanggan yang hanya cari paket termurah.",
    tag: "produk",
  },
  {
    id: "faq-10",
    tanya: "Apa itu Antares Eazy Camera?",
    jawab: "Untuk Indibiz, Antares Eazy fokusnya kamera/CCTV. Pelanggan bisa sewa hardware kamera Rp35.000/bulan dan pantau dari aplikasi. Cloud recording belum termasuk; kalau pelanggan butuh rekaman cloud, itu add-on berbayar terpisah.",
    tag: "produk",
  },
  {
    id: "faq-11",
    tanya: "Antares Eazy Camera cocok untuk pelanggan seperti apa?",
    jawab: "Cocok untuk toko, ruko, klinik, apotek, restoran, atau kantor kecil yang butuh kamera tapi tidak mau keluar biaya besar untuk beli perangkat di awal. Jangan jelaskan sebagai sensor IoT suhu/listrik untuk konteks Indibiz ini.",
    tag: "produk",
  },
  {
    id: "faq-12",
    tanya: "Apa itu OCA Interaction?",
    jawab: "OCA Interaction adalah platform komunikasi pelanggan dari Telkom. Membantu bisnis mengelola chat WhatsApp, notifikasi, dan interaksi pelanggan dalam satu dashboard.",
    tag: "produk",
  },
  {
    id: "faq-13",
    tanya: "OCA Interaction cocok untuk pelanggan seperti apa?",
    jawab: "Cocok untuk bisnis yang komunikasi pelanggannya ramai via WhatsApp — misalnya toko online, F&B dengan order delivery, jasa, atau bisnis yang punya tim CS.",
    tag: "produk",
  },
  {
    id: "faq-14",
    tanya: "Apa itu OCA Breach Checker?",
    jawab: "OCA Breach Checker adalah fitur keamanan yang ngecek apakah data perusahaan pelanggan pernah bocor atau terekspos di internet.",
    tag: "produk",
  },
  {
    id: "faq-15",
    tanya: "Kapan menawarkan Phone Bundle?",
    jawab: "Tawarkan Phone Bundle kalau pelanggan masih butuh telepon tetap (PSTN) — misalnya kantor, tenant baru, admin vendor, atau usaha yang komunikasi teleponnya masih aktif.",
    tag: "rekomendasi",
  },
  {
    id: "faq-16",
    tanya: "Kapan menawarkan Astinet?",
    jawab: "Astinet untuk pelanggan corporate, hotel, gedung, atau bisnis yang butuh koneksi dedicated dengan SLA tinggi. Kalau ragu, langsung konsultasi dengan AM.",
    tag: "rekomendasi",
  },
  {
    id: "faq-17",
    tanya: "Kalau pelanggan bilang 'paket data cukup', jawab apa?",
    jawab: "'Paket data mungkin cukup kalau usaha sedang sepi. Tapi kalau QRIS, WhatsApp, order online, kasir, dan CCTV jalan bersamaan, internet bisnis jauh lebih aman.'",
    tag: "keberatan",
  },
  {
    id: "faq-18",
    tanya: "Kalau pelanggan bilang 'sudah pakai IndiHome', jawab apa?",
    jawab: "'IndiHome bagus untuk rumahan. Tapi untuk bisnis, Indibiz punya kecepatan upload yang sama dengan download, prioritas koneksi lebih tinggi, dan ada SLA kalau ada gangguan.'",
    tag: "keberatan",
  },
  {
    id: "faq-19",
    tanya: "Kalau pelanggan bilang 'mahal', jawab apa?",
    jawab: "'Saya paham. Tapi kalau QRIS atau transaksi online lemot karena internet tidak stabil, ruginya bisa lebih besar dari biaya internet per bulan. Mulai dari Rp320rb, itu sekitar Rp10.700/hari — lebih murah dari secangkir kopi.'",
    tag: "keberatan",
  },
  {
    id: "faq-20",
    tanya: "Kalau pelanggan butuh CCTV, tawarkan apa?",
    jawab: "Tawarkan paket Basic 50 Mbps atau Basic 75 Mbps. CCTV butuh upload stabil — pastikan pilih paket yang kecepatan uploadnya cukup. Kalau banyak kamera (4+), sarankan minimal 75 Mbps.",
    tag: "skenario",
  },
  {
    id: "faq-21",
    tanya: "Kalau pelanggan banyak chat WhatsApp/CS, tawarkan apa?",
    jawab: "Tawarkan paket dengan OCA Interaction. Ini membantu pelanggan mengelola chat customer lebih rapi. Internet + OCA mulai Rp400rb/bulan.",
    tag: "skenario",
  },
  {
    id: "faq-22",
    tanya: "Kalau pelanggan hotel/gedung/corporate, harus diarahkan ke produk apa?",
    jawab: "Arahkan ke Astinet atau paket Bisnis 1:1 dengan SLA tinggi. Kalau perlu bantuan harga dan spesifikasi, hubungi AM.",
    tag: "skenario",
  },
  {
    id: "faq-23",
    tanya: "Apa kalimat paling sederhana untuk menjelaskan Indibiz?",
    jawab: "'Indibiz adalah internet khusus untuk bisnis. Stabil, tidak ada batas pemakaian, dan kalau ada masalah cepat diperbaiki.'",
    tag: "dasar",
  },
  {
    id: "faq-24",
    tanya: "Apa paket paling aman untuk ditawarkan pertama kali?",
    jawab: "Basic 50 Mbps Rp320rb/bulan. Ini paket masuk yang paling mudah diterima. Hampir semua usaha kecil cocok dengan paket ini.",
    tag: "rekomendasi",
  },
  {
    id: "faq-25",
    tanya: "Apa paket fallback kalau pelanggan keberatan harga?",
    jawab: "Basic 50 Mbps 1:2 Rp320rb adalah paket termurah. Kalau masih keberatan, jelaskan lagi value internet bisnis vs paket data. Kalau benar-benar tidak sanggup, minimal tinggalkan kontak dan follow-up nanti.",
    tag: "rekomendasi",
  },

  {
    id: "faq-26",
    tanya: "Apa itu Wi-Fi Managed Service?",
    jawab: "Wi-Fi Managed Service adalah layanan Wi-Fi terkelola untuk bisnis. Gunanya membantu coverage dan pengelolaan Wi-Fi, terutama kalau modem standar tidak cukup menjangkau seluruh area usaha atau device pelanggan banyak.",
    tag: "produk",
  },
  {
    id: "faq-27",
    tanya: "Apa bedanya modem-only dan Wi-Fi Managed Service dengan access point?",
    jawab: "WMS Fit memakai ONT Premium dan cocok untuk venue kecil. WMS Standard memakai Access Point dan lebih cocok untuk area luas, banyak ruangan/lantai, user ramai, atau butuh SSID venue/public. Practical benefit: AP bisa melayani sekitar 200+ pelanggan dengan lebih lancar, sedangkan modem biasa sekitar 32 pelanggan. Contoh: WMS Standard Gold 50 Mbps Rp950.000/bulan.",
    tag: "produk",
  },
  {
    id: "faq-28",
    tanya: "Kapan menawarkan Wi-Fi Managed Service?",
    jawab: "Tawarkan saat pelanggan bilang Wi-Fi tidak tembus, banyak device/user, area usaha luas, ruko bertingkat, cafe/restoran ramai, sekolah, klinik, hotel kecil, atau kantor. Tekankan AP WMS untuk kapasitas sekitar 200+ pelanggan dibanding modem biasa sekitar 32 pelanggan. Untuk entry venue kecil bisa mulai WMS Fit Gold 50 Mbps Rp393.400; untuk access point mulai WMS Standard Gamer 30 Rp600.000 atau Standard Gold 50 Rp950.000.",
    tag: "rekomendasi",
  },

  {
    id: "faq-29",
    tanya: "Ringkasnya paket WMS apa saja?",
    jawab: "WMS Fit: 50/75/100 Mbps dengan ONT Premium, Rp393.400 / Rp519.400 / Rp643.300. WMS Lite: 30/40/50/100 Mbps, Rp375.000 sampai Rp1.000.000, beberapa paket punya mesh/voucher. WMS Standard: 30/40/50/100/150/200/300 Mbps dengan Access Point, Rp600.000 sampai Rp4.500.000.",
    tag: "produk",
  },
  {
    id: "faq-30",
    tanya: "Apa beda WMS Fit, Lite, dan Standard?",
    jawab: "Fit paling sederhana untuk venue kecil dengan ONT Premium. Lite cocok kalau butuh fitur lebih seperti mesh/voucher pada paket tertentu. Standard paling serius untuk venue yang butuh Access Point, SSID publik opsional, dan kapasitas lebih besar.",
    tag: "produk",
  },
];
