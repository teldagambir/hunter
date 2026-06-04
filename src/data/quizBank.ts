export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface QuizLevel {
  id: string;
  name: string;
  description: string;
  badgeName: string;
  questions: QuizQuestion[];
}

export const quizLevels: QuizLevel[] = [
  {
    id: "level-1",
    name: "Level 1 — Dasar Indibiz",
    description: "Fondasi: Basic vs Bisnis, Non-FUP, SLA, dan positioning internet bisnis",
    badgeName: "Paham Dasar Indibiz",
    questions: [
      { question: "Pelanggan bertanya: 'Basic 1:2 itu maksudnya apa?' Jawaban paling tepat?", options: ["Download dan upload sama persis", "Rasio download:upload. Contoh 50 Mbps berarti download hingga 50 Mbps dan upload hingga 25 Mbps", "Dibagi dengan pelanggan lain dalam satu port", "Basic tidak punya upload"], correctIndex: 1, explanation: "Jelaskan sebagai rasio download:upload, bukan sharing port." },
      { question: "Indibiz paling mudah dibedakan dari internet rumah lewat kombinasi apa?", options: ["Harga lebih mahal dan warna modem beda", "Upload/download simetris, SLA bisnis, dan prioritas operasional", "Bisa dipakai WhatsApp", "Selalu gratis add-on"], correctIndex: 1 },
      { question: "Non-FUP paling tepat dijelaskan sebagai...", options: ["Tidak ada batas pemakaian yang menurunkan speed setelah kuota tertentu", "Tidak pernah gangguan", "Gratis biaya instalasi", "Bandwidth dedicated 1:1"], correctIndex: 0 },
      { question: "Pelanggan UMKM pakai paket data untuk QRIS, kasir, dan WA order. Risiko paling relevan untuk dijelaskan?", options: ["Paket data tidak bisa buka WhatsApp", "Koneksi tidak stabil untuk operasional; kalau transaksi/order terganggu, kerugian bisa lebih besar dari biaya internet", "Paket data ilegal untuk bisnis", "Paket data selalu lebih mahal dari fiber"], correctIndex: 1 },
      { question: "Kapan Basic 50 Mbps bukan pilihan pertama yang ideal?", options: ["Toko kecil QRIS + WA", "Warung makan satu kasir", "Live selling rutin, upload berat, atau CCTV cloud banyak", "Laundry kecil"], correctIndex: 2 },
      { question: "Kalimat yang paling aman untuk membuka penawaran Indibiz ke usaha kecil?", options: ["Paket paling mahal saja biar aman", "Ini internet khusus bisnis, stabil untuk QRIS, WA, kasir, dan operasional harian. Mulai dari Basic 50 Mbps", "Internet rumah Bapak pasti jelek", "Semua usaha wajib 1:1"], correctIndex: 1 },
      { question: "SLA sebaiknya dipakai untuk menjelaskan apa?", options: ["Jaminan bahwa tidak akan pernah gangguan", "Standar penanganan/perbaikan layanan bisnis ketika ada gangguan", "Diskon bulanan", "Aplikasi CCTV"], correctIndex: 1 },
      { question: "Jika pelanggan bilang 'yang penting murah', respons paling baik?", options: ["Tolak saja", "Mulai dari Basic 50, lalu hubungkan biaya harian dengan risiko transaksi online terganggu", "Langsung tawarkan Astinet", "Suruh pakai paket data"], correctIndex: 1 },
    ],
  },
  {
    id: "level-2",
    name: "Level 2 — Add-on Produk",
    description: "Netmonk, Antares Eazy Camera, OCA, Phone, dan WMS dasar",
    badgeName: "Paham Add-on Produk",
    questions: [
      { question: "Netmonk paling tepat ditawarkan saat pelanggan...", options: ["Hanya minta harga termurah", "Butuh visibility/monitoring jaringan dan cepat tahu kalau ada gangguan", "Butuh kamera sewa", "Butuh telepon rumah"], correctIndex: 1 },
      { question: "Dalam konteks Indibiz, Antares Eazy harus dijelaskan sebagai...", options: ["Sensor suhu/listrik untuk semua pelanggan", "Antares Eazy Camera untuk pantau area usaha", "Aplikasi chat WA", "Paket internet dedicated"], correctIndex: 1, explanation: "Fokus ke kamera, bukan sensor IoT umum." },
      { question: "Harga Rp35.000/bulan pada Antares Eazy Camera adalah untuk...", options: ["Cloud recording unlimited", "Rental hardware kamera", "Paket internet tambahan", "Biaya instalasi AP"], correctIndex: 1 },
      { question: "Cloud recording Antares Eazy harus dijelaskan sebagai...", options: ["Sudah termasuk Rp35.000", "Tidak tersedia", "Add-on/fitur berbayar terpisah di aplikasi", "Gratis untuk semua pelanggan Indibiz"], correctIndex: 2 },
      { question: "OCA Interaction paling cocok untuk...", options: ["Bisnis yang chat pelanggan/CS-nya ramai via WhatsApp", "Pelanggan butuh CCTV", "Pelanggan butuh AP Wi-Fi", "Pelanggan hanya minta internet termurah"], correctIndex: 0 },
      { question: "Phone Bundle ditawarkan saat...", options: ["Pelanggan masih butuh telepon tetap/admin/vendor", "Pelanggan minta CCTV", "Pelanggan butuh voucher Wi-Fi", "Semua pelanggan wajib ambil"], correctIndex: 0 },
      { question: "WMS Standard berbeda dari WMS Fit terutama karena...", options: ["Standard memakai Access Point; Fit memakai ONT Premium. AP cocok untuk user jauh lebih banyak", "Fit selalu 300 Mbps", "Standard tidak punya SSID", "Fit khusus rumah"], correctIndex: 0 },
      { question: "WMS Standard Gold 50 Mbps harga Januari 2026 adalah...", options: ["Rp393.400", "Rp575.000", "Rp950.000", "Rp1.500.000"], correctIndex: 2 },
    ],
  },
  {
    id: "level-3",
    name: "Level 3 — Rekomendasi Paket",
    description: "Cocokkan kebutuhan pelanggan dengan paket utama dan add-on",
    badgeName: "Siap Rekomendasi Paket",
    questions: [
      { question: "Toko kecil: QRIS, WA Business, kasir, 3-5 device. Budget sensitif. Rekomendasi awal?", options: ["Basic 50 Mbps", "Astinet", "WMS Standard Crown", "OCA Breach Checker saja"], correctIndex: 0 },
      { question: "Toko online rutin live selling dan upload katalog video. Paket lebih masuk akal?", options: ["Basic 50 karena termurah", "Bisnis 50 Mbps 1:1 karena upload stabil", "Phone Bundle", "Pijar"], correctIndex: 1 },
      { question: "Cafe dua lantai, sinyal modem tidak tembus ke belakang, banyak pelanggan minta Wi-Fi. Arahkan ke...", options: ["Paket data", "WMS, idealnya paket dengan AP/mesh sesuai kebutuhan area", "OCA Interaction", "Antares Camera saja"], correctIndex: 1 },
      { question: "Klinik kecil: antrean pasien, BPJS/aplikasi, payment, CCTV ringan. Paket awal + angle?", options: ["Basic 50/75; stabilitas operasional dan antrean tidak terganggu", "Astinet 1 Gbps", "OCA Breach Checker", "TV bundle"], correctIndex: 0 },
      { question: "Sekolah/kursus butuh platform pembelajaran dan Wi-Fi lebih rapi. Kombinasi yang lebih relevan?", options: ["Pijar + WMS/Internet sesuai area", "Phone saja", "Antares Camera saja", "Paket data"], correctIndex: 0 },
      { question: "Pelanggan punya 6 kamera CCTV cloud sering putus. Rekomendasi paling aman?", options: ["Upgrade minimal Basic 75/100 atau Bisnis jika upload kritis", "Kurangi kamera", "Paket data backup saja", "WMS Fit pasti menyelesaikan semua"], correctIndex: 0 },
      { question: "Hotel/gedung/corporate minta SLA tinggi dan dedicated. Tindakan terbaik?", options: ["Arahkan Astinet/koordinasi AM", "Basic 50 saja", "Antares Camera", "OCA Blast"], correctIndex: 0 },
      { question: "Pelanggan banyak chat order via WA dan sering miss follow-up. Add-on paling relevan?", options: ["OCA Interaction", "Netmonk", "Antares Camera", "Phone Bundle"], correctIndex: 0 },
    ],
  },
  {
    id: "level-4",
    name: "Level 4 — Handling Keberatan",
    description: "Jawab keberatan tanpa maksa dan tetap tajam",
    badgeName: "Siap Handling Keberatan",
    questions: [
      { question: "Pelanggan: 'Saya sudah punya IndiHome.' Jawaban terbaik?", options: ["IndiHome jelek", "Bagus untuk rumah. Untuk bisnis, Indibiz punya upload/download simetris, SLA, dan prioritas operasional", "Tidak bisa dipakai usaha", "Langsung minta ganti"], correctIndex: 1 },
      { question: "Pelanggan: 'Mahal.' Respons yang paling kuat?", options: ["Memang mahal", "Hitung biaya harian dan bandingkan dengan risiko QRIS/order/kasir terganggu", "Bapak harus mampu", "Diskon selalu ada"], correctIndex: 1 },
      { question: "Pelanggan: 'Saya bisa beli CCTV sendiri.' Untuk Antares Eazy Camera, jawab...", options: ["Tidak boleh beli sendiri", "Betul, kalau mau keluar biaya perangkat di awal bisa beli. Antares cocok kalau ingin mulai tanpa upfront besar karena kameranya sewa bulanan", "Cloud recording gratis", "Antares bukan kamera"], correctIndex: 1 },
      { question: "Pelanggan: 'Modem saja cukup, ngapain WMS?' Jawaban terbaik?", options: ["WMS wajib", "Kalau area kecil memang cukup. WMS masuk kalau sinyal tidak rata, banyak device, atau butuh AP/SSID lebih rapi", "Modem tidak bisa Wi-Fi", "WMS hanya untuk gamer"], correctIndex: 1 },
      { question: "Pelanggan: 'Netmonk buat apa? Saya tinggal lapor kalau gangguan.' Jawaban terbaik?", options: ["Netmonk membuat pelanggan lebih cepat tahu kondisi jaringan dan membantu monitoring, bukan sekadar tunggu gangguan terasa", "Netmonk mempercepat speed 2x", "Netmonk wajib", "Netmonk untuk CCTV"], correctIndex: 0 },
      { question: "Pelanggan minta harga murah tapi kebutuhannya banyak device + CCTV + live upload. Sikap terbaik?", options: ["Tetap kasih termurah tanpa warning", "Jelaskan trade-off: Basic bisa entry, tapi risiko performa; sarankan upgrade yang sesuai kebutuhan", "Tolak", "Suruh beli paket data"], correctIndex: 1 },
      { question: "Pelanggan: 'Cloud recording Antares sudah termasuk kan?' Jawab...", options: ["Iya termasuk semua", "Belum termasuk. Rp35rb untuk rental kamera, cloud recording add-on terpisah", "Tidak ada cloud recording", "Gratis kalau minta"], correctIndex: 1 },
      { question: "Pelanggan: 'Saya takut ribet.' Respons umum terbaik untuk add-on?", options: ["Memang ribet", "Mulai dari kebutuhan paling jelas dulu; add-on dipilih kalau benar-benar membantu operasional", "Ambil semua saja", "Jangan ambil internet"], correctIndex: 1 },
    ],
  },
  {
    id: "level-5",
    name: "Level 5 — Simulasi Lapangan",
    description: "Kasus multi-kebutuhan: pilih prioritas, paket, dan angle",
    badgeName: "Siap Simulasi Lapangan",
    questions: [
      { question: "Restoran ramai: QRIS, GoFood/GrabFood, kasir, CCTV, 12 device. Owner takut mahal. Pitch terbaik?", options: ["Basic 50 termurah saja, jangan bahas risiko", "Mulai Basic 75/100; angle transaksi dan order online jangan terganggu, jelaskan biaya harian", "Astinet langsung", "Antares Camera saja"], correctIndex: 1 },
      { question: "Klinik: aplikasi BPJS, antrean, payment, WA pasien. Sering komplain internet putus. Prioritas pitch?", options: ["Stabilitas operasional + SLA, paket Basic/Bisnis sesuai device", "Voucher Wi-Fi", "TV", "OCA Breach Checker pertama"], correctIndex: 0 },
      { question: "Cafe: mau Wi-Fi pelanggan dengan login/voucher, area indoor-outdoor. Produk yang harus masuk shortlist?", options: ["WMS Lite/Standard", "Phone Bundle", "Antares Camera saja", "Paket data"], correctIndex: 0 },
      { question: "Toko gadget ITC: live selling, upload produk, marketplace, admin chat. Rekomendasi utama?", options: ["Bisnis 50 1:1 + pertimbangkan OCA kalau chat ramai", "Basic 30 Mbps", "Pijar", "TV"], correctIndex: 0 },
      { question: "Sekolah kecil: kelas online, administrasi, Wi-Fi guru/siswa, butuh solusi belajar. Kombinasi?", options: ["Internet + Pijar + WMS jika coverage perlu", "Antares Camera saja", "Phone only", "OCA Breach Checker saja"], correctIndex: 0 },
      { question: "Apotek: satu ruangan, QRIS, WA, stok online, 4 device. Tidak ada masalah coverage. Jangan over-sell apa?", options: ["WMS Standard AP kalau tidak ada kebutuhan coverage", "Basic 50", "Stabilitas internet", "SLA"], correctIndex: 0 },
      { question: "Ruko dua lantai: internet ada, tapi lantai dua lemah dan banyak device. Fokus discovery berikutnya?", options: ["Jumlah area/device dan kebutuhan AP/WMS", "Warna modem", "Apakah mau TV", "Langsung Astinet"], correctIndex: 0 },
      { question: "Pelanggan sudah punya CCTV analog lokal, tidak butuh pantau cloud. Antares harus...", options: ["Tetap dipaksa", "Tidak diprioritaskan; gali kebutuhan lain seperti internet/WMS/OCA", "Dibilang wajib", "Dibilang cloud gratis"], correctIndex: 1 },
    ],
  },
  {
    id: "level-6",
    name: "Level 6 — Final Field Challenge",
    description: "Skenario lebih sulit: jangan over-sell, pilih next action yang benar",
    badgeName: "Field Ready Indibiz",
    questions: [
      { question: "Owner cafe bilang: 'Saya butuh Wi-Fi pelanggan, tapi takut orang nongkrong lama.' Pilihan solusi/pitch terbaik?", options: ["WMS dengan AP/portal/voucher untuk coverage dan kontrol akses, bukan sekadar internet lebih cepat", "Basic 50 saja", "Antares Camera", "Phone Bundle"], correctIndex: 0 },
      { question: "Pelanggan minta 'yang paling murah' tapi ternyata punya 20 device dan live upload. Apa next action terbaik?", options: ["Tutup dengan Basic 50 tanpa edukasi", "Tawarkan entry + jelaskan risiko, lalu rekomendasikan paket lebih sesuai sebagai opsi utama", "Langsung mundur", "Tawarkan TV"], correctIndex: 1 },
      { question: "Hotel kecil minta Wi-Fi tamu, SSID publik opsional, dan coverage beberapa lantai. Produk paling relevan?", options: ["WMS Standard", "Antares Camera saja", "OCA Interaction", "Basic modem only"], correctIndex: 0 },
      { question: "Pelanggan clinic punya masalah internet dan antrean, tapi juga minta CCTV. Urutan pitch paling rapi?", options: ["Internet stabil dulu sebagai core, lalu Antares Camera jika kebutuhan pantau jelas", "Kamera dulu, internet belakangan", "OCA dulu", "WMS Crown dulu"], correctIndex: 0 },
      { question: "Ada sekolah dengan area kecil satu ruangan, hanya butuh internet admin. Produk yang sebaiknya tidak dipaksakan?", options: ["WMS Standard/AP jika coverage tidak bermasalah", "Basic 50", "Indibiz", "SLA"], correctIndex: 0 },
      { question: "Jika pelanggan butuh cloud recording kamera, statement yang benar?", options: ["Cloud recording Antares included di Rp35rb", "Cloud recording add-on terpisah; Rp35rb adalah rental hardware kamera", "Tidak bisa recording", "Gratis untuk WMS"], correctIndex: 1 },
      { question: "Ketika ragu antara Basic dan Bisnis 1:1, sinyal kebutuhan yang paling kuat untuk Bisnis adalah...", options: ["Upload stabil kritis: live selling, CCTV cloud, file upload, operasional padat", "Pelanggan suka warna merah", "Toko sepi", "Hanya satu HP"], correctIndex: 0 },
      { question: "Skenario akhir: ruko ramai, Wi-Fi belakang lemah, chat WA ramai, CCTV butuh pantau. Paket terbaik bukan satu produk; pendekatannya?", options: ["Core internet sesuai beban + WMS untuk coverage + OCA/Antares hanya jika pain-nya jelas", "Ambil semua add-on tanpa tanya", "Basic 50 saja selalu", "Astinet untuk semua"], correctIndex: 0 },
    ],
  },
];
