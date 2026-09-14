const API_URL = "https://decentralized-rectification-protocol.onrender.com";

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/api/health`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

// Get a challenge message from the backend
export async function getWalletChallenge(address: string) {
  const response = await fetch(`${API_URL}/api/wallet/challenge`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get wallet challenge");
  }

  return data;
}

// Verify the wallet signature with the backend
export async function verifyWallet(
  address: string,
  message: string,
  signature: string,
) {
  const response = await fetch(`${API_URL}/api/wallet/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
      message,
      signature,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Wallet verification failed");
  }

  return data;
}