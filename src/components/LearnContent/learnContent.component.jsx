import React from "react";
import { Box, Typography } from "@mui/material";

export const LearnContent = () => {
  const FirstDiv = [
    { name: "Statistics", href: "//example.com/statistics" },
    { name: "French", href: "//example.com/french" },
    { name: "Dance", href: "//example.com/dance" },
    { name: "AutoCAD", href: "//example.com/autocad" },
    { name: "Accounting", href: "//example.com/accounting" },
    { name: "Biology", href: "//example.com/biology" },
    { name: "Microsoft Excel", href: "//example.com/excel" },
    { name: "Chess", href: "//example.com/chess" },
    { name: "Drawing", href: "//example.com/drawing" },
    { name: "Graphic design", href: "//example.com/graphic-design" },
  ];
  const SecondDiv = [
    { name: "Acting", href: "//example.com/acting" },
    { name: "Music Production", href: "//example.com/music-production" },
    { name: "American sign language", href: "//example.com/asl" },
    { name: "Driving", href: "//example.com/driving" },
    { name: "Violin", href: "//example.com/violin" },
    { name: "Calculus", href: "//example.com/calculus" },
    { name: "Python", href: "//example.com/python" },
    { name: "Economics", href: "//example.com/economics" },
  ];
  const ThirdDiv = [
    { name: "Medicine", href: "//example.com/medicine" },
    { name: "Yoga", href: "//example.com/yoga" },
    { name: "Cryptocurrency", href: "//example.com/cryptocurrency" },
    { name: "Vocal coach", href: "//example.com/vocal-coach" },
    { name: "Swimming", href: "//example.com/swimming" },
    { name: "Reading", href: "//example.com/reading" },
    { name: "Rubik's Cube", href: "//example.com/rubiks-cube" },
    { name: "Nursing", href: "//example.com/nursing" },
    { name: "Basic computing", href: "//example.com/computing" },
    { name: "Chinese", href: "//example.com/chinese" },
  ];
  const FourthDiv = [
    { name: "Fashion Design", href: "//example.com/fashion-design" },
    { name: "Essay writing", href: "//example.com/essay-writing" },
    { name: "DJing", href: "//example.com/djing" },
    { name: "Music Reading", href: "//example.com/music-reading" },
    { name: "Japanese", href: "//example.com/japanese" },
    { name: "Russian", href: "//example.com/russian" },
    { name: "Soccer", href: "//example.com/soccer" },
    { name: "Organic chemistry", href: "//example.com/organic-chemistry" },
    { name: "Italian", href: "//example.com/italian" },
  ];

  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: "bold", paddingTop: 30 }}>
        Learn Whatever You Want
      </Typography>
      <Box sx={{ bgcolor: "white", p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "20%",
              height: "310px",
              backgroundColor: "lightgrey",
              borderRadius: "20px",
            }}
          >
            <br />
            {FirstDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "310px",
              backgroundColor: "lightgrey",
              borderRadius: "20px",
            }}
          >
            <br />
            {SecondDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "310px",
              backgroundColor: "lightgrey",
              borderRadius: "20px",
            }}
          >
            <br />
            {ThirdDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "310px",
              backgroundColor: "lightgrey",
              borderRadius: "20px",
            }}
          >
            <br />
            {FourthDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};
