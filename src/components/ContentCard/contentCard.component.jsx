import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export const ContentCard = () => {
  const handleItemClick = (href) => {
    window.location.href = href;
  };
  return (
    <Card sx={{ Width: 800, height: 600, margin: 30, borderRadius: "25px" }}>
      <CardMedia
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="https://c.superprof.com/style/images/home/v4/become-teacher.webp"
          alt="placeholder"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 30,
            backgroundColor: "#F0C8AA",
            color: "white",
            padding: 2,
            height: 230,
            width: 350,
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            You can become <br />a great tutor too!
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "black", margin: 1 }}
          >
            Share your Knowledge, live off your Passion and become your own boss
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", margin: 2 }}
            // onClick={handleItemClick(href)}}
          >
            Find Out More
          </Button>
        </Box>
      </CardMedia>
    </Card>
  );
};
