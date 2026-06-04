import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import PaketPage from "./pages/PaketPage";
import ProductKnowledgePage from "./pages/ProductKnowledgePage";
import PetaProspekPage from "./pages/PetaProspekPage";
import BuatKontenPage from "./pages/BuatKontenPage";
import SetoranPage from "./pages/SetoranPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paket" element={<PaketPage />} />
          <Route path="/produk" element={<ProductKnowledgePage />} />
          <Route path="/prospek" element={<PetaProspekPage />} />
          <Route path="/konten" element={<BuatKontenPage />} />
          <Route path="/setoran" element={<SetoranPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
