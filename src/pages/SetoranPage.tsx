/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { allPackages } from "../data/packages";
import { ChevronLeft, ChevronRight, Check, Camera, MapPin, Loader2, User, FileText, CreditCard, Package, Image as ImageIcon, ImagePlus } from "lucide-react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Step = "teknisi" | "ktp" | "alamat" | "npwp" | "kategori-paket" | "paket" | "foto" | "review";

const stepMeta: Array<{ key: Step; label: string; icon: any }> = [
  { key: "teknisi", label: "Identitas Teknisi", icon: User },
  { key: "ktp", label: "KTP Pelanggan", icon: CreditCard },
  { key: "alamat", label: "Alamat Pemasangan", icon: MapPin },
  { key: "npwp", label: "NPWP (Opsional)", icon: FileText },
  { key: "kategori-paket", label: "Kategori Paket", icon: Package },
  { key: "paket", label: "Pilih Paket", icon: Package },
  { key: "foto", label: "Dokumentasi", icon: ImageIcon },
  { key: "review", label: "Review & Kirim", icon: Check },
];

const PACKAGE_CATEGORIES = [
  "Indibiz Promo 2026",
  "Indibiz Internet Only",
  "Indibiz Bundling (Non Promo)",
  "Indibiz WMS",
];

// ── KTP PARSER ──
function parseKTP(text: string) {
  const normalized = text.replace(/\u0000/g, " ").replace(/[\t\r]+/g, " ");
  const result: Record<string, string> = {};

  const normalizeSpaces = (s: string) => s.replace(/\s+/g, " ").trim();
  const extractAfterLabel = (label: string) => {
    const re = new RegExp(`${label}\\s*[:：]?\\s*([^\\n\\r]+)`, "i");
    const m = normalized.match(re);
    return m ? normalizeSpaces(m[1]) : "";
  };

  const nama = extractAfterLabel("Nama");
  if (nama) result.nama = nama;

  const alamatBase = extractAfterLabel("Alamat");
  const rtRw = extractAfterLabel("RT\/?RW");
  const kel = extractAfterLabel("Kel\/Desa") || extractAfterLabel("Kelurahan") || extractAfterLabel("Desa");
  const kec = extractAfterLabel("Kecamatan");
  const kota = extractAfterLabel("Kota\/Kabupaten") || extractAfterLabel("Kota") || extractAfterLabel("Kabupaten");
  const prov = extractAfterLabel("Provinsi");

  const parts: string[] = [];
  if (alamatBase) parts.push(alamatBase);
  if (rtRw) {
    const m = rtRw.match(/(\d{1,3})\s*\/?\s*(\d{1,3})/);
    if (m) parts.push(`RT/${m[1].padStart(2, "0")} RW/${m[2].padStart(2, "0")}`);
    else parts.push(rtRw);
  }
  if (kel) parts.push(`KEL ${kel}`);
  if (kec) parts.push(`KEC ${kec}`);
  if (kota) {
    const label = /kabupaten/i.test(kota) ? "KAB" : "KOTA";
    parts.push(`${label} ${kota.replace(/^.*?[::]?\s*/, "")}`);
  }
  if (prov) parts.push(`PROV ${prov}`);

  if (parts.length) result.alamat = parts.join(", ");
  return result;
}

function parseNPWP(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const result: Record<string, string> = {};
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const npwpMatch = l.match(/\d{2}\.\d{3}\.\d{3}\.\d{1}-\d{3}\.\d{3}/);
    if (npwpMatch && !result.npwp) { result.npwp = npwpMatch[0]; continue; }
    const rawMatch = l.match(/\b(\d{15,16})\b/);
    if (rawMatch && !result.npwp) {
      const raw = rawMatch[1]; result.npwp = `${raw.slice(0, 2)}.${raw.slice(2, 5)}.${raw.slice(5, 8)}.${raw.slice(8, 9)}-${raw.slice(9, 12)}.${raw.slice(12)}`; continue;
    }
    if (/^NAMA\s*$/i.test(l) && i + 1 < lines.length) { result.nama = lines[i + 1].trim(); i++; continue; }
    if (/^NPWP\s*$/i.test(l) && i + 1 < lines.length) {
      const npwpCheck = lines[i + 1].match(/\d{2}\.\d{3}\.\d{3}\.\d{1}-\d{3}\.\d{3}/);
      if (npwpCheck) result.npwp = npwpCheck[0]; i++; continue;
    }
  }
  return result;
}

async function reverseGeocode(lat: number, lng: number) {
  const resp = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=id`,
    { headers: { "User-Agent": "IndibizHunter/1.0" } }
  );
  const data = await resp.json();
  return data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}

// ── CAMERA + GALLERY UPLOAD ──
function DualImageUpload({ onImage, label, preview, onRetake }: { onImage: (file: File) => void; label: string; preview?: string | null; onRetake?: () => void }) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onImage(file);
    e.target.value = "";
  };

  return (
    <div>
      <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="hidden" />
      <input ref={galleryRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />

      {preview ? (
        <div className="relative">
          <img src={preview} alt="preview" className="w-full rounded-2xl max-h-64 object-cover" />
          <div className="flex gap-2 mt-2">
            <button onClick={() => cameraRef.current?.click()} className="flex-1 text-xs font-semibold text-telkom-red bg-red-50 rounded-xl py-2.5">
              📷 Kamera
            </button>
            <button onClick={() => galleryRef.current?.click()} className="flex-1 text-xs font-semibold text-telkom-dark bg-gray-100 rounded-xl py-2.5">
              🖼 Galeri
            </button>
          </div>
          {onRetake && <button onClick={onRetake} className="mt-2 w-full text-xs font-semibold text-gray-500 bg-gray-50 rounded-xl py-2.5">Ganti foto</button>}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => cameraRef.current?.click()} className="border-2 border-dashed border-gray-200 rounded-2xl py-6 text-center active:scale-[0.98]">
            <Camera size={26} className="mx-auto mb-1.5 text-gray-400" />
            <p className="text-xs font-medium text-gray-600">Kamera</p>
          </button>
          <button onClick={() => galleryRef.current?.click()} className="border-2 border-dashed border-gray-200 rounded-2xl py-6 text-center active:scale-[0.98]">
            <ImagePlus size={26} className="mx-auto mb-1.5 text-gray-400" />
            <p className="text-xs font-medium text-gray-600">Galeri</p>
          </button>
        </div>
      )}
      <p className="text-[11px] text-gray-400 text-center mt-2">{label}</p>
    </div>
  );
}

function MapClickHandler({ onPick }: { onPick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function MiniMap({ lat, lng, zoom, onChange, onZoom }: { lat: number; lng: number; zoom: number; onChange: (lat: number, lng: number) => void; onZoom: (z: number) => void }) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) mapRef.current.setView([lat, lng], zoom, { animate: true });
  }, [lat, lng, zoom]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <div className="text-[11px] text-gray-500">Tap peta untuk pilih titik</div>
        <div className="flex gap-2">
          <button onClick={() => onZoom(Math.min(19, zoom + 1))} className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold">＋</button>
          <button onClick={() => onZoom(Math.max(15, zoom - 1))} className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold">－</button>
        </div>
      </div>
      <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-200 bg-slate-100">
        <MapContainer center={[lat, lng]} zoom={zoom} zoomControl={false} attributionControl={false} className="real-map h-full w-full" ref={mapRef}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapClickHandler onPick={(newLat, newLng) => onChange(newLat, newLng)} />
          <Marker
            position={[lat, lng]}
            draggable={false}
            icon={L.divIcon({
              className: "",
              html: `<div class="leaflet-prospect-pin selected" style="--pin:#1d9bf0"><span></span></div>`,
              iconSize: [34, 34],
              iconAnchor: [17, 17],
            })}
          />
        </MapContainer>
        <div className="absolute inset-x-0 top-3 text-center text-[11px] font-semibold text-gray-700 bg-white/70 mx-3 rounded-full py-1">Tap peta untuk pindah titik, lalu Terapkan titik ini</div>
        <div className="absolute bottom-3 left-3 right-3 text-[11px] text-gray-700 bg-white/90 rounded-xl px-3 py-2">{lat.toFixed(6)}, {lng.toFixed(6)}</div>
      </div>
    </div>
  );
}

// ── GEO CAPTURE ──
function GeoCapture({ onLocation }: { onLocation: (lat: number, lng: number, address: string) => void }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const capture = async () => {
    if (!navigator.geolocation) { setStatus("GPS tidak tersedia."); return; }
    setLoading(true);
    setStatus("Mencari lokasi...");
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 15000 })
      );
      const { latitude, longitude } = pos.coords;
      setStatus(`${latitude.toFixed(6)}, ${longitude.toFixed(6)} - mencari alamat...`);
      const address = await reverseGeocode(latitude, longitude);
      setStatus(`📍 ${address}`);
      onLocation(latitude, longitude, address);
    } catch (err: any) {
      setStatus("Gagal: " + (err.message || err));
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={capture} disabled={loading} className="w-full bg-telkom-red text-white rounded-2xl py-4 font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98]">
        {loading ? <Loader2 size={18} className="animate-spin" /> : <MapPin size={18} />}
        {loading ? "Memproses..." : "Ambil Lokasi Saya"}
      </button>
      {status && <p className="mt-2 text-xs text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3">{status}</p>}
    </div>
  );
}

// ── OCR PROGRESS FIELD ──
function OcrField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-gray-500 mb-0.5">{label}</p>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full text-sm p-2.5 bg-white border border-gray-200 rounded-xl" />
    </div>
  );
}

// ── MAIN PAGE ──
export default function SetoranPage() {
  const [step, setStep] = useState<Step>("teknisi");
  const [ocrProgress, setOcrProgress] = useState<{ status: string; pct: number } | null>(null);

  const [form, setForm] = useState<Record<string, any>>(() => {
    const saved = localStorage.getItem("ih_teknisi");
    return saved ? JSON.parse(saved) : {};
  });

  // Pre-confirmation editable OCR fields
  const [ocrFields, setOcrFields] = useState<Record<string, string>>({});
  const [ocrRawText, setOcrRawText] = useState("");
  const [showOcrConfirm, setShowOcrConfirm] = useState(false);

  // Address confirmation flow
  const [alamatSamaKTP, setAlamatSamaKTP] = useState<boolean | null>(null);

  const [ktpImage, setKtpImage] = useState<File | null>(null);
  const [, setNpwpImage] = useState<File | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const categoryPackages = allPackages.filter((p) => {
    if (!selectedCategory) return false;
    if (selectedCategory === "Indibiz Promo 2026") return p.tags?.includes("promo") || !!p.label;
    if (selectedCategory === "Indibiz Internet Only") return p.kategoriAddon === "Internet Only";
    if (selectedCategory === "Indibiz Bundling (Non Promo)") return p.kategoriAddon !== "Internet Only" && p.kategoriAddon !== "WMS";
    if (selectedCategory === "Indibiz WMS") return p.kategoriAddon === "WMS";
    return false;
  });

  const updateForm = (key: string, value: any) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "nikTeknisi" || key === "namaTeknisi") localStorage.setItem("ih_teknisi", JSON.stringify(next));
      return next;
    });
  };

  const stepIndex = stepMeta.findIndex((s) => s.key === step);
  const progress = ((stepIndex + 1) / stepMeta.length) * 100;

  useEffect(() => {
    if (step === "ktp" && form.ktpPreview) {
      setKtpImage((prev) => prev);
      setOcrFields({
        nama: form.ktp_nama || "",
        alamat: form.ktp_alamat || "",
      });
      setShowOcrConfirm(!!(form.ktp_nama || form.ktp_alamat));
    }
  }, [step, form.ktpPreview, form.ktp_nama, form.ktp_alamat]);

  const goNext = () => {
    const idx = stepMeta.findIndex((s) => s.key === step);
    if (idx < stepMeta.length - 1) setStep(stepMeta[idx + 1].key);
  };
  const goBack = () => {
    const idx = stepMeta.findIndex((s) => s.key === step);
    if (idx > 0) setStep(stepMeta[idx - 1].key);
  };

  // Resize image before OCR to speed up processing
  const resizeImage = (file: File, maxDim = 1000): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          const ratio = Math.min(maxDim / width, maxDim / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.85);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  // Run OCR with progress
  const runOCR = async (file: File, parser: (text: string) => Record<string, string>, _prefix: string) => {
    setOcrProgress({ status: "Memproses gambar...", pct: 5 });
    setShowOcrConfirm(false);

    try {
      // Resize first
      const resized = await resizeImage(file);
      setOcrProgress({ status: "Mengunduh engine OCR...", pct: 15 });

      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("ind+eng", 1, {
        logger: (m: any) => {
          if (m.status === "loading tesseract core") setOcrProgress({ status: "Memuat engine OCR...", pct: 20 });
          else if (m.status === "initializing tesseract") setOcrProgress({ status: "Inisialisasi...", pct: 30 });
          else if (m.status === "loading language traineddata") setOcrProgress({ status: "Mengunduh data bahasa (ind+eng)...", pct: 40 });
          else if (m.status === "initializing api") setOcrProgress({ status: "Menyiapkan OCR...", pct: 60 });
          else if (m.status === "recognizing text") {
            const pct = 60 + Math.round((m.progress || 0) * 35);
            setOcrProgress({ status: "Membaca teks...", pct });
          }
        },
      });

      setOcrProgress({ status: "Membaca teks dari gambar...", pct: 65 });
      const { data } = await worker.recognize(resized);
      await worker.terminate();

      setOcrProgress({ status: "Memproses hasil...", pct: 95 });
      setOcrRawText(data.text || "");
      const parsed = parser(data.text || "");

      // Set editable fields
      setOcrFields(parsed);
      setShowOcrConfirm(true);
      setOcrProgress(null);
    } catch (err: any) {
      console.error("OCR error:", err);
      setOcrProgress({ status: "Gagal: " + (err.message || "Error"), pct: 0 });
    }
  };

  const confirmOcr = (prefix: string) => {
    for (const [key, value] of Object.entries(ocrFields)) {
      if (value) updateForm(`${prefix}_${key}`, value);
    }
    setShowOcrConfirm(false);
    setOcrFields({});

    if (prefix === "ktp") {
      // Instead of next step, show address confirmation
      setStep("alamat");
    } else {
      goNext();
    }
  };

  const handleSubmit = () => {
    const payload = { ...form, package: selectedPackage, category: selectedCategory, timestamp: new Date().toISOString() };
    console.log("SUBMIT (draft payload):", payload);
    alert("Draft siap. Integrasi ke form tujuan masih perlu mapping field Google Form yang asli.");
  };

  const canGoNext = () => {
    switch (step) {
      case "teknisi": return form.nikTeknisi?.length >= 8 && form.namaTeknisi?.length > 0;
      case "ktp": return !!ktpImage;
      case "npwp": return true; // optional
      case "alamat": return true;
      case "kategori-paket": return !!selectedCategory;
      case "paket": return !!selectedPackage;
      case "foto": return true;
      case "review": return true;
      default: return false;
    }
  };

  return (
    <main className="page">
      <div className="h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-telkom-red rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex items-center gap-2 mb-5">
        {stepIndex > 0 && (
          <button onClick={goBack} className="p-1 -ml-1 rounded-full hover:bg-gray-100"><ChevronLeft size={20} /></button>
        )}
        <div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Langkah {stepIndex + 1} dari {stepMeta.length}</p>
          <p className="text-lg font-extrabold text-telkom-dark">{stepMeta[stepIndex].label}</p>
        </div>
      </div>

      {/* ── OCR PROGRESS ── */}
      {ocrProgress && (
        <div className="card-soft p-4 mb-4">
          <div className="flex items-center gap-3">
            <Loader2 size={20} className="animate-spin text-telkom-red shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-telkom-dark">{ocrProgress.status}</p>
              <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-telkom-red rounded-full transition-all" style={{ width: `${ocrProgress.pct}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP: TEKNISI ── */}
      {step === "teknisi" && (
        <div className="space-y-4">
          <div className="card-soft p-4">
            <p className="text-xs text-gray-500 mb-1">NIK Teknisi / SA</p>
            <input value={form.nikTeknisi || ""} onChange={(e) => updateForm("nikTeknisi", e.target.value)} placeholder="Masukkan NIK"
              className="w-full text-sm font-bold p-3 bg-white border border-gray-200 rounded-xl" inputMode="numeric" />
          </div>
          <div className="card-soft p-4">
            <p className="text-xs text-gray-500 mb-1">Nama Teknisi</p>
            <input value={form.namaTeknisi || ""} onChange={(e) => updateForm("namaTeknisi", e.target.value)} placeholder="Masukkan nama lengkap"
              className="w-full text-sm font-bold p-3 bg-white border border-gray-200 rounded-xl" />
          </div>
          <p className="text-xs text-gray-400 text-center">Data ini tersimpan otomatis untuk input berikutnya.</p>
        </div>
      )}

      {/* ── STEP: KTP ── */}
      {step === "ktp" && (
        <div className="space-y-4">
          <div className="card-soft p-4">
            <p className="text-sm font-bold text-telkom-dark mb-1">Foto KTP Pelanggan</p>
            <p className="text-xs text-gray-500 mb-4">Ambil foto KTP yang jelas. Data akan diekstrak otomatis via OCR. ⚡ Proses 100% di HP, tidak perlu internet setelah data engine terunduh.</p>
            <DualImageUpload preview={form.ktpPreview || null} onRetake={() => { setKtpImage(null); updateForm("ktpPreview", null); setOcrFields({}); setShowOcrConfirm(false); }} onImage={(f) => { setKtpImage(f); const preview = URL.createObjectURL(f); updateForm("ktpPreview", preview); runOCR(f, parseKTP, "ktp"); }} label="Pastikan KTP terbaca jelas" />
          </div>

          {showOcrConfirm && (
            <div className="card-soft p-4 space-y-3">
              <p className="text-sm font-bold text-telkom-dark">Hasil OCR</p>
              <p className="text-[11px] text-amber-700 bg-amber-50 rounded-xl p-2.5 mb-2">Edit jika ada yang kurang tepat.</p>
              <OcrField label="Nama PIC Pelanggan" value={ocrFields.nama || ""} onChange={(v) => setOcrFields((prev) => ({ ...prev, nama: v }))} />
              <OcrField label="Alamat KTP" value={ocrFields.alamat || ""} onChange={(v) => setOcrFields((prev) => ({ ...prev, alamat: v }))} />
              <details className="rounded-2xl bg-gray-50 p-3">
                <summary className="text-xs font-semibold text-gray-600 cursor-pointer">Debug OCR mentah</summary>
                <pre className="text-[10px] whitespace-pre-wrap mt-2 text-gray-500">{ocrRawText || "(kosong)"}</pre>
              </details>
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-600 mb-2">Apakah alamat KTP sama dengan alamat pemasangan?</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { updateForm("ktp_alamat_sama_pemasangan", true); updateForm("alamat_pemasangan", ocrFields.alamat || ""); setAlamatSamaKTP(true); }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold border-2 transition ${alamatSamaKTP === true ? "bg-telkom-red text-white border-telkom-red shadow-md" : "bg-white text-telkom-dark border-gray-200"}`}
                  >
                    <span className="text-sm">{alamatSamaKTP === true ? "☑" : "☐"}</span> Ya, sama
                  </button>
                  <button
                    onClick={() => { updateForm("ktp_alamat_sama_pemasangan", false); setAlamatSamaKTP(false); }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold border-2 transition ${alamatSamaKTP === false ? "bg-telkom-red text-white border-telkom-red shadow-md" : "bg-white text-telkom-dark border-gray-200"}`}
                  >
                    <span className="text-sm">{alamatSamaKTP === false ? "☑" : "☐"}</span> Tidak, beda
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── STEP: NPWP ── */}
      {step === "npwp" && (
        <div className="space-y-4">
          <div className="card-soft p-4">
            <p className="text-sm font-bold text-telkom-dark mb-1">Foto NPWP Pelanggan (Opsional)</p>
            <p className="text-xs text-gray-500 mb-4">Jika ada, ambil foto NPWP. Nomor NPWP akan diekstrak otomatis.</p>
            <DualImageUpload preview={form.npwpPreview || null} onRetake={() => { setNpwpImage(null); updateForm("npwpPreview", null); }} onImage={(f) => { setNpwpImage(f); const preview = URL.createObjectURL(f); updateForm("npwpPreview", preview); runOCR(f, parseNPWP, "npwp"); }} label="Nomor NPWP akan diekstrak" />
          </div>

          {showOcrConfirm && (
            <div className="card-soft p-4 space-y-2">
              <p className="text-sm font-bold text-telkom-dark">Hasil OCR - Periksa & Edit</p>
              <p className="text-[11px] text-amber-700 bg-amber-50 rounded-xl p-2.5 mb-2">Periksa nomor NPWP sebelum lanjut.</p>
              {Object.entries(ocrFields).map(([key, val]) => (
                <OcrField key={key} label={key === "npwp" ? "NPWP" : key.replace(/^./, (s) => s.toUpperCase())} value={val} onChange={(v) => setOcrFields((prev) => ({ ...prev, [key]: v }))} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── STEP: ALAMAT PEMASANGAN ── */}
      {step === "alamat" && (
        <div className="space-y-4">
          {form.ktp_alamat && alamatSamaKTP === null && (
            <div className="card-soft p-4">
              <p className="text-sm font-bold text-telkom-dark mb-2">Apakah alamat pemasangan sama dengan alamat KTP?</p>
              <div className="text-xs text-gray-600 bg-gray-50 rounded-xl p-3 mb-4">
                <p className="font-medium mb-1">Alamat KTP:</p>
                <p>{form.ktp_nama ? `${form.ktp_nama} - ` : ""}{form.ktp_alamat}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setAlamatSamaKTP(true)} className={`font-bold rounded-2xl py-4 text-sm active:scale-[0.98] border-2 ${alamatSamaKTP === true ? "bg-telkom-red text-white border-telkom-red" : "bg-white text-telkom-dark border-gray-200"}`}>
                  ✅ Sama
                </button>
                <button onClick={() => setAlamatSamaKTP(false)} className={`font-bold rounded-2xl py-4 text-sm active:scale-[0.98] border-2 ${alamatSamaKTP === false ? "bg-telkom-red text-white border-telkom-red" : "bg-white text-telkom-dark border-gray-200"}`}>
                  ✏️ Berbeda
                </button>
              </div>
            </div>
          )}

          {alamatSamaKTP === true && (
            <div className="card-soft p-4">
              <p className="text-sm font-bold text-telkom-dark mb-1">Alamat Pemasangan</p>
              <p className="text-xs text-gray-600 bg-green-50 rounded-xl p-3">
                ✅ Alamat pemasangan menggunakan alamat KTP:<br />
                <span className="font-medium">{form.ktp_alamat}</span>
              </p>
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-1">Edit lagi kalau perlu:</p>
                <textarea value={form.alamat_pemasangan || form.ktp_alamat || ""} onChange={(e) => updateForm("alamat_pemasangan", e.target.value)}
                  className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl" rows={3} />
              </div>
            </div>
          )}

          {alamatSamaKTP === false && (
            <div className="space-y-4">
              <div className="card-soft p-4">
                <p className="text-sm font-bold text-telkom-dark mb-1">Lokasi Pemasangan</p>
                <p className="text-xs text-gray-500 mb-4">Tekan GPS untuk ambil titik awal. Setelah itu gunakan tombol arah/zoom, lalu Terapkan titik ini.</p>
                <GeoCapture onLocation={async (lat, lng, address) => {
                  updateForm("alamat_lat", lat);
                  updateForm("alamat_lng", lng);
                  updateForm("alamat_pemasangan", address);
                }} />
                <div className="mt-3">
                  <MiniMap
                    lat={form.alamat_lat || -6.2}
                    lng={form.alamat_lng || 106.8}
                    zoom={form.alamat_zoom || 17}
                    onZoom={(z) => updateForm("alamat_zoom", z)}
                    onChange={(lat, lng) => { updateForm("alamat_lat", lat); updateForm("alamat_lng", lng); }}
                  />
                  <button
                    onClick={async () => {
                      if (form.alamat_lat && form.alamat_lng) {
                        const addr = await reverseGeocode(form.alamat_lat, form.alamat_lng);
                        updateForm("alamat_pemasangan", addr);
                      }
                    }}
                    className="w-full mt-3 bg-white border border-gray-200 text-telkom-dark font-bold rounded-2xl py-3 text-sm"
                  >
                    Terapkan titik ini
                  </button>
                </div>
              </div>
              <div className="card-soft p-4">
                <p className="text-xs text-gray-500 mb-1">Edit alamat pemasangan jika perlu:</p>
                <textarea value={form.alamat_pemasangan || ""} onChange={(e) => updateForm("alamat_pemasangan", e.target.value)}
                  placeholder="Alamat lengkap lokasi pemasangan" className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl" rows={3} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── STEP: KATEGORI PAKET ── */}
      {step === "kategori-paket" && (
        <div className="space-y-3">
          {PACKAGE_CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left p-4 rounded-2xl border-2 transition ${selectedCategory === cat ? "border-telkom-red bg-red-50" : "border-gray-100 bg-white"}`}>
              <p className="font-bold text-sm text-telkom-dark">{cat}</p>
            </button>
          ))}
        </div>
      )}

      {/* ── STEP: PAKET ── */}
      {step === "paket" && (
        <div className="space-y-3">
          <p className="text-xs text-gray-500">Kategori: <strong>{selectedCategory}</strong></p>
          {categoryPackages.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">Tidak ada paket untuk kategori ini.</p>
          ) : (
            categoryPackages.map((p) => (
              <button key={p.id} onClick={() => setSelectedPackage(p.id)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition ${selectedPackage === p.id ? "border-telkom-red bg-red-50" : "border-gray-100 bg-white"}`}>
                <p className="font-bold text-sm text-telkom-dark">{p.namaPaket}</p>
                <p className="text-xs text-gray-500 mt-1">{p.hargaLabel} - {p.speed}</p>
              </button>
            ))
          )}
        </div>
      )}

      {/* ── STEP: FOTO ── */}
      {step === "foto" && (
        <div className="space-y-4">
          <div className="card-soft p-4">
            <p className="text-sm font-bold text-telkom-dark mb-1">Foto Dokumentasi</p>
            <p className="text-xs text-gray-500 mb-4">Ambil foto lokasi/pelanggan sebagai bukti.</p>
            <DualImageUpload preview={form.fotoPreview || null} onRetake={() => { updateForm("fotoPreview", null); }} onImage={(f) => { const preview = URL.createObjectURL(f); updateForm("fotoPreview", preview); }} label="Bukti dokumentasi" />
          </div>
        </div>
      )}

      {/* ── STEP: REVIEW ── */}
      {step === "review" && (
        <div className="space-y-3">
          <Section title="Identitas Teknisi" rows={[["NIK", form.nikTeknisi], ["Nama", form.namaTeknisi]]} />
          <Section title="Data Pelanggan (dari KTP)" rows={[["NIK", form.ktp_nik], ["Nama", form.ktp_nama], ["Alamat", form.ktp_alamat]]} />
          <Section title="NPWP" rows={form.npwp_npwp ? [["NPWP", form.npwp_npwp]] : [["NPWP", "(tidak diisi)"]]} />
          <Section title="Alamat Pemasangan" rows={[["Koordinat", form.alamat_lat ? `${form.alamat_lat}, ${form.alamat_lng}` : "-"], ["Alamat", form.alamat_pemasangan || "-"]]} />
          <Section title="Paket" rows={[["Kategori", selectedCategory], ["Paket", allPackages.find((p) => p.id === selectedPackage)?.namaPaket || selectedPackage]]} />
        </div>
      )}

      {/* Navigation */}
      <div className="mt-6 flex gap-3">
        {/* KTP: show OCR confirm button */}
        {step === "ktp" && showOcrConfirm && (
          <button onClick={() => confirmOcr("ktp")} className="flex-1 bg-telkom-red text-white font-bold rounded-2xl py-4 text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
            <Check size={18} /> Data Sudah Sesuai, Lanjut
          </button>
        )}
        {step === "ktp" && !showOcrConfirm && !ocrProgress && (
          <button disabled className="flex-1 bg-gray-200 text-gray-400 font-bold rounded-2xl py-4 text-sm">
            Ambil foto KTP terlebih dahulu
          </button>
        )}

        {/* NPWP: show OCR confirm OR skip */}
        {step === "npwp" && showOcrConfirm && (
          <>
            <button onClick={() => confirmOcr("npwp")} className="flex-1 bg-telkom-red text-white font-bold rounded-2xl py-4 text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
              <Check size={18} /> Data Sesuai, Lanjut
            </button>
            <button onClick={() => { setShowOcrConfirm(false); goNext(); }} className="shrink-0 text-xs font-semibold text-gray-500 bg-gray-100 rounded-2xl px-4 py-4">
              Lewati NPWP
            </button>
          </>
        )}
        {step === "npwp" && !showOcrConfirm && !ocrProgress && (
          <button onClick={goNext} className="flex-1 bg-gray-200 text-gray-700 font-bold rounded-2xl py-4 text-sm">
            Lewati (NPWP Opsional)
          </button>
        )}

        {/* Other steps */}
        {step !== "ktp" && step !== "npwp" && step !== "alamat" && step !== "foto" && (
          <button onClick={goNext} disabled={!canGoNext()}
            className="flex-1 bg-telkom-red text-white font-bold rounded-2xl py-4 text-sm flex items-center justify-center gap-2 disabled:opacity-40 active:scale-[0.98]">
            {step === "review" ? <span onClick={handleSubmit}>Kirim Data</span> : <>Lanjut <ChevronRight size={18} /></>}
          </button>
        )}
        {step === "alamat" && (
          <button
            onClick={async () => {
              if (alamatSamaKTP === true) {
                updateForm("alamat_pemasangan", form.alamat_pemasangan || form.ktp_alamat || "");
                goNext();
                return;
              }
              if (alamatSamaKTP === false) {
                const lat = form.alamat_lat;
                const lng = form.alamat_lng;
                if (lat && lng) {
                  const refreshed = await reverseGeocode(lat, lng);
                  updateForm("alamat_pemasangan", refreshed);
                }
                goNext();
              }
            }}
            disabled={!((alamatSamaKTP === true && (form.alamat_pemasangan || form.ktp_alamat)) || (alamatSamaKTP === false && form.alamat_pemasangan && form.alamat_lat && form.alamat_lng))}
            className="flex-1 bg-telkom-red text-white font-bold rounded-2xl py-4 text-sm disabled:opacity-40 active:scale-[0.98]"
          >
            <ChevronRight size={18} className="inline" /> Lanjut
          </button>
        )}
        {step === "foto" && (
          <button onClick={goNext} className="flex-1 bg-telkom-red text-white font-bold rounded-2xl py-4 text-sm active:scale-[0.98]">
            Review Data
          </button>
        )}
      </div>
    </main>
  );
}

function Section({ title, rows }: { title: string; rows: Array<[string, string | undefined]> }) {
  return (
    <div className="card-soft p-4 space-y-1.5">
      <p className="text-[11px] font-bold text-gray-500 uppercase mb-1.5">{title}</p>
      {rows.map(([label, value]) => (
        <div key={label} className="flex gap-3 text-sm">
          <span className="font-medium text-gray-500 shrink-0 w-28">{label}</span>
          <span className="text-gray-800">{value || "-"}</span>
        </div>
      ))}
    </div>
  );
}
