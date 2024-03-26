import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TutorProfileCard } from "../TutorProfileCard";
import { FaStar } from "react-icons/fa";
import { DATA } from "./TutorProfile.constants";

export const TutorProfile = () => {
  return (
    <Box sx={{ width: "100%", marginY: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingX: 2,
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          27 million evaluated private tutors
        </Typography>
        <Stack direction="row" spacing={1}>
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", overflowX: "auto", alignItems: "center", mt: 2 }}
      >
        <Stack direction="row" spacing={2} sx={{ paddingY: 4, gap: "18" }}>
          {DATA.map((tutor, index) => (
            <TutorProfileCard key={index} tutor={tutor} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
