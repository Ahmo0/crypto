import { Router } from "express";
import { ethers } from "ethers";
import { randomUUID } from "crypto";

const router = Router();

// Create a wallet connection challenge
router.post("/challenge", (req, res) => {
  const { address } = req.body;

  if (!address || !ethers.isAddress(address)) {
    return res.status(400).json({
      success: false,
      message: "A valid wallet address is required",
    });
  }

  const nonce = randomUUID();

  const message = `CryptoShield wallet connection\n\nNonce: ${nonce}`;

  return res.json({
    success: true,
    address,
    message,
  });
});

// Verify a wallet signature
router.post("/verify", (req, res) => {
  const { address, message, signature } = req.body;

  if (!address || !message || !signature) {
    return res.status(400).json({
      success: false,
      message: "Address, message, and signature are required",
    });
  }

  if (!ethers.isAddress(address)) {
    return res.status(400).json({
      success: false,
      message: "Invalid wallet address",
    });
  }

  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);

    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({
        success: false,
        message: "Signature does not match wallet address",
      });
    }

    return res.json({
      success: true,
      message: "Wallet verified successfully",
      address: recoveredAddress,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Invalid wallet signature",
    });
  }
});

export default router;