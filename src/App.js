// src/App.js
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Dashboard from "./pages/Dashboard";
import AnimalsPage from "./pages/AnimalsPage";
import FoodsPage from "./pages/FoodsPage";
import WeatherPage from "./pages/WeatherPage";
import "./App.css";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <AgricultureIcon sx={{ fontSize: 30, color: "#4caf50" }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#222",
              fontWeight: 700,
            }}
          >
            Farm Dashboard
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Button
            component={Link}
            to="/animals"
            variant={isActive("/animals") ? "contained" : "text"}
          >
            Animals
          </Button>
          <Button
            component={Link}
            to="/foods"
            variant={isActive("/foods") ? "contained" : "text"}
          >
            Foods
          </Button>
          <Button
            component={Link}
            to="/weather"
            variant={isActive("/weather") ? "contained" : "text"}
          >
            Weather
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <Box className="App-root">
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
