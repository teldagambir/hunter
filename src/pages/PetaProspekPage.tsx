/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { prospectPoints, type ProspectPoint } from "../data/prospects";
import { CopyBtn } from "../components/Buttons";
import { Badge } from "../components/ui";
import { LocateFixed, MapPin, Navigation, Phone, Search, X } from "lucide-react";

type Filter = "all" | "hot" | "wa" | "visited";
type UserLocation = { lat: number; lng: number } | null;

const center: [number, number] = [-6.1658, 106.8208];
const mapBounds = L.latLngBounds(prospectPoints.map((p) => [p.lat, p.lng] as [number, number]));

export default function PetaProspekPage() {
  const [selected, setSelected] = useState<ProspectPoint | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [userLocation, setUserLocation] = useState<UserLocation>(null);
  const [locationStatus, setLocationStatus] = useState("Lokasi saya");
  const mapRef = useRef<L.Map | null>(null);

  const visibleProspects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return prospectPoints.filter((p) => {
      if (filter === "hot" && p.sales_signal !== "HOT") return false;
      if (filter === "wa" && p.preferred_channel !== "WhatsApp") return false;
      if (filter === "visited" && !p.visit_status) return false;
      if (!q) return true;
      return [p.business_name, p.segment, p.cluster, p.address].join(" ").toLowerCase().includes(q);
    });
  }, [filter, query]);

  const activeSelected = selected && visibleProspects.some((p) => p.lead_id === selected.lead_id)
    ? selected
    : null;

  const askLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("GPS tidak tersedia");
      return;
    }
    setLocationStatus("Mencari lokasi...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(loc);
        setLocationStatus("Lokasi aktif");
        mapRef.current?.setView([loc.lat, loc.lng], 17, { animate: true });
      },
      () => setLocationStatus("Izin lokasi ditolak"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 15000 }
    );
  };

  return (
    <main className="prospect-map-page real-map-page">
      <div className="command-header">
        <div>
          <p className="command-title">Gambir-Cideng Command</p>
          <p className="command-subtitle">Map prospek lapangan</p>
        </div>
        <button className="command-locate" onClick={askLocation} aria-label="Cari lokasi saya"><LocateFixed size={17} /></button>
      </div>

      <div className="map-topbar">
        <div className="map-search">
          <Search size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari nama, area, cluster..." />
          {query && <button onClick={() => setQuery("")}><X size={15} /></button>}
        </div>

      </div>

      <div className="map-filterbar">
        <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>Semua</FilterPill>
        <FilterPill active={filter === "hot"} onClick={() => setFilter("hot")}>Hot</FilterPill>
        <FilterPill active={filter === "wa"} onClick={() => setFilter("wa")}>Ada WA</FilterPill>
        <FilterPill active={filter === "visited"} onClick={() => setFilter("visited")}>Visited</FilterPill>
      </div>

      <section className="real-map-wrap" aria-label="Peta titik prospek Gambir Cideng">
        <MapContainer
          center={center}
          zoom={14}
          minZoom={12}
          maxZoom={19}
          zoomControl={true}
          attributionControl={false}
          className="real-map"
          ref={mapRef}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapAutoFit prospects={visibleProspects} selected={activeSelected} userLocation={userLocation} shouldFit={!selected} />
          {visibleProspects.map((p) => (
            <Marker
              key={p.lead_id}
              position={[p.lat, p.lng]}
              icon={prospectIcon(p, activeSelected?.lead_id === p.lead_id)}
              eventHandlers={{ click: () => setSelected(p) }}
            />
          ))}
          {userLocation && <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon()} />}
        </MapContainer>
      </section>

      <div className="map-status">
        <span>{visibleProspects.length} titik</span>
        <span>{locationStatus}</span>
      </div>

      {activeSelected && <ProspectSheet prospect={activeSelected} />}
    </main>
  );
}

function MapAutoFit({ prospects, selected, shouldFit }: { prospects: ProspectPoint[]; selected: ProspectPoint | null; userLocation: UserLocation; shouldFit: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.setView([selected.lat, selected.lng], Math.max(map.getZoom(), 16), { animate: true });
      return;
    }
    if (!shouldFit) return;
    const points = prospects.map((p) => [p.lat, p.lng] as [number, number]);
    if (points.length > 1) map.fitBounds(L.latLngBounds(points).pad(0.12), { animate: true, maxZoom: 14 });
    else if (points.length === 1) map.setView(points[0], 16, { animate: true });
    else map.fitBounds(mapBounds.pad(0.1), { animate: true, maxZoom: 14 });
  }, [map, prospects, selected, shouldFit]);

  return null;
}

function ProspectSheet({ prospect }: { prospect: ProspectPoint }) {
  const brief = `${prospect.business_name}\n${prospect.segment}\n${prospect.address}\nChannel: ${prospect.preferred_channel || "-"}\nSignal: ${prospect.sales_signal || "-"}\nOffer: ${prospect.product_offered || "Indibiz"} ${prospect.est_mrc || ""}\nNext: ${prospect.next_action || "Follow-up"}`;

  return (
    <aside className="prospect-sheet compact-sheet">
      <div className="sheet-handle" />
      <div className="flex gap-1.5 mb-2 flex-wrap">
        <Badge tone={prospect.sales_signal === "HOT" ? "red" : "slate"}>{prospect.sales_signal || "LEAD"}</Badge>
        {prospect.visit_status && <Badge tone="green">Visited</Badge>}
        <Badge tone="blue">Score {Math.round(prospect.priority_score || 0)}</Badge>
      </div>
      <h1 className="text-lg font-black leading-tight tracking-tight text-slate-900">{prospect.business_name}</h1>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{prospect.segment} • {prospect.cluster}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{prospect.address}</p>

      {prospect.next_action && <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">{prospect.next_action}</p>}

      <div className="mt-4 flex flex-wrap gap-2">
        <a className="btn-primary text-xs !px-3 !py-1.5" href={`https://www.google.com/maps/search/?api=1&query=${prospect.lat},${prospect.lng}`} target="_blank" rel="noreferrer">
          <MapPin size={14} /> Maps
        </a>
        <a className="btn-outline text-xs !px-3 !py-1.5" href={`https://www.google.com/maps/dir/?api=1&destination=${prospect.lat},${prospect.lng}`} target="_blank" rel="noreferrer">
          <Navigation size={14} /> Rute
        </a>
        {prospect.phone_primary && (
          <a className="btn-outline text-xs !px-3 !py-1.5" href={`https://wa.me/62${prospect.phone_primary.replace(/^0|^62|[^0-9]/g, "")}`} target="_blank" rel="noreferrer">
            <Phone size={14} /> WA
          </a>
        )}
        <CopyBtn text={brief} label="Copy" />
      </div>
    </aside>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: any }) {
  return <button onClick={onClick} className={`map-pill ${active ? "active" : ""}`}>{children}</button>;
}

function prospectIcon(p: ProspectPoint, selected: boolean) {
  const color = selected ? "#1d9bf0" : p.sales_signal === "HOT" ? "#d85b5f" : p.visit_status ? "#8e9aa8" : p.preferred_channel === "WhatsApp" ? "#7b8794" : "#a0a8b2";
  return L.divIcon({
    className: "",
    html: `<div class="leaflet-prospect-pin ${selected ? "selected" : ""}" style="--pin:${color}"><span></span></div>`,
    iconSize: selected ? [34, 34] : [26, 26],
    iconAnchor: selected ? [17, 17] : [13, 13],
  });
}

function userIcon() {
  return L.divIcon({
    className: "",
    html: `<div class="leaflet-user-pin"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}
