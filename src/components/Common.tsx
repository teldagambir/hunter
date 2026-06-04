import { Info } from "lucide-react";
import { Card } from "./ui";

export default function HargaNote() {
  return (
    <Card className="mb-4 flex items-start gap-2 !p-3 shadow-none bg-white/60">
      <Info size={15} className="mt-0.5 shrink-0 text-telkom-red" />
      <p className="text-xs leading-relaxed text-slate-500">
        Harga dapat berubah mengikuti ketentuan program. Cek ulang sebelum penawaran final ke pelanggan.
      </p>
    </Card>
  );
}

export function PageHeader({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <header className="page-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </header>
  );
}
