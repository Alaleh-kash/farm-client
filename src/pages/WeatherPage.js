// src/pages/WeatherPage.js
import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { fetchText } from "../api";

export default function WeatherPage() {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const text = await fetchText("/weatherforecast");
        setWeather(text);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load weather.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <Typography variant="h4" fontWeight={600} mb={3}>
        ☀️ Farm Weather
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {!!error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            gap: 2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <WbSunnyIcon sx={{ fontSize: 40, color: "#ffb300" }} />
          <Typography variant="h6">{weather}</Typography>
        </Paper>
      )}
    </>
  );
}
