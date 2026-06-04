import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, ClipboardCheck, DownloadCloud, MapPin, Package, PenSquare, Smartphone, X } from "lucide-react";
import { Card, Badge } from "../components/ui";

const LOCK_WIP = import.meta.env.VITE_LOCK_WIP === "true";

const mainCards = [
  { to: "/setoran", icon: ClipboardCheck, title: LOCK_WIP ? "Setoran Closing · WIP" : "Setoran Closing", desc: "Input data closing + OCR KTP/NPWP otomatis.", badge: "Form baru", disabled: LOCK_WIP },
  { to: "/paket", icon: Package, title: "Paket", desc: "Cari paket yang cocok buat kebutuhan pelanggan.", badge: "Harga & copy info" },
  { to: "/produk", icon: BookOpen, title: "Product Knowledge", desc: "FAQ, library produk, dan kuis ringan.", badge: "Belajar cepat" },
  { to: "/prospek", icon: MapPin, title: LOCK_WIP ? "Peta Prospek · WIP" : "Peta Prospek", desc: "Lihat cluster peluang dan angle jualan lapangan.", badge: "Prioritas area", disabled: LOCK_WIP },
  { to: "/konten", icon: PenSquare, title: "Buat Konten", desc: "Bikin pesan WA, caption, dan request poster.", badge: "Quick tools" },
];

export default function HomePage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if already installed as standalone app
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone;

    if (isStandalone) {
      // Already installed — no banner needed
      return;
    }

    // Capture beforeinstallprompt (Chrome fires this when eligible)
    const promptHandler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", promptHandler);

    // Show banner after a short delay (don't wait for beforeinstallprompt)
    const timer = setTimeout(() => setShowBanner(true), 1500);

    return () => {
      window.removeEventListener("beforeinstallprompt", promptHandler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Chrome install prompt available
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === "accepted") {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      // No install prompt — show instructions
      setShowInstructions(true);
      setShowBanner(false);
    }
  };

  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <main className="page">
      <header className="page-header">
        <div className="eyebrow">Indibiz Hunter</div>
        <h1 className="page-title">Andalan Tim Lapangan.</h1>
        <p className="page-subtitle">Ringkas, cepat, dan fokus untuk membantu dapat pelanggan.</p>
      </header>

      {/* Install banner — shows on every non-installed visit */}
      {showBanner && !showInstructions && (
        <div className="mb-4 bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
          <div className="flex items-center gap-3 p-4">
            <div className="h-12 w-12 shrink-0 rounded-2xl bg-telkom-red flex items-center justify-center shadow-sm">
              <DownloadCloud size={22} className="text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-sm text-telkom-dark">Install Indibiz Hunter</p>
              <p className="text-xs text-gray-500 mt-0.5">Pasang di HP — akses lebih cepat, bisa offline.</p>
            </div>
            <button
              onClick={handleInstall}
              className="shrink-0 bg-telkom-red text-white text-xs font-bold rounded-full px-5 py-2.5 shadow-sm active:scale-95 transition-transform"
            >
              Install
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="shrink-0 p-1.5 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Manual install instructions (fallback when Chrome prompt isn't available) */}
      {showInstructions && (
        <div className="mb-4 bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Smartphone size={20} className="text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-sm text-telkom-dark">Install Manual</p>
                <p className="text-xs text-gray-500">Dua langkah aja, gampang.</p>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="ml-auto shrink-0 p-1.5 rounded-full text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
            <ol className="space-y-2 text-sm text-gray-700 ml-1">
              <li className="flex items-start gap-2">
                <span className="font-bold text-telkom-red shrink-0 mt-0.5">1.</span>
                <span>Tap ⋮ (3 titik) di pojok kanan atas Chrome</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-telkom-red shrink-0 mt-0.5">2.</span>
                <span>Pilih <strong>"Add to Home Screen"</strong></span>
              </li>
            </ol>
            <p className="mt-3 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
              ⚡ Selesai! Icon "iB Hunter" muncul di HP. Buka kayak aplikasi biasa.
            </p>
          </div>
        </div>
      )}

      <section className="grid grid-cols-1 gap-3">
        {mainCards.map((item) =>
          item.disabled ? (
            <Card key={item.to} className="flex items-center gap-3 opacity-45 grayscale pointer-events-none">
              <div className="h-11 w-11 shrink-0 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <item.icon size={21} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-[15px] text-slate-900">{item.title}</h3>
                  <Badge tone="slate">WIP</Badge>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </Card>
          ) : (
            <Link key={item.to} to={item.to}>
              <Card className="flex items-center gap-3 active:scale-[0.99] transition-transform">
                <div className="h-11 w-11 shrink-0 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <item.icon size={21} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-[15px] text-slate-900">{item.title}</h3>
                    <Badge tone="slate">{item.badge}</Badge>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </Card>
            </Link>
          )
        )}
      </section>
    </main>
  );
}
