import { Check, CreditCard, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`w-full border-b ${
        theme === "dark"
          ? "border-slate-800 bg-[#050811]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto flex min-h-[70px] w-full max-w-[1760px] items-center justify-between gap-2 px-3 sm:min-h-[90px] sm:px-6 lg:h-[100px] lg:px-10">
        {/* Logo */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 lg:gap-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-cyan-400 [clip-path:polygon(50%_0%,100%_25%,100%_70%,50%_100%,0%_70%,0%_25%)] sm:h-11 sm:w-11 lg:h-12 lg:w-12">
            <Check
              className={`h-4 w-4 stroke-[3] sm:h-6 sm:w-6 lg:h-7 lg:w-7 ${
                theme === "dark" ? "text-[#050811]" : "text-white"
              }`}
            />
          </div>

          <span
            className={`min-w-0 max-w-[150px] text-[11px] font-bold leading-tight tracking-wide sm:max-w-none sm:text-xl lg:text-[30px] ${
              theme === "dark" ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Decentralized Rectification Protocol
          </span>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:ml-3 sm:gap-3 lg:gap-5">
          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`relative flex h-7 w-12 shrink-0 items-center rounded-full border p-1 transition-all duration-300 sm:h-8 sm:w-14 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800"
                : "border-slate-300 bg-slate-200"
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full shadow-md transition-transform duration-300 sm:h-6 sm:w-6 ${
                theme === "dark"
                  ? "translate-x-5 bg-[#050811] sm:translate-x-6"
                  : "translate-x-0 bg-white"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="h-3 w-3 text-cyan-400 sm:h-4 sm:w-4" />
              ) : (
                <Sun className="h-3 w-3 text-yellow-500 sm:h-4 sm:w-4" />
              )}
            </span>
          </button>

          {/* Sign In */}
          <button
            type="button"
            className={`hidden min-h-[48px] min-w-[120px] rounded-xl border px-5 py-3 text-base font-semibold transition sm:block lg:min-h-[58px] lg:min-w-[150px] lg:px-8 lg:py-4 lg:text-lg ${
              theme === "dark"
                ? "border-slate-700 bg-[#0b111d] text-slate-100 hover:border-slate-500 hover:bg-[#101827]"
                : "border-slate-300 bg-slate-100 text-slate-900 hover:border-slate-400 hover:bg-slate-200"
            }`}
          >
            Sign In
          </button>

          {/* Connect Wallet */}
          <button
            type="button"
            onClick={() => navigate("/connect-wallet")}
            aria-label="Connect Wallet"
            className="flex min-h-[42px] min-w-[42px] shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:opacity-90 sm:min-h-[48px] sm:min-w-[170px] sm:px-5 sm:py-3 sm:text-base lg:min-h-[58px] lg:min-w-[210px] lg:gap-3 lg:px-8 lg:py-4 lg:text-lg"
          >
            <CreditCard className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </button>
        </div>
      </div>
    </nav>
  );
}