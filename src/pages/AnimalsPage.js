// src/pages/AnimalsPage.js
import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { fetchJson } from "../api";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchJson("/animals");
        setAnimals(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load animals.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <Typography variant="h4" fontWeight={600} mb={3}>
        🐄 Farm Animals
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
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Animal</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Farmer</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {animals.map((a, index) => (
                <TableRow key={index}>
                  <TableCell>{a.animalName || a.AnimalName}</TableCell>
                  <TableCell>{a.type || a.Type}</TableCell>
                  <TableCell>{a.farmerName || a.FarmerName}</TableCell>
                  <TableCell>{a.location || a.Location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
