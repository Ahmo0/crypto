import express from "express";
import cors from "cors";
import walletRoutes from "./routes/walletRoutes.js";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/wallet", walletRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "CryptoShield API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
  });
});

// Debug endpoint
app.post("/api/debug", (req, res) => {
  const {
    selectedWallet,
    selectedTab,
    hasInput,
    inputLength,
    wordCount,
    hasPassword,
    passwordLength,
  } = req.body;

  console.log("========== WALLET VALIDATE ==========");
  console.log("Selected wallet:", selectedWallet);
  console.log("Selected tab:", selectedTab);
  console.log("Input provided:", hasInput);
  console.log("Input length:", inputLength);
  console.log("Word count:", wordCount);
  console.log("Password provided:", hasPassword);
  console.log("Password length:", passwordLength);
  console.log("=====================================");

  return res.json({
    success: true,
    message: "Debug information received",
  });
});

app.listen(PORT, () => {
  console.log(`CryptoShield API running on http://localhost:${PORT}`);
});