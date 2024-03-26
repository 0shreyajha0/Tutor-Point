import { Box, Typography } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { TutorReviewCard } from "../TutorReviewCard";
import { TUTOR_DATA } from "./TutorReview.constant";

export const TutorReview = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ width: "35%", marginLeft: "200px" }}>
        <Box>
          <FaStar style={{ color: "gold", fontSize: "22px" }} />
          <FaStar style={{ color: "gold", fontSize: "22px" }} />
          <FaStar style={{ color: "gold", fontSize: "22px" }} />
          <FaStar style={{ color: "gold", fontSize: "22px" }} />
          <FaStar style={{ color: "gold", fontSize: "22px" }} />
        </Box>

        <Typography sx={{ marginTop: "12px" }} variant="h3">
          The Perfect Match
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          More than one million students gave a<br />
          <b>5 star review to their tutor</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "1200px",
          boxSizing: "border-box",
          gap: "32px",
          paddingBottom: "12px",
          overflowX: "scroll",
        }}
      >
        {TUTOR_DATA.map((tutor, index) => (
          <TutorReviewCard key={index} tutor={tutor} />
        ))}
      </Box>
    </Box>
  );
};
