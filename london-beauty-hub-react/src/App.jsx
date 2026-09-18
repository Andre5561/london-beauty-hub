import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/Home";
import ManicurePage from "./pages/Manicure";
import NailExtensionsPage from "./pages/NailExtensions";
import PedicurePage from "./pages/Pedicure";
import BrowsPage from "./pages/Brows";
import PricesPage from "./pages/Prices";
import GalleryPage from "./pages/Gallery";
import ContactsPage from "./pages/Contacts";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/manikur/" element={<ManicurePage />} />
        <Route path="/naroshchennya-nigtiv/" element={<NailExtensionsPage />} />
        <Route path="/pedykur/" element={<PedicurePage />} />
        <Route path="/brovy/" element={<BrowsPage />} />
        <Route path="/tsiny/" element={<PricesPage />} />
        <Route path="/galereya/" element={<GalleryPage />} />
        <Route path="/kontakty/" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
