// export default function Features() {
//   const features = [
//     {
//       icon: "🛡️",
//       title: "Real-Time Shield",
//       description:
//         "Continuous monitoring detects threats the moment they appear — phishing, rug pulls, and malicious contracts blocked instantly.",
//     },
//     {
//       icon: "🔐",
//       title: "Multi-Sig Vault",
//       description:
//         "Require multiple approvals for high-value transactions. Cold wallet integration with hardware key support built in.",
//     },
//     {
//       icon: "⚡",
//       title: "DeFi Guard",
//       description:
//         "Automatically scans every smart contract interaction. Risk scoring, audit reports, and emergency exit in one tap.",
//     },
//     {
//       icon: "🔗",
//       title: "Multi-Chain Native",
//       description:
//         "Ethereum, Solana, BNB Chain, Polygon, Avalanche, Arbitrum — one dashboard for every chain you care about.",
//     },
//     {
//       icon: "📡",
//       title: "Threat Intelligence",
//       description:
//         "Community-powered blacklist updated in real-time. We aggregate data from 40+ security partners and on-chain analytics.",
//     },
//     {
//       icon: "🔄",
//       title: "WalletConnect v2",
//       description:
//         "Connect any compatible wallet seamlessly. Full WalletConnect v2 protocol support with QR and deep-link pairing.",
//     },
//   ];

//   return (
//     <section
//       id="features"
//       className="relative overflow-hidden bg-[#050811] py-28 scroll-mt-[100px]"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[150px]" />

//       <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

//         {/* Core Features Pill */}
//         <div className="mb-20 flex justify-center">
//           <div className="inline-flex min-h-[58px] min-w-[190px] items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.035] px-8 py-3 text-lg font-semibold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.05)]">
//             Core Features
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature) => (
//             <div
//               key={feature.title}
//               className="group rounded-2xl border border-slate-800/80 bg-[#080e19]/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#0a111e] hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]"
//             >
//               {/* Icon */}
//               <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.045] text-2xl transition duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.08]">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold text-slate-100">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-4 text-[16px] leading-7 text-slate-400">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }