import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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