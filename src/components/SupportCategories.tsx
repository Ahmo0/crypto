import { useNavigate } from "react-router-dom";

export default function SupportCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Account Access & Security",
      items: [
        {
          title: "Link Account",
          description:
            "Click here to link your wallet or resolve account connectivity issues.",
        },
        {
          title: "Login Failures & Lockouts",
          description:
            "Click here to regain access to a locked account or resolve errors encountered during login.",
        },
        {
          title: "Validation",
          description:
            "Click here to securely validate and authenticate your wallet ownership.",
        },
        {
          title: "Recovery",
          description:
            "Click here to initiate wallet recovery or restore a compromised account.",
        },
        {
          title: "API Keys",
          description:
            "Click here to generate, manage, or troubleshoot third-party API keys.",
        },
        {
          title: "Phishing Scams",
          description:
            "Click here to report compromised accounts, revoke malicious contracts, or seek help after a phishing attempt.",
        },
      ],
    },

    {
      title: "Wallet Maintenance & Technical Support",
      items: [
        {
          title: "Synchronization & Glitches",
          description:
            "Click here to sync your wallet data, refresh balances, or resolve internal software glitches.",
        },
        {
          title: "Rectification",
          description:
            "Click here to run a diagnostic and rectify abnormal wallet behavior.",
        },
        {
          title: "Bugs",
          description:
            "Click here to report platform bugs, interface errors, or broken features.",
        },
        {
          title: "Bot Activation",
          description:
            "Click here to activate and configure your automated trading or management bot.",
        },
        {
          title: "Bot Upgrade",
          description:
            "Click here to update your bot software to the latest compatible version.",
        },
      ],
    },

    {
      title: "Balance, Funding & Withdrawals",
      items: [
        {
          title: "Missing/Irregular Balance",
          description:
            "Click here to track down lost funds or correct display errors in your portfolio.",
        },
        {
          title: "Withdrawal",
          description:
            "Click here to initiate a withdrawal or troubleshoot stuck and pending payouts.",
        },
        {
          title: "Buy Token/Coin",
          description:
            "Click here to fund your wallet and start trading. Note: Your account must be marked as a trusted payment source.",
        },
        {
          title: "Unrecognized Charges",
          description:
            "Click here to dispute, investigate, or block unauthorized outbound transactions.",
        },
        {
          title: "Failed Bank Integration",
          description:
            "Click here to troubleshoot fiat deposits, withdrawals, or bank linking errors.",
        },
      ],
    },

    {
      title: "Trading, Swapping & Bridging",
      items: [
        {
          title: "Swap / Exchange",
          description:
            "Click here to exchange tokens or resolve swap routing failures and liquidity errors.",
        },
        {
          title: "Bridging & Cross Transfer",
          description:
            "Click here to bridge assets across different networks or resolve cross-chain transfer errors.",
        },
        {
          title: "Slippage",
          description:
            "Click here to adjust your slippage tolerance or resolve transaction failures caused by price impact.",
        },
        {
          title: "Transaction Delay / Network Congestion",
          description:
            "Click here to speed up, cancel, or troubleshoot pending transactions stuck in the mempool.",
        },
        {
          title: "Incompatible Asset Transfers",
          description:
            "Click here to seek recovery for tokens sent to unsupported networks or incorrect contract addresses.",
        },
      ],
    },

    {
      title: "DeFi, Staking & Web3 Features",
      items: [
        {
          title: "Migration",
          description:
            "Click here to migrate your tokens to a new contract or upgrade to a new network standard.",
        },
        {
          title: "Claim / Claim Airdrop",
          description:
            "Click here to claim pending tokens, community airdrops, or resolve claiming errors.",
        },
        {
          title: "Staking",
          description:
            "Click here to stake assets, unstake, or resolve issues with reward accumulation.",
        },
        {
          title: "DeFi Farming",
          description:
            "Click here to manage yield farms, stake LP tokens, or resolve commercial farming issues.",
        },
        {
          title: "Liquidity",
          description:
            "Click here to add or remove liquidity, or troubleshoot pool pairing errors.",
        },
        {
          title: "Whitelist",
          description:
            "Click here to register your address for presales or resolve whitelist eligibility errors.",
        },
        {
          title: "NFTs",
          description:
            "Click here to view, mint, transfer, or resolve issues interacting with your non-fungible tokens.",
        },
        {
          title: "Token Burns",
          description:
            "Click here to execute a manual token burn or verify circulating supply reductions.",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050811] py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
        {categories.map((category) => (
          <div key={category.title} className="mb-20 last:mb-0">
            <div className="mb-10 flex justify-center">
              <div className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.035] px-8 py-3 text-lg font-semibold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.05)]">
                {category.title}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-800/80 bg-[#080e19]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#0a111e] hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]"
                >
                  <h3 className="text-xl font-bold text-slate-100 transition group-hover:text-cyan-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <button
  type="button"
  onClick={() => navigate("/connect-wallet")}
  className="mt-6 inline-block text-sm font-semibold text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
>
  Learn more →
</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}