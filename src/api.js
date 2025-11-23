// src/api.js
export const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5258";

// Generic JSON fetcher
export async function fetchJson(path) {
  const res = await fetch(`${API_BASE}${path}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed: ${res.status}`);
  }

  return res.json();
}

// Generic TEXT fetcher
export async function fetchText(path) {
  const res = await fetch(`${API_BASE}${path}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed: ${res.status}`);
  }

  return res.text();
}
