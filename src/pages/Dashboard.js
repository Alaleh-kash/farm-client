// src/pages/Dashboard.js
import React from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useNavigate } from "react-router-dom";

function DashboardCard({ icon, title, subtitle, onClick }) {
  return (
    <Card
      sx={{
        minWidth: 250,
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="h4" align="center" mb={1}>
            {icon}
          </Typography>
          <Typography variant="h6" align="center" fontWeight={600}>
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              mt={0.5}
            >
              {subtitle}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        fontWeight={700}
        sx={{ mb: 4 }}
      >
        🐄 Farm Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <DashboardCard
            icon={<PetsIcon fontSize="large" />}
            title="Farm Animals"
            subtitle="See animals and their farmers"
            onClick={() => navigate("/animals")}
          />
        </Grid>
        <Grid item>
          <DashboardCard
            icon={<RestaurantIcon fontSize="large" />}
            title="Foods"
            subtitle="Food per day by animal"
            onClick={() => navigate("/foods")}
          />
        </Grid>
        <Grid item>
          <DashboardCard
            icon={<WbSunnyIcon fontSize="large" />}
            title="Weather"
            subtitle="Current farm weather"
            onClick={() => navigate("/weather")}
          />
        </Grid>
      </Grid>
    </>
  );
}
