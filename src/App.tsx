import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SupportCategories from "./components/SupportCategories";
import WalletConnectionPage from "./pages/WalletConnectionPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#050811]">
      <Navbar />
      <Hero />
      <SupportCategories />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/connect-wallet"
          element={<WalletConnectionPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}