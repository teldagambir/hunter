type PackageTipe = "Basic" | "Bisnis";
type AddonCategory = "Internet Only" | "Phone" | "Netmonk" | "OCA" | "Antares" | "Antares Eazy" | "OCA Breach Checker" | "Pijar" | "Mesh WiFi" | "TV" | "3S" | "Astinet" | "WMS" | "Other";

export interface Package {
  id: string;
  namaPaket: string;
  speed: string;
  tipe: PackageTipe;
  rasio: string;
  kategoriAddon: AddonCategory;
  hargaBulanan: number;
  hargaLabel: string;
  label?: string;
  cocokUntuk: string;
  angleJualan: string;
  tags: string[];
}

export const allPackages: Package[] = [
  // ── HIGHLIGHTED / REKOMENDASI ──
  {
    id: "basic-50-12-inet",
    namaPaket: "Basic 50 Mbps 1:2",
    speed: "50 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "Internet Only",
    hargaBulanan: 320000, hargaLabel: "Rp320.000/bulan",
    label: "Termurah / Hook",
    cocokUntuk: "UMKM, toko, ruko, F&B, QRIS, WhatsApp Business",
    angleJualan: "Paket paling mudah ditawarkan untuk usaha kecil yang masih pakai paket data atau internet rumahan.",
    tags: ["murah", "hook", "starter"],
  },
  {
    id: "bisnis-50-11-inet",
    namaPaket: "Bisnis 50 Mbps 1:1",
    speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1",
    kategoriAddon: "Internet Only",
    hargaBulanan: 355000, hargaLabel: "Rp355.000/bulan",
    label: "Best 1:1 Starter",
    cocokUntuk: "Toko online, live selling, upload stabil, banyak transaksi",
    angleJualan: "Lebih cocok untuk usaha yang butuh upload stabil dan koneksi lebih serius.",
    tags: ["bisnis", "upload", "stabil"],
  },
  {
    id: "basic-75-12-inet",
    namaPaket: "Basic 75 Mbps 1:2",
    speed: "75 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "Internet Only",
    hargaBulanan: 365000, hargaLabel: "Rp365.000/bulan",
    label: "Value Upgrade",
    cocokUntuk: "Toko sedang, ruko ramai, beberapa device",
    angleJualan: "Naik sedikit dari 50 Mbps, cocok kalau pemakaian sudah mulai ramai.",
    tags: ["upgrade", "value"],
  },
  {
    id: "basic-100-12-inet",
    namaPaket: "Basic 100 Mbps 1:2",
    speed: "100 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "Internet Only",
    hargaBulanan: 440000, hargaLabel: "Rp440.000/bulan",
    label: "Best Value Speed",
    cocokUntuk: "Kantor kecil, toko ramai, F&B ramai",
    angleJualan: "Pilihan aman untuk usaha yang device-nya lebih banyak.",
    tags: ["value", "speed"],
  },
  {
    id: "basic-50-netmonk",
    namaPaket: "Basic 50 Mbps + Netmonk",
    speed: "50 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "Netmonk",
    hargaBulanan: 416100, hargaLabel: "Rp416.100/bulan",
    label: "Monitoring",
    cocokUntuk: "Kantor, sekolah, klinik, bisnis yang butuh pantau jaringan",
    angleJualan: "Bukan hanya internet, tapi juga ada monitoring jaringan.",
    tags: ["monitoring", "netmonk"],
  },
  {
    id: "basic-50-phone",
    namaPaket: "Basic 50 Mbps + Phone",
    speed: "50 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "Phone",
    hargaBulanan: 400000, hargaLabel: "Rp400.000/bulan",
    label: "Phone Bundle",
    cocokUntuk: "Kantor, tenant baru, admin/vendor, usaha yang masih butuh telepon",
    angleJualan: "Internet bisnis plus benefit telepon.",
    tags: ["phone", "bundle"],
  },
  {
    id: "basic-50-oca-interaction",
    namaPaket: "Basic 50 Mbps + OCA Interaction Lite",
    speed: "50 Mbps", tipe: "Basic", rasio: "1:2",
    kategoriAddon: "OCA",
    hargaBulanan: 464000, hargaLabel: "Rp464.000/bulan",
    label: "Customer Chat",
    cocokUntuk: "Bisnis yang banyak chat pelanggan, CS, order via WhatsApp",
    angleJualan: "Cocok untuk usaha yang komunikasi pelanggannya ramai.",
    tags: ["chat", "oca", "cs"],
  },
  {
    id: "astinet",
    namaPaket: "Astinet",
    speed: "Custom", tipe: "Bisnis", rasio: "1:1",
    kategoriAddon: "Astinet",
    hargaBulanan: 0, hargaLabel: "Konsultasi ke AM",
    label: "Premium",
    cocokUntuk: "Corporate, hotel, gedung, pelanggan high SLA",
    angleJualan: "Untuk kebutuhan internet dedicated kelas premium.",
    tags: ["premium", "dedicated", "corporate"],
  },

  // ── HSI BISNIS 1:1 INET ONLY ──
  { id: "bisnis-50-11-inet", namaPaket: "Bisnis 50 Mbps 1:1 Inet Only", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 355000, hargaLabel: "Rp355.000/bulan", label: "Best 1:1 Starter", cocokUntuk: "Toko online, live selling, upload stabil", angleJualan: "Koneksi 1:1 dedicated untuk bisnis yang butuh upload stabil.", tags: ["bisnis", "11"] },
  { id: "bisnis-75-11-inet", namaPaket: "Bisnis 75 Mbps 1:1 Inet Only", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 519000, hargaLabel: "Rp519.000/bulan", cocokUntuk: "Toko online ramai, live selling HD, kantor kecil", angleJualan: "Upgrade dari 50 Mbps untuk bisnis yang makin tumbuh.", tags: ["bisnis", "11"] },
  { id: "bisnis-100-11-inet", namaPaket: "Bisnis 100 Mbps 1:1 Inet Only", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 669000, hargaLabel: "Rp669.000/bulan", cocokUntuk: "Kantor, bisnis dengan banyak device dan traffic tinggi", angleJualan: "Kecepatan penuh untuk bisnis yang sudah padat operasional.", tags: ["bisnis", "11"] },
  { id: "bisnis-150-11-inet", namaPaket: "Bisnis 150 Mbps 1:1 Inet Only", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 819000, hargaLabel: "Rp819.000/bulan", cocokUntuk: "Kantor menengah, bisnis dengan kebutuhan besar", angleJualan: "Koneksi高速 untuk bisnis skala menengah ke atas.", tags: ["bisnis", "11"] },
  { id: "bisnis-200-11-inet", namaPaket: "Bisnis 200 Mbps 1:1 Inet Only", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 1049000, hargaLabel: "Rp1.049.000/bulan", cocokUntuk: "Kantor besar, bisnis multi-departemen", angleJualan: "Bandwidth lebar untuk operasional skala besar.", tags: ["bisnis", "11"] },
  { id: "bisnis-300-11-inet", namaPaket: "Bisnis 300 Mbps 1:1 Inet Only", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 1499000, hargaLabel: "Rp1.499.000/bulan", cocokUntuk: "Corporate, kebutuhan high traffic", angleJualan: "Koneksi premium untuk kebutuhan kelas enterprise.", tags: ["bisnis", "11", "premium"] },

  // ── HSI BISNIS 1:1 2S PHONE ──
  { id: "bisnis-50-11-phone", namaPaket: "Bisnis 50 Mbps 1:1 + Phone", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 395000, hargaLabel: "Rp395.000/bulan", cocokUntuk: "Kantor, tenant baru, butuh telepon tetap", angleJualan: "Internet dedicated plus telepon untuk operasional.", tags: ["bisnis", "phone"] },
  { id: "bisnis-75-11-phone", namaPaket: "Bisnis 75 Mbps 1:1 + Phone", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 559000, hargaLabel: "Rp559.000/bulan", cocokUntuk: "Kantor dengan telepon dan internet stabil", angleJualan: "Kombinasi internet dedicated dan komunikasi telepon.", tags: ["bisnis", "phone"] },
  { id: "bisnis-100-11-phone", namaPaket: "Bisnis 100 Mbps 1:1 + Phone", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 709000, hargaLabel: "Rp709.000/bulan", cocokUntuk: "Kantor dengan kebutuhan tinggi", angleJualan: "Solusi lengkap internet dedicated + telepon.", tags: ["bisnis", "phone"] },
  { id: "bisnis-150-11-phone", namaPaket: "Bisnis 150 Mbps 1:1 + Phone", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 859000, hargaLabel: "Rp859.000/bulan", cocokUntuk: "Bisnis menengah dengan banyak jalur komunikasi", angleJualan: "Internet lebar + telepon untuk bisnis yang sibuk.", tags: ["bisnis", "phone"] },
  { id: "bisnis-200-11-phone", namaPaket: "Bisnis 200 Mbps 1:1 + Phone", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 1089000, hargaLabel: "Rp1.089.000/bulan", cocokUntuk: "Kantor besar dengan banyak ekstensi", angleJualan: "Koneksi dan komunikasi dalam satu paket.", tags: ["bisnis", "phone"] },

  // ── HSI BISNIS 1:1 NETMONK ──
  { id: "bisnis-50-11-netmonk", namaPaket: "Bisnis 50 Mbps 1:1 + Netmonk", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 465000, hargaLabel: "Rp465.000/bulan", cocokUntuk: "Kantor, klinik, sekolah butuh monitoring", angleJualan: "Internet dedicated plus monitoring jaringan real-time.", tags: ["bisnis", "netmonk"] },
  { id: "bisnis-75-11-netmonk", namaPaket: "Bisnis 75 Mbps 1:1 + Netmonk", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 545000, hargaLabel: "Rp545.000/bulan", cocokUntuk: "Bisnis yang peduli stabilitas jaringan", angleJualan: "Pantau koneksi bisnis lebih mudah dengan Netmonk.", tags: ["bisnis", "netmonk"] },
  { id: "bisnis-100-11-netmonk", namaPaket: "Bisnis 100 Mbps 1:1 + Netmonk", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 695000, hargaLabel: "Rp695.000/bulan", cocokUntuk: "Bisnis multi-device butuh visibility", angleJualan: "Lihat kondisi jaringan kapan saja.", tags: ["bisnis", "netmonk"] },
  { id: "bisnis-150-11-netmonk", namaPaket: "Bisnis 150 Mbps 1:1 + Netmonk", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 845000, hargaLabel: "Rp845.000/bulan", cocokUntuk: "Kantor menengah dengan banyak perangkat", angleJualan: "Koneksi cepat + monitoring lengkap.", tags: ["bisnis", "netmonk"] },
  { id: "bisnis-200-11-netmonk", namaPaket: "Bisnis 200 Mbps 1:1 + Netmonk", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 1075000, hargaLabel: "Rp1.075.000/bulan", cocokUntuk: "Bisnis besar dengan kebutuhan monitoring", angleJualan: "Solusi lengkap bandwidth lebar + monitoring.", tags: ["bisnis", "netmonk"] },

  // ── HSI BISNIS 1:1 TV ──
  { id: "bisnis-50-11-tv", namaPaket: "Bisnis 50 Mbps 1:1 + TV", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "TV", hargaBulanan: 524000, hargaLabel: "Rp524.000/bulan", cocokUntuk: "Kantor, lobby, ruang tunggu", angleJualan: "Internet dedicated plus hiburan TV.", tags: ["bisnis", "tv"] },
  { id: "bisnis-75-11-tv", namaPaket: "Bisnis 75 Mbps 1:1 + TV", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "TV", hargaBulanan: 604000, hargaLabel: "Rp604.000/bulan", cocokUntuk: "Kantor dengan area publik", angleJualan: "Koneksi stabil + TV untuk ruang tunggu.", tags: ["bisnis", "tv"] },
  { id: "bisnis-100-11-tv", namaPaket: "Bisnis 100 Mbps 1:1 + TV", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "TV", hargaBulanan: 754000, hargaLabel: "Rp754.000/bulan", cocokUntuk: "Kantor menengah dengan TV display", angleJualan: "Paket lengkap untuk kebutuhan kantor.", tags: ["bisnis", "tv"] },
  { id: "bisnis-150-11-tv", namaPaket: "Bisnis 150 Mbps 1:1 + TV", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "TV", hargaBulanan: 904000, hargaLabel: "Rp904.000/bulan", cocokUntuk: "Bisnis menengah besar", angleJualan: "Bandwidth besar plus hiburan.", tags: ["bisnis", "tv"] },
  { id: "bisnis-200-11-tv", namaPaket: "Bisnis 200 Mbps 1:1 + TV", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "TV", hargaBulanan: 1134000, hargaLabel: "Rp1.134.000/bulan", cocokUntuk: "Kantor besar dengan TV display", angleJualan: "Koneksi dedicated + TV premium.", tags: ["bisnis", "tv"] },

  // ── HSI BISNIS 1:1 3S ──
  { id: "bisnis-50-11-3s", namaPaket: "Bisnis 50 Mbps 1:1 3S", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 624000, hargaLabel: "Rp624.000/bulan", cocokUntuk: "Kantor dengan internet + phone + TV", angleJualan: "Paket all-in-one untuk bisnis.", tags: ["bisnis", "3s"] },
  { id: "bisnis-75-11-3s", namaPaket: "Bisnis 75 Mbps 1:1 3S", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 704000, hargaLabel: "Rp704.000/bulan", cocokUntuk: "Kantor dengan tiga layanan sekaligus", angleJualan: "Internet, telepon, dan TV dalam satu paket.", tags: ["bisnis", "3s"] },
  { id: "bisnis-100-11-3s", namaPaket: "Bisnis 100 Mbps 1:1 3S", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 854000, hargaLabel: "Rp854.000/bulan", cocokUntuk: "Bisnis yang butuh tiga layanan", angleJualan: "Solusi lengkap untuk bisnis modern.", tags: ["bisnis", "3s"] },
  { id: "bisnis-150-11-3s", namaPaket: "Bisnis 150 Mbps 1:1 3S", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 1004000, hargaLabel: "Rp1.004.000/bulan", cocokUntuk: "Kantor menengah besar", angleJualan: "Tiga layanan, satu harga bersaing.", tags: ["bisnis", "3s"] },
  { id: "bisnis-200-11-3s", namaPaket: "Bisnis 200 Mbps 1:1 3S", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 1234000, hargaLabel: "Rp1.234.000/bulan", cocokUntuk: "Kantor besar dengan tiga layanan", angleJualan: "Paket all-in-one untuk bisnis skala besar.", tags: ["bisnis", "3s"] },
  { id: "bisnis-300-11-3s", namaPaket: "Bisnis 300 Mbps 1:1 3S", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "3S", hargaBulanan: 1724000, hargaLabel: "Rp1.724.000/bulan", cocokUntuk: "Corporate dengan kebutuhan besar", angleJualan: "Koneksi premium + telepon + TV.", tags: ["bisnis", "3s", "premium"] },

  // ── HSI BASIC 1:2 INET ONLY ──
  { id: "basic-50-12-inet", namaPaket: "Basic 50 Mbps 1:2 Inet Only", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 320000, hargaLabel: "Rp320.000/bulan", label: "Termurah / Hook", cocokUntuk: "UMKM, toko, ruko, F&B, QRIS", angleJualan: "Paket masuk untuk usaha kecil.", tags: ["basic", "murah"] },
  { id: "basic-75-12-inet", namaPaket: "Basic 75 Mbps 1:2 Inet Only", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 365000, hargaLabel: "Rp365.000/bulan", label: "Value Upgrade", cocokUntuk: "Toko ramai, ruko, beberapa device", angleJualan: "Naik dikit, dapet lebih lega.", tags: ["basic", "upgrade"] },
  { id: "basic-100-12-inet", namaPaket: "Basic 100 Mbps 1:2 Inet Only", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 440000, hargaLabel: "Rp440.000/bulan", label: "Best Value Speed", cocokUntuk: "Kantor kecil, toko ramai, F&B ramai", angleJualan: "Speed besar, harga tetap ramah.", tags: ["basic", "value"] },
  { id: "basic-150-12-inet", namaPaket: "Basic 150 Mbps 1:2 Inet Only", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 540000, hargaLabel: "Rp540.000/bulan", cocokUntuk: "Kantor kecil menengah, multi-device", angleJualan: "Koneksi kencang untuk tim kecil.", tags: ["basic"] },
  { id: "basic-200-12-inet", namaPaket: "Basic 200 Mbps 1:2 Inet Only", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 750000, hargaLabel: "Rp750.000/bulan", cocokUntuk: "Kantor dengan banyak device", angleJualan: "Bandwidth besar untuk operasional padat.", tags: ["basic"] },
  { id: "basic-300-12-inet", namaPaket: "Basic 300 Mbps 1:2 Inet Only", speed: "300 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 1020000, hargaLabel: "Rp1.020.000/bulan", cocokUntuk: "Bisnis skala besar", angleJualan: "Kecepatan tinggi dengan harga Basic.", tags: ["basic", "premium"] },

  // ── HSI BASIC 1:2 PHONE ──
  { id: "basic-50-12-phone", namaPaket: "Basic 50 Mbps 1:2 + Phone", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Phone", hargaBulanan: 400000, hargaLabel: "Rp400.000/bulan", label: "Phone Bundle", cocokUntuk: "Kantor, tenant baru, butuh telepon", angleJualan: "Internet plus telepon dalam satu paket.", tags: ["basic", "phone"] },
  { id: "basic-75-12-phone", namaPaket: "Basic 75 Mbps 1:2 + Phone", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Phone", hargaBulanan: 452500, hargaLabel: "Rp452.500/bulan", cocokUntuk: "Kantor dengan telepon tetap", angleJualan: "Koneksi stabil dan komunikasi telepon.", tags: ["basic", "phone"] },
  { id: "basic-100-12-phone", namaPaket: "Basic 100 Mbps 1:2 + Phone", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Phone", hargaBulanan: 540000, hargaLabel: "Rp540.000/bulan", cocokUntuk: "Kantor kecil menengah", angleJualan: "Internet + telepon untuk operasional harian.", tags: ["basic", "phone"] },
  { id: "basic-150-12-phone", namaPaket: "Basic 150 Mbps 1:2 + Phone", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Phone", hargaBulanan: 655000, hargaLabel: "Rp655.000/bulan", cocokUntuk: "Kantor menengah", angleJualan: "Kombinasi internet lebar dan telepon.", tags: ["basic", "phone"] },
  { id: "basic-200-12-phone", namaPaket: "Basic 200 Mbps 1:2 + Phone", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Phone", hargaBulanan: 790000, hargaLabel: "Rp790.000/bulan", cocokUntuk: "Kantor dengan banyak kebutuhan komunikasi", angleJualan: "Paket lengkap untuk kantor sibuk.", tags: ["basic", "phone"] },

  // ── HSI BASIC 1:2 NETMONK ──
  { id: "basic-50-12-netmonk", namaPaket: "Basic 50 Mbps 1:2 + Netmonk", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Netmonk", hargaBulanan: 416100, hargaLabel: "Rp416.100/bulan", label: "Monitoring", cocokUntuk: "Sekolah, klinik, kantor butuh pantau jaringan", angleJualan: "Internet bisnis plus monitoring jaringan.", tags: ["basic", "netmonk"] },
  { id: "basic-75-12-netmonk", namaPaket: "Basic 75 Mbps 1:2 + Netmonk", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Netmonk", hargaBulanan: 468600, hargaLabel: "Rp468.600/bulan", cocokUntuk: "Bisnis yang peduli stabilitas", angleJualan: "Pantau koneksi lebih mudah.", tags: ["basic", "netmonk"] },
  { id: "basic-100-12-netmonk", namaPaket: "Basic 100 Mbps 1:2 + Netmonk", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Netmonk", hargaBulanan: 556200, hargaLabel: "Rp556.200/bulan", cocokUntuk: "Bisnis multi-device", angleJualan: "Visibility penuh atas jaringan bisnis.", tags: ["basic", "netmonk"] },
  { id: "basic-150-12-netmonk", namaPaket: "Basic 150 Mbps 1:2 + Netmonk", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Netmonk", hargaBulanan: 671100, hargaLabel: "Rp671.100/bulan", cocokUntuk: "Kantor menengah", angleJualan: "Internet + monitoring dalam satu paket.", tags: ["basic", "netmonk"] },
  { id: "basic-200-12-netmonk", namaPaket: "Basic 200 Mbps 1:2 + Netmonk", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Netmonk", hargaBulanan: 806100, hargaLabel: "Rp806.100/bulan", cocokUntuk: "Kantor besar", angleJualan: "Bandwidth besar + monitoring lengkap.", tags: ["basic", "netmonk"] },

  // ── HSI BASIC 1:2 TV ──
  { id: "basic-50-12-tv", namaPaket: "Basic 50 Mbps 1:2 + TV", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "TV", hargaBulanan: 460000, hargaLabel: "Rp460.000/bulan", cocokUntuk: "Kantor dengan ruang tunggu", angleJualan: "Internet bisnis plus hiburan TV.", tags: ["basic", "tv"] },
  { id: "basic-75-12-tv", namaPaket: "Basic 75 Mbps 1:2 + TV", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "TV", hargaBulanan: 512000, hargaLabel: "Rp512.000/bulan", cocokUntuk: "Kantor kecil dengan area publik", angleJualan: "Koneksi stabil + TV.", tags: ["basic", "tv"] },
  { id: "basic-100-12-tv", namaPaket: "Basic 100 Mbps 1:2 + TV", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "TV", hargaBulanan: 600000, hargaLabel: "Rp600.000/bulan", cocokUntuk: "Kantor menengah", angleJualan: "Paket internet + TV yang terjangkau.", tags: ["basic", "tv"] },
  { id: "basic-150-12-tv", namaPaket: "Basic 150 Mbps 1:2 + TV", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "TV", hargaBulanan: 715000, hargaLabel: "Rp715.000/bulan", cocokUntuk: "Kantor menengah besar", angleJualan: "Speed tinggi plus hiburan TV.", tags: ["basic", "tv"] },
  { id: "basic-200-12-tv", namaPaket: "Basic 200 Mbps 1:2 + TV", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "TV", hargaBulanan: 850000, hargaLabel: "Rp850.000/bulan", cocokUntuk: "Kantor besar", angleJualan: "Bandwidth lebar + TV premium.", tags: ["basic", "tv"] },

  // ── HSI BASIC 1:2 3S ──
  { id: "basic-50-12-3s", namaPaket: "Basic 50 Mbps 1:2 3S", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 560000, hargaLabel: "Rp560.000/bulan", cocokUntuk: "Kantor dengan tiga layanan", angleJualan: "All-in-one hemat untuk bisnis.", tags: ["basic", "3s"] },
  { id: "basic-75-12-3s", namaPaket: "Basic 75 Mbps 1:2 3S", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 612000, hargaLabel: "Rp612.000/bulan", cocokUntuk: "Kantor butuh lengkap", angleJualan: "Internet, telepon, TV — satu paket.", tags: ["basic", "3s"] },
  { id: "basic-100-12-3s", namaPaket: "Basic 100 Mbps 1:2 3S", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 700000, hargaLabel: "Rp700.000/bulan", cocokUntuk: "Kantor menengah", angleJualan: "Tiga layanan, satu harga praktis.", tags: ["basic", "3s"] },
  { id: "basic-150-12-3s", namaPaket: "Basic 150 Mbps 1:2 3S", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 815000, hargaLabel: "Rp815.000/bulan", cocokUntuk: "Kantor menengah besar", angleJualan: "Speed besar + tiga layanan.", tags: ["basic", "3s"] },
  { id: "basic-200-12-3s", namaPaket: "Basic 200 Mbps 1:2 3S", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 950000, hargaLabel: "Rp950.000/bulan", cocokUntuk: "Kantor besar", angleJualan: "Paket lengkap untuk kebutuhan maksimal.", tags: ["basic", "3s"] },
  { id: "basic-300-12-3s", namaPaket: "Basic 300 Mbps 1:2 3S", speed: "300 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "3S", hargaBulanan: 1220000, hargaLabel: "Rp1.220.000/bulan", cocokUntuk: "Corporate", angleJualan: "Premium all-in-one dengan speed tinggi.", tags: ["basic", "3s", "premium"] },

  // ── OCA ADDONS ──
  { id: "bisnis-50-11-oca-blast", namaPaket: "Bisnis 50 Mbps 1:1 + OCA Blast Lite", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "OCA", hargaBulanan: 668900, hargaLabel: "Rp668.900/bulan", cocokUntuk: "Bisnis butuh customer chat + internet dedicated", angleJualan: "Internet dedicated plus OCA untuk komunikasi pelanggan.", tags: ["bisnis", "oca"] },
  { id: "bisnis-75-11-oca-blast", namaPaket: "Bisnis 75 Mbps 1:1 + OCA Blast Lite", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "OCA", hargaBulanan: 746900, hargaLabel: "Rp746.900/bulan", cocokUntuk: "Bisnis ramai dengan banyak chat pelanggan", angleJualan: "Upgrade koneksi + kemudahan komunikasi.", tags: ["bisnis", "oca"] },
  { id: "bisnis-100-11-oca-blast", namaPaket: "Bisnis 100 Mbps 1:1 + OCA Blast Lite", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "OCA", hargaBulanan: 891900, hargaLabel: "Rp891.900/bulan", cocokUntuk: "Bisnis dengan traffic customer tinggi", angleJualan: "Koneksi kencang + OCA customer engagement.", tags: ["bisnis", "oca"] },
  { id: "basic-50-12-oca-blast", namaPaket: "Basic 50 Mbps 1:2 + OCA Blast Lite", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "OCA", hargaBulanan: 623900, hargaLabel: "Rp623.900/bulan", cocokUntuk: "UMKM dengan banyak chat pelanggan", angleJualan: "Internet bisnis + OCA harga terjangkau.", tags: ["basic", "oca"] },
  { id: "basic-75-12-oca-blast", namaPaket: "Basic 75 Mbps 1:2 + OCA Blast Lite", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "OCA", hargaBulanan: 676900, hargaLabel: "Rp676.900/bulan", cocokUntuk: "Toko ramai dengan CS chat", angleJualan: "Speed upgrade + OCA untuk bisnis.", tags: ["basic", "oca"] },
  { id: "basic-100-12-oca-blast", namaPaket: "Basic 100 Mbps 1:2 + OCA Blast Lite", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "OCA", hargaBulanan: 781900, hargaLabel: "Rp781.900/bulan", cocokUntuk: "Bisnis menengah dengan OCA", angleJualan: "Kecepatan 100 Mbps + solusi komunikasi.", tags: ["basic", "oca"] },

  // ── OCA INTERACTION ──
  { id: "bisnis-50-11-oca-interact", namaPaket: "Bisnis 50 Mbps 1:1 + OCA Interaction", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "OCA", hargaBulanan: 459000, hargaLabel: "Rp459.000/bulan", cocokUntuk: "Bisnis dengan CS WhatsApp ramai", angleJualan: "Internet dedicated + fitur interaksi pelanggan.", tags: ["bisnis", "oca"] },
  { id: "basic-50-12-oca-interact", namaPaket: "Basic 50 Mbps 1:2 + OCA Interaction", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "OCA", hargaBulanan: 400000, hargaLabel: "Rp400.000/bulan", cocokUntuk: "UMKM dengan komunikasi pelanggan aktif", angleJualan: "Internet bisnis + OCA dengan harga Basic.", tags: ["basic", "oca"] },

  // ── OCA BREACH CHECK ──
  { id: "bisnis-50-11-oca-breach", namaPaket: "Bisnis 50 Mbps 1:1 + OCA Breach Check", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "OCA Breach Checker", hargaBulanan: 385500, hargaLabel: "Rp385.500/bulan", cocokUntuk: "Bisnis peduli keamanan data", angleJualan: "Internet dedicated plus proteksi breach.", tags: ["bisnis", "oca", "security"] },
  { id: "basic-50-12-oca-breach", namaPaket: "Basic 50 Mbps 1:2 + OCA Breach Check", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "OCA Breach Checker", hargaBulanan: 345500, hargaLabel: "Rp345.500/bulan", cocokUntuk: "UMKM butuh keamanan dasar", angleJualan: "Internet bisnis dengan fitur keamanan.", tags: ["basic", "oca", "security"] },

  // ── ANTARES EAZY ──
  { id: "bisnis-50-11-antares", namaPaket: "Bisnis 50 Mbps 1:1 + Antares Eazy", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Antares", hargaBulanan: 474000, hargaLabel: "Rp474.000/bulan", cocokUntuk: "Bisnis butuh kamera/CCTV tanpa beli perangkat di awal", angleJualan: "Internet dedicated plus Antares Eazy Camera.", tags: ["bisnis", "antares"] },
  { id: "basic-50-12-antares", namaPaket: "Basic 50 Mbps 1:2 + Antares Eazy", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Antares", hargaBulanan: 422000, hargaLabel: "Rp422.000/bulan", cocokUntuk: "UMKM butuh kamera usaha dengan sewa hardware", angleJualan: "Internet bisnis plus Antares Eazy Camera, rental hardware Rp35rb/bulan.", tags: ["basic", "antares"] },
  { id: "bisnis-75-11-antares", namaPaket: "Bisnis 75 Mbps 1:1 + Antares Eazy", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Antares", hargaBulanan: 554000, hargaLabel: "Rp554.000/bulan", cocokUntuk: "Bisnis dengan kebutuhan kamera dan pantau area usaha", angleJualan: "Koneksi dedicated + Antares Eazy Camera.", tags: ["bisnis", "antares"] },
  { id: "basic-75-12-antares", namaPaket: "Basic 75 Mbps 1:2 + Antares Eazy", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Antares", hargaBulanan: 482000, hargaLabel: "Rp482.000/bulan", cocokUntuk: "Toko butuh kamera tambahan", angleJualan: "Internet + Antares Eazy Camera dengan harga terjangkau.", tags: ["basic", "antares"] },

  // ── PIJAR ──
  { id: "bisnis-50-11-pijar", namaPaket: "Bisnis 50 Mbps 1:1 + Pijar Sekolah", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Pijar", hargaBulanan: 1022000, hargaLabel: "Rp1.022.000/bulan", cocokUntuk: "Sekolah butuh platform edukasi digital", angleJualan: "Internet dedicated plus platform belajar Pijar.", tags: ["bisnis", "pijar", "sekolah"] },
  { id: "basic-50-12-pijar", namaPaket: "Basic 50 Mbps 1:2 + Pijar Sekolah", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Pijar", hargaBulanan: 970000, hargaLabel: "Rp970.000/bulan", cocokUntuk: "Sekolah butuh internet + platform edukasi", angleJualan: "Internet bisnis plus platform Pijar untuk pembelajaran.", tags: ["basic", "pijar", "sekolah"] },


  // ── WIFI MANAGED SERVICE ──
  { id: "wms-fit-gold-50", namaPaket: "WMS Fit Gold 50 Mbps", speed: "50 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 393400, hargaLabel: "Rp393.400/bulan", label: "WMS Entry", cocokUntuk: "Venue kecil, toko/cafe yang butuh Wi-Fi rapi via ONT Premium", angleJualan: "Entry WMS dengan ONT Premium dan 1 SSID khusus venue.", tags: ["wms", "wifi", "ont"] },
  { id: "wms-fit-gold-plus-75", namaPaket: "WMS Fit Gold Plus 75 Mbps", speed: "75 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 519400, hargaLabel: "Rp519.400/bulan", cocokUntuk: "Venue kecil-menengah butuh speed lebih lega", angleJualan: "WMS Fit dengan ONT Premium untuk coverage sederhana.", tags: ["wms", "wifi", "ont"] },
  { id: "wms-fit-platinum-100", namaPaket: "WMS Fit Platinum 100 Mbps", speed: "100 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 643300, hargaLabel: "Rp643.300/bulan", cocokUntuk: "Venue kecil dengan traffic Wi-Fi lebih ramai", angleJualan: "WMS Fit tertinggi untuk venue kecil yang belum butuh AP dedicated.", tags: ["wms", "wifi", "ont"] },
  { id: "wms-lite-gold-50", namaPaket: "WMS Lite Gold 50 Mbps", speed: "50 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 575000, hargaLabel: "Rp575.000/bulan", label: "Mesh + Voucher", cocokUntuk: "Venue yang butuh mesh dan voucher Wi-Fi", angleJualan: "WMS Lite Gold termasuk 500 voucher dan 2 unit AP Mesh.", tags: ["wms", "wifi", "mesh", "voucher"] },
  { id: "wms-lite-platinum-100", namaPaket: "WMS Lite Platinum 100 Mbps", speed: "100 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 1000000, hargaLabel: "Rp1.000.000/bulan", cocokUntuk: "Cafe/resto/venue ramai yang butuh mesh dan voucher lebih banyak", angleJualan: "WMS Lite Platinum termasuk 1000 voucher dan 3 unit AP Mesh.", tags: ["wms", "wifi", "mesh", "voucher"] },
  { id: "wms-standard-gamer-30", namaPaket: "WMS Standard Gamer 30 Mbps", speed: "30 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 600000, hargaLabel: "Rp600.000/bulan", label: "AP Entry", cocokUntuk: "Venue yang mulai butuh Access Point", angleJualan: "WMS Standard entry dengan Access Point dan SSID venue + public optional.", tags: ["wms", "wifi", "ap"] },
  { id: "wms-standard-gold-50", namaPaket: "WMS Standard Gold 50 Mbps", speed: "50 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 950000, hargaLabel: "Rp950.000/bulan", label: "AP Gold", cocokUntuk: "Sekolah, klinik, resto, kantor, venue dengan area luas", angleJualan: "Paket Access Point 50 Mbps untuk Wi-Fi venue yang lebih serius.", tags: ["wms", "wifi", "ap"] },
  { id: "wms-standard-platinum-100", namaPaket: "WMS Standard Platinum 100 Mbps", speed: "100 Mbps", tipe: "Basic", rasio: "WMS", kategoriAddon: "WMS", hargaBulanan: 1500000, hargaLabel: "Rp1.500.000/bulan", cocokUntuk: "Venue ramai dengan banyak user dan butuh AP", angleJualan: "WMS Standard 100 Mbps untuk kapasitas Wi-Fi lebih besar.", tags: ["wms", "wifi", "ap"] },

  // ── WINBACK ──
  { id: "winback-bisnis-50-11", namaPaket: "Winback Bisnis 50 Mbps 1:1", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 405000, hargaLabel: "Rp405.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama yang mau kembali", angleJualan: "Harga spesial untuk pelanggan yang kembali.", tags: ["winback"] },
  { id: "winback-bisnis-75-11", namaPaket: "Winback Bisnis 75 Mbps 1:1", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 472500, hargaLabel: "Rp472.500/bulan", label: "Winback", cocokUntuk: "Pelanggan lama upgrade", angleJualan: "Kembali dengan harga spesial.", tags: ["winback"] },
  { id: "winback-bisnis-100-11", namaPaket: "Winback Bisnis 100 Mbps 1:1", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 605000, hargaLabel: "Rp605.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama butuh speed besar", angleJualan: "Penawaran khusus untuk pelanggan setia.", tags: ["winback"] },
  { id: "winback-basic-50-12", namaPaket: "Winback Basic 50 Mbps 1:2", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 360000, hargaLabel: "Rp360.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama Basic", angleJualan: "Harga winback khusus untuk Anda.", tags: ["winback"] },
  { id: "winback-basic-75-12", namaPaket: "Winback Basic 75 Mbps 1:2", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 412500, hargaLabel: "Rp412.500/bulan", label: "Winback", cocokUntuk: "Pelanggan lama upgrade Basic", angleJualan: "Kembali dengan penawaran spesial.", tags: ["winback"] },
  { id: "winback-basic-100-12", namaPaket: "Winback Basic 100 Mbps 1:2", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 500000, hargaLabel: "Rp500.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama speed upgrade", angleJualan: "Harga spesial untuk mantan pelanggan.", tags: ["winback"] },
  { id: "winback-basic-150-12", namaPaket: "Winback Basic 150 Mbps 1:2", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 615000, hargaLabel: "Rp615.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama speed upgrade 150M", angleJualan: "Harga winback spesial 150 Mbps.", tags: ["winback"] },
  { id: "winback-basic-200-12", namaPaket: "Winback Basic 200 Mbps 1:2", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 750000, hargaLabel: "Rp750.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama speed upgrade 200M", angleJualan: "Kembali dengan speed 200 Mbps harga spesial.", tags: ["winback"] },
  { id: "winback-bisnis-150-11", namaPaket: "Winback Bisnis 150 Mbps 1:1", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 705000, hargaLabel: "Rp705.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama Bisnis upgrade", angleJualan: "Winback spesial untuk pelanggan Bisnis.", tags: ["winback"] },
  { id: "winback-bisnis-200-11", namaPaket: "Winback Bisnis 200 Mbps 1:1", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 890000, hargaLabel: "Rp890.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama Bisnis 200M", angleJualan: "Winback 200 Mbps harga spesial.", tags: ["winback"] },
  { id: "winback-bisnis-300-11", namaPaket: "Winback Bisnis 300 Mbps 1:1", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 1220000, hargaLabel: "Rp1.220.000/bulan", label: "Winback", cocokUntuk: "Pelanggan lama Bisnis premium", angleJualan: "Winback 300 Mbps untuk pelanggan prioritas.", tags: ["winback"] },

  // ── MESH WIFI ──
  { id: "bisnis-50-11-mesh", namaPaket: "Bisnis 50 Mbps 1:1 + Mesh WiFi", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Mesh WiFi", hargaBulanan: 450000, hargaLabel: "Rp450.000/bulan", label: "Mesh WiFi", cocokUntuk: "Toko/venue yang butuh coverage Wi-Fi lebih luas", angleJualan: "Internet dedicated plus mesh WiFi untuk jangkauan penuh.", tags: ["bisnis", "mesh", "wifi"] },
  { id: "bisnis-75-11-mesh", namaPaket: "Bisnis 75 Mbps 1:1 + Mesh WiFi", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Mesh WiFi", hargaBulanan: 520000, hargaLabel: "Rp520.000/bulan", label: "Mesh WiFi", cocokUntuk: "Venue sedang butuh mesh", angleJualan: "Koneksi dedicated + mesh untuk coverage maksimal.", tags: ["bisnis", "mesh", "wifi"] },
  { id: "bisnis-100-11-mesh", namaPaket: "Bisnis 100 Mbps 1:1 + Mesh WiFi", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Mesh WiFi", hargaBulanan: 690000, hargaLabel: "Rp690.000/bulan", label: "Mesh WiFi", cocokUntuk: "Kantor/venue dengan banyak ruangan", angleJualan: "Speed 100 Mbps + mesh untuk seluruh area.", tags: ["bisnis", "mesh", "wifi"] },
  { id: "bisnis-150-11-mesh", namaPaket: "Bisnis 150 Mbps 1:1 + Mesh WiFi", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Mesh WiFi", hargaBulanan: 830000, hargaLabel: "Rp830.000/bulan", label: "Mesh WiFi", cocokUntuk: "Venue besar dengan banyak device", angleJualan: "Bandwidth lebar + mesh untuk venue ramai.", tags: ["bisnis", "mesh", "wifi"] },
  { id: "bisnis-200-11-mesh", namaPaket: "Bisnis 200 Mbps 1:1 + Mesh WiFi", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Mesh WiFi", hargaBulanan: 1080000, hargaLabel: "Rp1.080.000/bulan", label: "Mesh WiFi", cocokUntuk: "Kantor besar dengan kebutuhan coverage luas", angleJualan: "Premium dedicated + mesh untuk venue skala besar.", tags: ["bisnis", "mesh", "wifi"] },
  { id: "basic-50-12-mesh", namaPaket: "Basic 50 Mbps 1:2 + Mesh WiFi", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Mesh WiFi", hargaBulanan: 397000, hargaLabel: "Rp397.000/bulan", label: "Mesh WiFi", cocokUntuk: "Toko kecil butuh Wi-Fi merata", angleJualan: "Internet bisnis plus mesh WiFi coverage.", tags: ["basic", "mesh", "wifi"] },
  { id: "basic-75-12-mesh", namaPaket: "Basic 75 Mbps 1:2 + Mesh WiFi", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Mesh WiFi", hargaBulanan: 465000, hargaLabel: "Rp465.000/bulan", label: "Mesh WiFi", cocokUntuk: "Ruko / cafe butuh Wi-Fi sampai belakang", angleJualan: "Mesh WiFi untuk coverage yang lebih luas.", tags: ["basic", "mesh", "wifi"] },
  { id: "basic-100-12-mesh", namaPaket: "Basic 100 Mbps 1:2 + Mesh WiFi", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Mesh WiFi", hargaBulanan: 530000, hargaLabel: "Rp530.000/bulan", label: "Mesh WiFi", cocokUntuk: "Kantor kecil dengan beberapa ruangan", angleJualan: "Speed tinggi + mesh coverage untuk kantor.", tags: ["basic", "mesh", "wifi"] },
  { id: "basic-150-12-mesh", namaPaket: "Basic 150 Mbps 1:2 + Mesh WiFi", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Mesh WiFi", hargaBulanan: 630000, hargaLabel: "Rp630.000/bulan", label: "Mesh WiFi", cocokUntuk: "Venue menengah butuh coverage maksimal", angleJualan: "Bandwidth lebar + mesh WiFi untuk venue sibuk.", tags: ["basic", "mesh", "wifi"] },
  { id: "basic-200-12-mesh", namaPaket: "Basic 200 Mbps 1:2 + Mesh WiFi", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Mesh WiFi", hargaBulanan: 840000, hargaLabel: "Rp840.000/bulan", label: "Mesh WiFi", cocokUntuk: "Kantor besar butuh Wi-Fi merata", angleJualan: "Kombinasi bandwidth besar + mesh WiFi premium.", tags: ["basic", "mesh", "wifi"] },

  // ── ANTARES EAZY — higher speeds ──
  { id: "bisnis-100-11-antares", namaPaket: "Bisnis 100 Mbps 1:1 + Antares Eazy", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Antares Eazy", hargaBulanan: 704000, hargaLabel: "Rp704.000/bulan", cocokUntuk: "Bisnis butuh kamera dengan speed lebih besar", angleJualan: "Speed tinggi + Antares Eazy Camera untuk pantau area luas.", tags: ["bisnis", "antares"] },
  { id: "bisnis-150-11-antares", namaPaket: "Bisnis 150 Mbps 1:1 + Antares Eazy", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Antares Eazy", hargaBulanan: 854000, hargaLabel: "Rp854.000/bulan", cocokUntuk: "Bisnis menengah dengan kamera multiple", angleJualan: "Koneksi dedicated + Antares Eazy untuk keamanan maksimal.", tags: ["bisnis", "antares"] },
  { id: "bisnis-200-11-antares", namaPaket: "Bisnis 200 Mbps 1:1 + Antares Eazy", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Antares Eazy", hargaBulanan: 1084000, hargaLabel: "Rp1.084.000/bulan", cocokUntuk: "Bisnis besar dengan kebutuhan CCTV dan internet tinggi", angleJualan: "Bandwidth lebar + Antares Eazy Camera untuk keamanan.", tags: ["bisnis", "antares"] },
  { id: "basic-100-12-antares", namaPaket: "Basic 100 Mbps 1:2 + Antares Eazy", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Antares Eazy", hargaBulanan: 592000, hargaLabel: "Rp592.000/bulan", cocokUntuk: "Toko besar butuh CCTV dengan speed lebih", angleJualan: "Speed upgrade + Antares Eazy Camera untuk toko ramai.", tags: ["basic", "antares"] },
  { id: "basic-150-12-antares", namaPaket: "Basic 150 Mbps 1:2 + Antares Eazy", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Antares Eazy", hargaBulanan: 732000, hargaLabel: "Rp732.000/bulan", cocokUntuk: "Toko dengan area luas butuh CCTV", angleJualan: "Bandwidth lebar + kamera untuk toko besar.", tags: ["basic", "antares"] },
  { id: "basic-200-12-antares", namaPaket: "Basic 200 Mbps 1:2 + Antares Eazy", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Antares Eazy", hargaBulanan: 912000, hargaLabel: "Rp912.000/bulan", cocokUntuk: "Bisnis dengan kebutuhan kamera dan speed tinggi", angleJualan: "Paket lengkap internet + kamera untuk bisnis berkembang.", tags: ["basic", "antares"] },

  // ── BISNIS 300 PHONE & NETMONK ──
  { id: "bisnis-300-11-phone", namaPaket: "Bisnis 300 Mbps 1:1 + Phone", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Phone", hargaBulanan: 1260000, hargaLabel: "Rp1.260.000/bulan", cocokUntuk: "Corporate dengan kebutuhan telepon dan internet premium", angleJualan: "Kecepatan maksimal + telepon untuk enterprise.", tags: ["bisnis", "phone", "premium"] },
  { id: "bisnis-300-11-netmonk", namaPaket: "Bisnis 300 Mbps 1:1 + Netmonk", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Netmonk", hargaBulanan: 1276100, hargaLabel: "Rp1.276.100/bulan", cocokUntuk: "Corporate butuh monitoring + speed maksimal", angleJualan: "Koneksi premium dengan monitoring real-time.", tags: ["bisnis", "netmonk", "premium"] },

  // ── STANDARD BASIC 1:2 PRICING (non-promo) ──
  { id: "basic-50-12-std", namaPaket: "Basic 50 Mbps 1:2 Standard", speed: "50 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 387000, hargaLabel: "Rp387.000/bulan", label: "Standard Basic", cocokUntuk: "UMKM, toko, ruko dengan budget standar", angleJualan: "Harga standar untuk Basic 50 Mbps tanpa promo.", tags: ["basic", "standard"] },
  { id: "basic-75-12-std", namaPaket: "Basic 75 Mbps 1:2 Standard", speed: "75 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 447000, hargaLabel: "Rp447.000/bulan", label: "Standard Basic", cocokUntuk: "Toko ramai dengan budget standar", angleJualan: "Standard 75 Mbps tanpa diskon promo.", tags: ["basic", "standard"] },
  { id: "basic-100-12-std", namaPaket: "Basic 100 Mbps 1:2 Standard", speed: "100 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 557000, hargaLabel: "Rp557.000/bulan", label: "Standard Basic", cocokUntuk: "Kantor kecil tanpa promo", angleJualan: "Standard pricing untuk Basic 100 Mbps.", tags: ["basic", "standard"] },
  { id: "basic-150-12-std", namaPaket: "Basic 150 Mbps 1:2 Standard", speed: "150 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 697000, hargaLabel: "Rp697.000/bulan", label: "Standard Basic", cocokUntuk: "Kantor menengah", angleJualan: "Standard 150 Mbps untuk kebutuhan bisnis normal.", tags: ["basic", "standard"] },
  { id: "basic-200-12-std", namaPaket: "Basic 200 Mbps 1:2 Standard", speed: "200 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 877000, hargaLabel: "Rp877.000/bulan", label: "Standard Basic", cocokUntuk: "Kantor besar", angleJualan: "Standard pricing untuk Basic 200 Mbps.", tags: ["basic", "standard"] },
  { id: "basic-300-12-std", namaPaket: "Basic 300 Mbps 1:2 Standard", speed: "300 Mbps", tipe: "Basic", rasio: "1:2", kategoriAddon: "Internet Only", hargaBulanan: 1257000, hargaLabel: "Rp1.257.000/bulan", label: "Standard Basic", cocokUntuk: "Bisnis skala besar", angleJualan: "Standard 300 Mbps untuk kebutuhan premium Basic.", tags: ["basic", "standard", "premium"] },

  // ── STANDARD BISNIS 1:1 PRICING (non-promo) ──
  { id: "bisnis-50-11-std", namaPaket: "Bisnis 50 Mbps 1:1 Standard", speed: "50 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 439000, hargaLabel: "Rp439.000/bulan", label: "Standard Bisnis", cocokUntuk: "Bisnis butuh dedicated tanpa promo", angleJualan: "Harga standar Bisnis 50 Mbps dedicated 1:1.", tags: ["bisnis", "standard"] },
  { id: "bisnis-75-11-std", namaPaket: "Bisnis 75 Mbps 1:1 Standard", speed: "75 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 519000, hargaLabel: "Rp519.000/bulan", label: "Standard Bisnis", cocokUntuk: "Bisnis butuh dedicated stabil", angleJualan: "Standard Bisnis 75 Mbps tanpa diskon.", tags: ["bisnis", "standard"] },
  { id: "bisnis-100-11-std", namaPaket: "Bisnis 100 Mbps 1:1 Standard", speed: "100 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 669000, hargaLabel: "Rp669.000/bulan", label: "Standard Bisnis", cocokUntuk: "Kantor dengan kebutuhan dedicated tinggi", angleJualan: "Standard Bisnis 100 Mbps tanpa promo.", tags: ["bisnis", "standard"] },
  { id: "bisnis-150-11-std", namaPaket: "Bisnis 150 Mbps 1:1 Standard", speed: "150 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 819000, hargaLabel: "Rp819.000/bulan", label: "Standard Bisnis", cocokUntuk: "Kantor menengah dedicated", angleJualan: "Standard Bisnis 150 Mbps.", tags: ["bisnis", "standard"] },
  { id: "bisnis-200-11-std", namaPaket: "Bisnis 200 Mbps 1:1 Standard", speed: "200 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 1049000, hargaLabel: "Rp1.049.000/bulan", label: "Standard Bisnis", cocokUntuk: "Kantor besar dedicated", angleJualan: "Standard Bisnis 200 Mbps.", tags: ["bisnis", "standard"] },
  { id: "bisnis-300-11-std", namaPaket: "Bisnis 300 Mbps 1:1 Standard", speed: "300 Mbps", tipe: "Bisnis", rasio: "1:1", kategoriAddon: "Internet Only", hargaBulanan: 1499000, hargaLabel: "Rp1.499.000/bulan", label: "Standard Bisnis", cocokUntuk: "Corporate dedicated", angleJualan: "Standard Bisnis 300 Mbps untuk kebutuhan premium.", tags: ["bisnis", "standard", "premium"] },

];

export function formatHarga(n: number): string {
  if (n === 0) return "Konsultasi ke AM";
  return `Rp${n.toLocaleString("id-ID")}/bulan`;
}

export function filterPackets(opts: {
  search?: string;
  speed?: string;
  tipe?: string;
  addon?: string;
  sortBy?: "price-asc" | "price-desc" | "name";
}) {
  let result = [...allPackages];
  if (opts.search) {
    const q = opts.search.toLowerCase();
    result = result.filter(p => p.namaPaket.toLowerCase().includes(q) || p.cocokUntuk.toLowerCase().includes(q));
  }
  if (opts.speed) result = result.filter(p => p.speed === opts.speed);
  if (opts.tipe) result = result.filter(p => p.tipe === opts.tipe);
  if (opts.addon) result = result.filter(p => p.kategoriAddon === opts.addon);
  if (opts.sortBy === "price-asc") result.sort((a, b) => a.hargaBulanan - b.hargaBulanan);
  else if (opts.sortBy === "price-desc") result.sort((a, b) => b.hargaBulanan - a.hargaBulanan);
  else if (opts.sortBy === "name") result.sort((a, b) => a.namaPaket.localeCompare(b.namaPaket));
  return result;
}

export const featuredPackets = allPackages.filter(p => p.label);
