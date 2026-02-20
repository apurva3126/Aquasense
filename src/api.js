const API_BASE = "http://localhost:8000/api/v1";

export async function getCrops() {
  const res = await fetch(`${API_BASE}/crops`);
  if (!res.ok) throw new Error("Failed to fetch crops");
  return res.json();
}

export async function registerUser(payload) {
  const res = await fetch(`${API_BASE}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Registration failed");
  }

  return res.json();
}

export async function updateSoilAI(payload) {
  const res = await fetch(`${API_BASE}/sensors/update-soil-ai`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Soil update failed");
  }

  return res.json();
}