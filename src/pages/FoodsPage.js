// src/pages/FoodsPage.js
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

export default function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchJson("/foods");
        setFoods(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load foods.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <Typography variant="h4" fontWeight={600} mb={3}>
        🌽 Foods
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
                <TableCell>Food</TableCell>
                <TableCell>Quantity / Day</TableCell>
                <TableCell>Animal</TableCell>
                <TableCell>Farmer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {foods.map((f, index) => (
                <TableRow key={index}>
                  <TableCell>{f.foodName || f.FoodName}</TableCell>
                  <TableCell>{f.quantityPerDay || f.QuantityPerDay}</TableCell>
                  <TableCell>{f.animalName || f.AnimalName}</TableCell>
                  <TableCell>{f.farmerName || f.FarmerName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
