const coins = [
  { name: "Ethereum", symbol: "ETH", price: "$2,453.91" },
  { name: "Solana", symbol: "SOL", price: "$101.83" },
  { name: "Polygon", symbol: "POL", price: "$0.15" },
  { name: "Bitcoin", symbol: "BTC", price: "$79,714.37" },
  { name: "Chainlink", symbol: "LINK", price: "$11.63" },
  { name: "Uniswap", symbol: "UNI", price: "$6.13" },
  { name: "Avalanche", symbol: "AVAX", price: "$7.39" },
  { name: "BNB", symbol: "BNB", price: "$718.62" },
];

export default function CryptoTicker() {
  const tickerCoins = [...coins, ...coins];

  return (
    <div className="relative mt-[280px] w-full overflow-hidden border-y border-slate-800/60 bg-[#070c15]/70 py-5">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050811] to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050811] to-transparent" />

      <div className="flex w-max animate-[ticker_35s_linear_infinite]">
        {tickerCoins.map((coin, index) => (
          <div
            key={`${coin.symbol}-${index}`}
            className="flex items-center whitespace-nowrap"
          >
            <span className="mx-5 text-[15px] font-medium text-slate-300">
              {coin.name}
            </span>

            <span className="text-[15px] font-bold text-cyan-400">
              {coin.symbol}
            </span>

            <span className="ml-3 text-[15px] font-medium text-slate-400">
              {coin.price}
            </span>

            <span className="mx-7 text-slate-700">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}