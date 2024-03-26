import React from "react";
import { Box, Typography } from "@mui/material";
import { VerticalNavBar } from "../VerticalNavBar";

export const AvailableCity = () => {
  const arr = [
    {
      city: "New York",
      subjects: ["French", "Mathematics", "Chemistry"],
    },
    {
      city: "Los Angeles",
      subjects: ["French", "Spanish", "Mathematics"],
    },
    {
      city: "Chicago",
      subjects: ["French", "Spanish", "Mathematics"],
    },
    {
      city: "Houston",
      subjects: ["Spanish", "Mathematics", "Computer programming"],
    },
    {
      city: "Philadelphia",
      subjects: ["French", "Spanish", "ESL"],
    },
    {
      city: "San Antonio",
      subjects: ["Spanish", "Algebra", "Mathematics"],
    },
    {
      city: "San Diego",
      subjects: ["Mathematics", "Spanish", "Singing"],
    },
    {
      city: "Dallas",
      subjects: ["Spanish", "French", "ESL"],
    },
    {
      city: "San Jose",
      subjects: ["Spanish", "Singing", "Mathematics"],
    },
    {
      city: "Seattle",
      subjects: ["French", "Mathematics", "Spanish"],
    },
    {
      city: "Washington",
      subjects: ["Singing", "Spanish", "Mathematics"],
    },
    {
      city: "San Francisco",
      subjects: ["French", "Mathematics", "Physics"],
    },
    {
      city: "Miami",
      subjects: ["Spanish", "Mathematics", "English"],
    },
    {
      city: "Phoenix",
      subjects: ["Mathematics", "Piano", "Singing"],
    },
    {
      city: "Denver",
      subjects: ["Mathematics", "Singing", "Spanish"],
    },
    {
      city: "Detroit",
      subjects: ["Mathematics", "Singing", "Spanish"],
    },
    {
      city: "Austin",
      subjects: ["Singing", "Mathematics", "Spanish"],
    },
    {
      city: "Atlanta",
      subjects: ["Mathematics", "Spanish", "Physics"],
    },
    {
      city: "Boston",
      subjects: ["Piano", "Mathematics", "ESL"],
    },
    {
      city: "Online",
      subjects: ["Computer programming", "Mathematics", "Spanish"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "white", p: 2 }}>
      <VerticalNavBar></VerticalNavBar>
    </Box>
  );
};
