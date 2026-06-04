import { NavLink } from "react-router-dom";
import { Home, Package, BookOpen, MapPin, ClipboardCheck } from "lucide-react";

const LOCK_WIP = import.meta.env.VITE_LOCK_WIP === "true";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/paket", icon: Package, label: "Paket" },
  { to: "/produk", icon: BookOpen, label: "Produk" },
  { to: "/setoran", icon: ClipboardCheck, label: LOCK_WIP ? "Setoran · WIP" : "Setoran", disabled: LOCK_WIP },
  { to: "/prospek", icon: MapPin, label: LOCK_WIP ? "Prospek · WIP" : "Prospek", disabled: LOCK_WIP },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {navItems.map((item) => {
          if (item.disabled) {
            return (
              <div key={item.to} className="nav-item opacity-45 grayscale pointer-events-none">
                <item.icon />
                <span>{item.label}</span>
              </div>
            );
          }
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
