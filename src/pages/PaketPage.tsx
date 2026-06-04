/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { allPackages, filterPackets } from "../data/packages";
import { groupPromoFees, findPromoFee } from "../data/promotions";
import { CopyBtn } from "../components/Buttons";
import HargaNote, { PageHeader } from "../components/Common";
import { Search, Filter, ChevronDown, ChevronUp, Sparkles, Percent, Zap } from "lucide-react";

type Tab = "semua" | "promo";
type ViewMode = "simple" | "full";

type CategoryFilter = "all" | "internet" | "phone-triple" | "netmonk" | "antares" | "pijar" | "oca" | "wms" | "mesh-wifi" | "antares-eazy";

const categoryFilters: Array<{ id: CategoryFilter; label: string; hint: string }> = [
  { id: "all", label: "Semua", hint: "lihat semua" },
  { id: "internet", label: "Internet Only", hint: "Basic/Bisnis" },
  { id: "phone-triple", label: "Phone / 3P", hint: "telepon + TV" },
  { id: "netmonk", label: "Netmonk", hint: "monitoring" },
  { id: "antares-eazy", label: "Antares Eazy", hint: "kamera" },
  { id: "pijar", label: "Pijar", hint: "sekolah" },
  { id: "oca", label: "OCA", hint: "chat/security" },
  { id: "mesh-wifi", label: "Mesh WiFi", hint: "coverage" },
  { id: "wms", label: "Wi-Fi MS", hint: "ONT/AP" },
];

const addonPriority = ["Internet Only", "Phone", "3S", "WMS", "Netmonk", "Antares", "Pijar", "OCA", "OCA Breach Checker", "TV", "Astinet", "Other"];

export default function PaketPage() {
  const [tab, setTab] = useState<Tab>("semua");
  return (
    <div className="page">
      <div className="panel mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-50 text-telkom-red flex items-center justify-center">
            <Sparkles size={18} />
          </div>
          <PageHeader title="Paket Indibiz" subtitle="" />
        </div>
      </div>
      <HargaNote />
      <div className="flex bg-white/70 border border-black/5 rounded-2xl p-1 mb-4 shadow-sm">
        <button
          onClick={() => setTab("semua")}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition ${
            tab === "semua" ? "bg-telkom-dark text-white shadow" : "text-gray-600"
          }`}
        >
          Semua Paket
        </button>
        <button
          onClick={() => setTab("promo")}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition ${
            tab === "promo" ? "bg-telkom-dark text-white shadow" : "text-gray-600"
          }`}
        >
          <Percent size={14} className="inline -mt-0.5" /> Paket Promo
        </button>
      </div>
      {tab === "semua" && <SemuaPaketTab />}
      {tab === "promo" && <PromoTab />}
    </div>
  );
}

function SemuaPaketTab() {
  const [search, setSearch] = useState("");
  const [speed, setSpeed] = useState("");
  const [tipe, setTipe] = useState("");
  const [addon, setAddon] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sort, setSort] = useState<string>("price-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("simple");

  const filtered = applyCategoryFilter(uniquePackages(filterPackets({
    search,
    speed: speed || undefined,
    tipe: tipe || undefined,
    addon: addon || undefined,
    sortBy: (sort as "price-asc" | "price-desc" | "name") || undefined,
  })), category);

  const speeds = [...new Set(allPackages.map((p: any) => p.speed))].sort((a, b) => parseInt(a) - parseInt(b));
  const tipeList = [...new Set(allPackages.map((p: any) => p.tipe))];
  const addons = [...new Set(allPackages.map((p: any) => p.kategoriAddon))].sort(
    (a, b) => addonPriority.indexOf(a) - addonPriority.indexOf(b)
  );

  const grouped = groupPackages(filtered);

  const setCategoryFilter = (next: CategoryFilter) => {
    setCategory(next);
    setAddon("");
  };

  return (
    <div>
      <div className="card-soft p-3 mb-3">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Filter kategori</p>
        <div className="grid grid-cols-2 gap-2">
          {categoryFilters.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategoryFilter(item.id)}
              className={`text-left border rounded-2xl p-3 active:scale-[0.98] ${category === item.id ? "bg-telkom-dark text-white border-telkom-dark" : "bg-white/80 border-black/5 text-telkom-dark"}`}
            >
              <p className="text-sm font-bold">{item.label}</p>
              <p className={`text-[11px] ${category === item.id ? "text-white/70" : "text-gray-500"}`}>{item.hint}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="relative mb-3">
        <Search size="16" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari paket, kategori, add-on..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-soft w-full pl-9 pr-4 py-3 text-sm"
        />
      </div>

      <div className="flex items-center justify-between mb-3">
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-1.5 text-sm font-bold text-gray-600">
          <Filter size="14" /> Filter & urutan {showFilters ? <ChevronUp size="14" /> : <ChevronDown size="14" />}
        </button>
        <button onClick={() => setViewMode(viewMode === "simple" ? "full" : "simple")} className="text-xs font-bold text-telkom-red">
          {viewMode === "simple" ? "Lihat detail" : "Ringkas"}
        </button>
      </div>

      {showFilters && (
        <div className="card-soft p-3 mb-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="input-soft text-sm p-2.5">
              <option value="">Semua speed</option>
              {(speeds as string[]).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={tipe} onChange={(e) => setTipe(e.target.value)} className="input-soft text-sm p-2.5">
              <option value="">Basic + Bisnis</option>
              {(tipeList as string[]).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <select value={addon} onChange={(e) => setAddon(e.target.value)} className="input-soft w-full text-sm p-2.5">
            <option value="">Semua add-on</option>
            {(addons as string[]).map(a => <option key={a} value={a}>{a}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-soft w-full text-sm p-2.5">
            <option value="price-asc">Urut: paling murah dulu</option>
            <option value="price-desc">Harga tertinggi dulu</option>
            <option value="name">Nama A-Z</option>
          </select>
        </div>
      )}

      <p className="text-xs text-gray-500 mb-2">{filtered.length} paket cocok. Digroup supaya nggak bikin mata capek.</p>
      <div className="space-y-4">
        {grouped.map((group) => (
          <section key={group.title}>
            <div className="flex items-end justify-between mb-2 px-1">
              <div>
                <h2 className="text-sm font-extrabold text-telkom-dark">{group.title}</h2>
                <p className="text-[11px] text-gray-500">{group.hint}</p>
              </div>
              <span className="badge-blue">{group.items.length}</span>
            </div>
            <div className="space-y-2">
              {group.items.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} compact={viewMode === "simple"} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function PackageCard({ pkg, compact = false }: { pkg: any; compact?: boolean }) {
  const infoText = `Paket: ${pkg.namaPaket}\nHarga: ${pkg.hargaLabel}\nTipe: ${pkg.tipe} ${pkg.rasio} | ${pkg.speed}\nCocok untuk: ${pkg.cocokUntuk}${pkg.angleJualan ? `\n\n${pkg.angleJualan}` : ""}`;

  // Look up promo fee for this package
  const promoFee = findPromoFee(pkg.speed, pkg.tipe, pkg.kategoriAddon);

  return (
    <div className="card-soft overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-extrabold text-[15px] leading-snug text-telkom-dark">{cleanName(pkg.namaPaket)}</h3>
            <p className="text-xl font-black text-telkom-red mt-1 tracking-tight">{pkg.hargaLabel}</p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {pkg.label && <span className="badge-red">{pkg.label}</span>}
            <span className="badge-blue">{pkg.speed}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge-amber">{pkg.tipe} {pkg.rasio}</span>
          <span className="badge-green">{pkg.kategoriAddon}</span>
          {promoFee && <span className="badge-green" style={{background:"rgba(20,125,100,.15)",color:"#147d64"}}>Fee Rp{promoFee.feeTbi.toLocaleString("id-ID")}</span>}
        </div>
        <p className="text-xs leading-relaxed text-gray-650 text-gray-600 mb-2">
          <span className="font-bold text-telkom-dark">Cocok:</span> {pkg.cocokUntuk}
        </p>
        {!compact && pkg.angleJualan && (
          <p className="text-xs leading-relaxed text-gray-600 bg-white/70 rounded-2xl p-3 mb-3 border border-black/5">
            {pkg.angleJualan}
          </p>
        )}
        <div className="flex gap-2">
          <CopyBtn text={infoText} label="Copy" />
        </div>
      </div>
    </div>
  );
}

function cleanName(name: string) {
  return name.replace(" Inet Only", "");
}

function uniquePackages(items: any[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function groupPackages(items: any[]) {
  const definitions = [
    { title: "Internet only — paling gampang dijual", hint: "Mulai dari sini kalau pelanggan belum jelas kebutuhannya.", test: (p: any) => p.kategoriAddon === "Internet Only" },
    { title: "Phone / Triple Play", hint: "Internet plus telepon atau paket 3 layanan.", test: (p: any) => ["Phone", "3S", "TV"].includes(p.kategoriAddon) },
    { title: "Wi-Fi Managed Service", hint: "WMS Fit/Lite/Standard untuk venue yang butuh Wi-Fi rapi.", test: (p: any) => p.kategoriAddon === "WMS" },
    { title: "Monitoring & add-on operasional", hint: "Netmonk, Antares Camera, Pijar, dan OCA.", test: (p: any) => ["Netmonk", "Antares", "Pijar", "OCA", "OCA Breach Checker"].includes(p.kategoriAddon) },
    { title: "Lainnya / enterprise", hint: "Astinet, winback, dan paket khusus.", test: () => true },
  ];

  const remaining = [...items];
  return definitions.map((def) => {
    const groupItems = remaining.filter(def.test);
    groupItems.forEach((item) => remaining.splice(remaining.indexOf(item), 1));
    return { ...def, items: groupItems };
  }).filter((group) => group.items.length > 0);
}


function applyCategoryFilter(items: any[], category: CategoryFilter) {
  if (category === "all") return items;
  const categoryMap: Record<CategoryFilter, (p: any) => boolean> = {
    all: () => true,
    internet: (p) => p.kategoriAddon === "Internet Only",
    "phone-triple": (p) => ["Phone", "3S", "TV"].includes(p.kategoriAddon),
    netmonk: (p) => p.kategoriAddon === "Netmonk",
    antares: (p) => p.kategoriAddon === "Antares",
    pijar: (p) => p.kategoriAddon === "Pijar",
    oca: (p) => ["OCA", "OCA Breach Checker"].includes(p.kategoriAddon),
    wms: (p) => p.kategoriAddon === "WMS",
    "mesh-wifi": (p) => p.kategoriAddon === "Mesh WiFi",
    "antares-eazy": (p) => p.kategoriAddon === "Antares Eazy",
  };
  return items.filter(categoryMap[category]);
}

// ── PAKET PROMO TAB ──
function PromoTab() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const groups = groupPromoFees();

  const filteredGroups = useMemo(() => {
    if (!search.trim()) return groups;
    const q = search.toLowerCase();
    return groups.map(g => ({
      ...g,
      items: g.items.filter(p =>
        p.namaPaket.toLowerCase().includes(q) ||
        p.speed.includes(q)
      ),
    })).filter(g => g.items.length > 0);
  }, [search, groups]);

  return (
    <div>
      <div className="card-soft p-4 mb-3 space-y-2">
        <p className="font-black text-sm text-telkom-dark flex items-center gap-2">
          <Zap size={16} className="text-amber-500" />
          Paket Promo (periodik)
        </p>
        <p className="text-xs leading-relaxed text-gray-600">
          Harga berlaku selama ada promo.
        </p>
      </div>

      <div className="relative mb-3">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari paket promo..."
          className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-telkom-red"
        />
      </div>

      <div className="space-y-2 pb-4">
        {filteredGroups.map((group) => (
          <div key={group.title} className="ui-card overflow-hidden p-0">
            <button
              onClick={() => setExpandedGroup(expandedGroup === group.title ? null : group.title)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-bold">{group.title}</span>
              {expandedGroup === group.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {expandedGroup === group.title && (
              <div className="px-0 pb-0 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-t border-gray-100">
                      <th className="text-left font-semibold text-gray-500 py-2 px-4 sticky left-0 bg-white">Speed</th>
                      <th className="text-right font-semibold text-gray-500 py-2 px-3">ARPU Promo</th>
                      <th className="text-right font-semibold text-green-700 py-2 px-3">Fee (TBI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((p) => (
                      <tr key={p.id} className="border-t border-gray-50 hover:bg-gray-50/50">
                        <td className="py-2.5 px-4 font-medium sticky left-0 bg-white">{p.speed}</td>
                        <td className="py-2.5 px-3 text-right tabular-nums">{p.arpuLabel}</td>
                        <td className="py-2.5 px-3 text-right tabular-nums font-medium text-green-700">{p.feeTbiLabel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card-soft p-4 mb-3">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Catatan</p>
        <ul className="mt-2 space-y-1 text-[11px] text-gray-600 leading-relaxed">
          <li><span className="font-medium">ARPU Promo</span> — Harga promo per bulan untuk pelanggan</li>
          <li><span className="font-medium">Fee (TBI)</span> — Fee teknisi <strong>termasuk</strong> PPN</li>
        </ul>
      </div>
    </div>
  );
}
