const API_BASE = "https://aquasensebackend-ru2t.onrender.com/api/v1";

export async function getCrops() {
  const res = await fetch(`${API_BASE}/crops`);
  if (!res.ok) throw new Error("Failed to fetch crops");
  return res.json();
}
export async function getdistricts() {
  const res = await fetch(`${API_BASE}/villages/districts`);
  if (!res.ok) throw new Error("Failed to fetch districts");
  return res.json();
}

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
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

export async function selectCropForDevice(payload) {
  const res = await fetch(
    `${API_BASE}/sensors/select-crop`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to select crop");
  }

  return res.json();
}