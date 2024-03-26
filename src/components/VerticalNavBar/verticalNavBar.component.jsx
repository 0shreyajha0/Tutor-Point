import React from "react";
import { Box } from "@mui/material";

export const VerticalNavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "20%",
        height: "425px",
        backgroundColor: "#E9DCDC",
        borderRadius: "20px",
        margin: "5px",
      }}
    ></Box>
  );
};
