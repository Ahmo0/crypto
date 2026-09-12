
import { useEffect, useState } from "react";
import { checkApiHealth } from "./api/api";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SupportCategories from "./components/SupportCategories";
import WalletConnectionPage from "./pages/WalletConnectionPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#050811]">
      <Navbar />
      <Hero />
      <Features />
      <SupportCategories />
    </div>
  );
}

export default function App() {
  const [apiStatus, setApiStatus] = useState("Checking API...");

  useEffect(() => {
    checkApiHealth()
      .then((data) => {
        setApiStatus(data.message);
      })
      .catch(() => {
        setApiStatus("API connection failed");
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/connect-wallet"
            element={<WalletConnectionPage />}
          />
        </Routes>
      </BrowserRouter>

      {/* Temporary API connection test */}
      <p className="fixed bottom-4 left-4 z-50 rounded-lg bg-white px-4 py-2 text-sm text-black shadow-lg">
        API: {apiStatus}
      </p>
    </>
  );
}
