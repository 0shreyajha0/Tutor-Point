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
    <Card sx={{ Width: 800, height: 600, margin: 30, borderRadius: "45px" }}>
      <CardMedia
        sx={{
          Width: 800,
          height: 600,
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <img
          src="https://c.superprof.com/style/images/home/v4/become-teacher.webp"
          alt="placeholder"
          sx={{ height: "100%", width: "100%" }}
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
            borderRadius: "35px",
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
            sx={{ backgroundColor: "black", margin: 2, borderRadius: "10px" }}
            // onClick={handleItemClick(href)}}
          >
            Find Out More
          </Button>
        </Box>
      </CardMedia>
    </Card>
  );
};
