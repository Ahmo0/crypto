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
    <section className="relative overflow-hidden bg-[#050811] py-16 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[160px] sm:h-[600px] sm:w-[800px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10">
        {categories.map((category) => (
          <div
            key={category.title}
            className="mb-16 last:mb-0 sm:mb-20"
          >
            {/* Category title */}
            <div className="mb-7 flex justify-center px-2 sm:mb-9">
              <div className="inline-flex min-h-[48px] max-w-full items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.035] px-5 py-2.5 text-center text-sm font-semibold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.05)] sm:min-h-[54px] sm:px-7 sm:py-3 sm:text-base lg:text-lg">
                {category.title}
              </div>
            </div>

            {/* Responsive card layout */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    flex
                    min-h-[185px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-[#080e19]/80
                    px-7
                    py-5
                    text-center
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/25
                    hover:bg-[#0a111e]
                    hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]
                    sm:min-h-[200px]
                    sm:w-[calc(50%-10px)]
                    sm:px-8
                    sm:py-6
                    lg:w-[calc(33.333%-16px)]
                    lg:px-9
                    lg:py-7
                  "
                >
                  {/* Card title */}
                  <h3 className="w-full text-center text-lg font-bold leading-6 text-slate-100 transition group-hover:text-cyan-300 sm:text-xl">
                    {item.title}
                  </h3>

                  {/* Card description */}
                  <p className="mt-3 w-full text-center text-sm leading-6 text-slate-400 sm:mt-4 sm:text-[15px] sm:leading-7 lg:text-[16px]">
                    {item.description}
                  </p>

                  {/* Learn more */}
                  <button
                    type="button"
                    onClick={() => navigate("/connect-wallet")}
                    className="
                      mt-5
                      w-full
                      text-center
                      text-sm
                      font-semibold
                      text-cyan-400
                      opacity-100
                      transition-opacity
                      duration-300
                      sm:opacity-0
                      sm:group-hover:opacity-100
                    "
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