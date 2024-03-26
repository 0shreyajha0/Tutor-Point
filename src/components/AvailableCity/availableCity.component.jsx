import React from "react";
import { Box, Typography } from "@mui/material";
import { VerticalNavBar } from "../VerticalNavBar";

export const LearnContent = () => {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Indianapolis",
    "Columbus",
    "Fort Worth",
    "Charlotte",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Detroit",
    "Nashville",
    "Portland",
    "Memphis",
  ];
  const availableSubjects = [];
  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: "bold", paddingTop: 30 }}>
        Learn,
        <br /> Explore Your City
      </Typography>
      <Box sx={{ bgcolor: "white", p: 2 }}>
        <VerticalNavBar></VerticalNavBar>
      </Box>
    </div>
  );
};
