/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { captionTemplates } from "../data/captions";
import { CopyBtn } from "../components/Buttons";
import { PageHeader } from "../components/Common";
import { MessageSquare, Image, ClipboardList } from "lucide-react";

type Tab = "wa" | "caption" | "poster";

export default function BuatKontenPage() {
  const [tab, setTab] = useState<Tab>("wa");
  return (
    <div className="page">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-telkom-red rounded-full" />
        <PageHeader title="Buat Konten" subtitle="Bikin pesan jualan dalam hitungan detik" />
      </div>
      <div className="flex ui-tabs mb-4">
        <TabBtn icon={MessageSquare} label="Pesan WA" active={tab === "wa"} onClick={() => setTab("wa")} />
        <TabBtn icon={Image} label="Caption WA" active={tab === "caption"} onClick={() => setTab("caption")} />
        <TabBtn icon={ClipboardList} label="Poster" active={tab === "poster"} onClick={() => setTab("poster")} />
      </div>
      {tab === "wa" && <WaGenerator />}
      {tab === "caption" && <CaptionGenerator />}
      {tab === "poster" && <PosterRequest />}
    </div>
  );
}

function TabBtn({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-1 py-2.5 text-xs font-semibold rounded-lg transition ${
        active ? "ui-tab-active" : "text-gray-600"
      }`}
    >
      <Icon size="14" />
      {label}
    </button>
  );
}

// ── WA GENERATOR ──
function WaGenerator() {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [usaha, setUsaha] = useState("");
  const [namaUsaha, setNamaUsaha] = useState("");
  const [paket, setPaket] = useState("Basic 50 Mbps 1:2 Rp320.000/bulan");
  const [generated, setGenerated] = useState(false);

  const generateMessages = () => ({
    soft: `Halo Pak/Bu, saya ${nama || "[Nama Teknisi]"} dari Telkom area Gambir–Cideng. Untuk operasional ${usaha || "usaha"}${namaUsaha ? ` ${namaUsaha}` : ""} seperti QRIS, WhatsApp Business, CCTV, dan transaksi harian, saat ini ada Indibiz mulai Rp320rb/bulan. Kalau berkenan, saya bisa bantu cek apakah lokasi Bapak/Ibu sudah bisa dipasang.`,
    direct: `Pak/Bu, untuk ${usaha || "usaha"}${namaUsaha ? ` ${namaUsaha}` : ""}, lebih aman pakai internet bisnis dibanding paket data atau internet rumahan. Indibiz ${paket}, cocok untuk QRIS, WhatsApp, kasir, CCTV, dan order online. Saya bisa bantu cek coverage lokasinya.`,
    followup: `Halo Pak/Bu, saya follow-up terkait internet bisnis Indibiz untuk ${usaha || "usaha"}${namaUsaha ? ` ${namaUsaha}` : ""}. Kalau lokasi Bapak/Ibu ingin dicek coverage atau ingin dibantu pilih paket paling cocok, saya siap bantu.`,
  });

  const msgs = generateMessages();

  if (!generated) {
    return (
      <div className="ui-card p-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-600">Nama Teknisi</label>
          <input value={nama} onChange={(e) => setNama(e.target.value)} className="ui-input mt-1" placeholder="Masukkan nama" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Nomor WhatsApp</label>
          <input value={wa} onChange={(e) => setWa(e.target.value)} className="ui-input mt-1" placeholder="08xxxx" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Jenis Usaha</label>
          <input value={usaha} onChange={(e) => setUsaha(e.target.value)} className="ui-input mt-1" placeholder="Toko, restoran, dll" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Nama Usaha (opsional)</label>
          <input value={namaUsaha} onChange={(e) => setNamaUsaha(e.target.value)} className="ui-input mt-1" placeholder="Nama toko/usaha" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Paket</label>
          <select value={paket} onChange={(e) => setPaket(e.target.value)} className="ui-input mt-1">
            <option>Basic 50 Mbps 1:2 Rp320.000/bulan</option>
            <option>Bisnis 50 Mbps 1:1 Rp355.000/bulan</option>
            <option>Basic 75 Mbps 1:2 Rp365.000/bulan</option>
            <option>Basic 100 Mbps 1:2 Rp440.000/bulan</option>
            <option>Basic 50 Mbps + Netmonk Rp416.100/bulan</option>
            <option>Basic 50 Mbps + Phone Rp400.000/bulan</option>
          </select>
        </div>
        <button onClick={() => setGenerated(true)} className="btn-primary w-full mt-2">
          Generate Pesan
        </button>
      </div>
    );
  }

  const waNum = wa.replace(/[^0-9]/g, "");
  const variants = ["Soft", "Direct", "Follow-up"];

  return (
    <div className="space-y-3">
      <button onClick={() => setGenerated(false)} className="text-sm text-telkom-red font-medium">&larr; Edit Data</button>
      {([msgs.soft, msgs.direct, msgs.followup] as const).map((msg, i) => (
        <div key={i} className="ui-card p-4">
          <span className="badge-blue text-xs mb-2 inline-block">{variants[i]}</span>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{msg}</p>
          <div className="flex gap-2">
            <CopyBtn text={msg} label="Copy" />
            <a
              href={`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !px-3 !py-1.5 inline-flex items-center gap-1"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── CAPTION GENERATOR ──
function CaptionGenerator() {
  const [selected, setSelected] = useState<string>(captionTemplates[0].id);
  const caption = captionTemplates.find((c) => c.id === selected);

  return (
    <div>
      <div className="mb-3">
        <label className="text-xs font-medium text-gray-600 mb-1 block">Kategori Caption</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="ui-input">
          {captionTemplates.map((c) => (
            <option key={c.id} value={c.id}>{c.kategori}</option>
          ))}
        </select>
      </div>
      {caption && (
        <div className="ui-card p-4">
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{caption.teks}</p>
          <CopyBtn text={caption.teks} label="Copy Caption" />
        </div>
      )}
    </div>
  );
}

// ── POSTER REQUEST ──
function PosterRequest() {
  const [view, setView] = useState<"form" | "admin" | "thanks">("form");
  const [form, setForm] = useState({
    nama: "",
    wa: "",
    paket: "Basic 50 Mbps 1:2",
    gaya: "Professional",
    catatan: "",
  });

  const posterStyles = ["Professional", "WhatsApp Status", "Hero Rp320rb", "Toko/Ruko", "F&B", "Gadget", "Corporate"];

  const [requests, setRequests] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("indibiz_poster_requests") || "[]");
    } catch {
      return [];
    }
  });

  const submit = () => {
    const newReq = { ...form, id: Date.now().toString(), status: "Pending", createdAt: new Date().toISOString() };
    const updated = [...requests, newReq];
    setRequests(updated);
    localStorage.setItem("indibiz_poster_requests", JSON.stringify(updated));
    setView("thanks");
  };

  if (view === "thanks") {
    return (
      <div className="ui-card p-6 text-center">
        <h3 className="font-bold text-lg mb-2">Poster Request Dikirim!</h3>
        <p className="text-sm text-gray-600 mb-4">Tim akan proses poster kamu. Pantau status di halaman admin.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setView("form"); setForm({ nama: "", wa: "", paket: "Basic 50 Mbps 1:2", gaya: "Professional", catatan: "" }); }} className="btn-primary text-sm">
            Request Lagi
          </button>
          <button onClick={() => setView("admin")} className="btn-outline text-sm">
            Lihat Status
          </button>
        </div>
      </div>
    );
  }

  if (view === "admin") {
    return (
      <div>
        <button onClick={() => setView("form")} className="text-sm text-telkom-red font-medium mb-3">&larr; Kembali</button>
        {requests.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">Belum ada request poster.</p>
        ) : (
          <div className="space-y-2">
            {requests.map((r: any) => (
              <div key={r.id} className="ui-card p-4">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="font-semibold text-sm">{r.nama}</p>
                    <p className="text-xs text-gray-500">{r.wa}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    r.status === "Done" ? "bg-green-100 text-green-700" :
                    r.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {r.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Paket: {r.paket}</p>
                <p className="text-xs text-gray-600">Gaya: {r.gaya}</p>
                {r.catatan && <p className="text-xs text-gray-400 mt-1 italic">{r.catatan}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="ui-card p-4 space-y-3">
      <div>
        <label className="text-xs font-medium text-gray-600">Nama Teknisi</label>
        <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="ui-input mt-1" placeholder="Nama lengkap" />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600">Nomor WhatsApp</label>
        <input value={form.wa} onChange={(e) => setForm({ ...form, wa: e.target.value })}
          className="ui-input mt-1" placeholder="08xxxx" />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600">Paket</label>
        <select value={form.paket} onChange={(e) => setForm({ ...form, paket: e.target.value })}
          className="ui-input mt-1">
          <option>Basic 50 Mbps 1:2</option>
          <option>Bisnis 50 Mbps 1:1</option>
          <option>Basic 75 Mbps 1:2</option>
          <option>Basic 100 Mbps 1:2</option>
          <option>Basic + Netmonk</option>
          <option>Basic + Phone</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600">Gaya Poster</label>
        <select value={form.gaya} onChange={(e) => setForm({ ...form, gaya: e.target.value })}
          className="ui-input mt-1">
          {posterStyles.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600">Catatan (opsional)</label>
        <textarea value={form.catatan} onChange={(e) => setForm({ ...form, catatan: e.target.value })}
          className="ui-input mt-1" rows={3} placeholder="Tambahkan catatan untuk desainer" />
      </div>
      <button onClick={submit} className="btn-primary w-full mt-2" disabled={!form.nama || !form.wa}>
        Kirim Request Poster
      </button>
      <button onClick={() => setView("admin")} className="w-full text-center text-xs text-gray-500 mt-2">
        Lihat Status Request
      </button>
    </div>
  );
}
