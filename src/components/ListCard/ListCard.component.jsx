import React from "react";
import { Box, Link } from "@mui/material";

export const ListCard = ({ list, forCity = false }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
        p: 4,
        gap: forCity ? "3px" : "18px",
        width: "280px",
        borderRadius: 6,
      }}
    >
      {list.map((item, index) => (
        <Link
          key={index}
          variant="body1"
          href={`/p/${item.href}`}
          style={{
            cursor: "pointer",
            fontWeight: 600,
            color: "black",
            fontSize: "14px",
            ...(item.city
              ? { fontSize: "20px", marginBottom: 2, marginTop: index ? 12 : 0 }
              : {}),
          }}
          underline="hover"
        >
          {item.name}
        </Link>
      ))}
    </Box>
  );
};
