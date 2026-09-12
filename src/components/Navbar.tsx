import { Check, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
const navigate = useNavigate();

return ( <nav className="w-full border-b border-slate-800 bg-[#050811]"> <div className="mx-auto flex h-[100px] max-w-[1760px] items-center justify-between px-10">
{/* Logo */} <div className="flex items-center gap-5"> <div className="flex h-12 w-12 items-center justify-center bg-cyan-400 [clip-path:polygon(50%_0%,100%_25%,100%_70%,50%_100%,0%_70%,0%_25%)]"> <Check className="h-7 w-7 stroke-[3] text-[#050811]" /> </div>


      <span className="text-[30px] font-bold tracking-wide text-slate-100">
        Decentralized Rectification Protocol
      </span>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-5">
      {/* Sign In */}
      <button
        type="button"
        className="min-h-[58px] min-w-[150px] rounded-xl border border-slate-700 bg-[#0b111d] px-8 py-4 text-lg font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-[#101827]"
      >
        Sign In
      </button>

      {/* Connect Wallet */}
      <button
        type="button"
        onClick={() => navigate("/connect-wallet")}
        className="flex min-h-[58px] min-w-[210px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:opacity-90"
      >
        <CreditCard className="h-6 w-6" />
        Connect Wallet
      </button>
    </div>
  </div>
</nav>


);
}
