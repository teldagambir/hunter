import { useState } from "react";
import { Copy, ExternalLink } from "lucide-react";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

interface CopyBtnProps {
  text: string;
  label?: string;
}

export function CopyBtn({ text, label = "Copy" }: CopyBtnProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="btn-outline text-xs !px-3 !py-1.5"
      onClick={(e) => {
        e.stopPropagation();
        copyToClipboard(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }}
    >
      <Copy size={14} />
      {copied ? "Tersalin!" : label}
    </button>
  );
}

interface WaBtnProps {
  text: string;
  phone?: string;
  label?: string;
}

export function WaBtn({ text, phone, label = "Buat WA" }: WaBtnProps) {
  const waText = encodeURIComponent(text);
  const url = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${waText}`
    : `https://wa.me/?text=${waText}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary text-xs !px-3 !py-1.5 inline-flex items-center gap-1"
      onClick={(e) => e.stopPropagation()}
    >
      <ExternalLink size={14} />
      {label}
    </a>
  );
}
