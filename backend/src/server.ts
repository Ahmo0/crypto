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

app.listen(PORT, () => {
  console.log(`CryptoShield API running on http://localhost:${PORT}`);
});