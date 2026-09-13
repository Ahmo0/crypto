import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CryptoTicker from "./CryptoTicker";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#050811]">
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.055] blur-[150px]" />

      <div className="pointer-events-none absolute -left-[120px] top-[45%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute -right-[100px] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[170px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.035),transparent_45%)]" />

      {/* HERO CONTENT */}

      <div className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-[1500px] flex-col items-center px-6 pb-24 pt-24 text-center sm:px-8 sm:pt-28 lg:px-10 lg:pt-24">

        {/* SHIELD */}

        <div className="relative mb-9 flex h-[190px] w-[190px] items-center justify-center">
          <div className="absolute h-[130px] w-[130px] rounded-full bg-cyan-400/[0.035] blur-[35px]" />

          <div className="absolute inset-0 rounded-full border border-cyan-400/[0.10]" />

          <div className="absolute inset-[18px] rounded-full border border-cyan-400/[0.13]" />

          <div className="absolute inset-[36px] rounded-full border border-cyan-400/[0.08]" />

          <div className="relative flex h-[92px] w-[92px] items-center justify-center bg-gradient-to-br from-cyan-200 via-cyan-400 to-teal-400 shadow-[0_0_65px_rgba(34,211,238,0.28)] [clip-path:polygon(50%_0%,100%_25%,100%_68%,50%_100%,0%_68%,0%_25%)]">
            <Check className="h-12 w-12 stroke-[3] text-[#061016]" />
          </div>
        </div>

        {/* STATUS BADGE */}

        <div className="mb-10 flex min-h-[54px] items-center gap-4 rounded-full border border-cyan-400/20 bg-cyan-400/[0.035] px-7 py-3.5 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-md">
          <span className="relative flex h-4 w-4 shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />

            <span className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-sm" />

            <span className="relative h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1),0_0_20px_rgba(52,211,153,0.8)]" />
          </span>

          <span className="whitespace-nowrap text-sm font-medium tracking-wide text-cyan-200 sm:text-base md:text-[17px]">
            Now Live on Mainnet — Audit Passed
          </span>

          <Check
            className="h-5 w-5 shrink-0 text-emerald-400"
            strokeWidth={2.5}
          />
        </div>

        {/* MAIN HEADING */}

        <h1 className="max-w-[1250px] text-[64px] font-black leading-[0.94] tracking-[-0.055em] text-slate-100 sm:text-[76px] md:text-[88px] lg:text-[104px] xl:text-[112px]">
          <span className="block">
            Protect Your
          </span>

          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Crypto Assets
          </span>

          <span className="block">
            Like Never Before
          </span>
        </h1>

        {/* DESCRIPTION */}

        <p className="mt-9 max-w-[850px] text-[17px] leading-8 text-slate-400 sm:text-lg md:text-xl">
          Military-grade encryption, real-time threat detection, and
          <br className="hidden sm:block" />
          seamless DeFi integration — all in one shield.
        </p>

        {/* BUTTONS */}

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5">

          {/* CONNECT WALLET */}

          <button
            type="button"
            onClick={() => navigate("/connect-wallet")}
            className="
              flex
              min-h-[58px]
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-cyan-400
              px-8
              py-4
              text-lg
              font-semibold
              text-[#050811]
              shadow-lg
              shadow-cyan-500/20
              transition
              hover:scale-[1.02]
              hover:bg-cyan-300
              sm:w-auto
              sm:min-w-[210px]
            "
          >
            Connect Wallet
          </button>

          {/* EXPLORE FEATURES */}

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
            }
            className="
              flex
              min-h-[58px]
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-slate-700
              bg-[#0b111d]
              px-8
              py-4
              text-lg
              font-semibold
              text-slate-100
              transition
              hover:border-slate-500
              hover:bg-[#101827]
              sm:w-auto
              sm:min-w-[210px]
            "
          >
            Explore Features
          </button>
        </div>

        {/* CRYPTO TICKER */}

        <CryptoTicker />

        {/* SUBTLE BOTTOM ACCENT */}

        <div className="mt-16 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </section>
  );
}