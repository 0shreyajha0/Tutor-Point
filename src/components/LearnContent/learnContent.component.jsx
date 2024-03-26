import React from "react";
import { Box, Typography } from "@mui/material";
import { Route } from "react-router-dom";

export const LearnContent = () => {
  const FirstDiv = [
    {
      name: "Statistics",
      href: "https://github.com/0shreyajha0/Stats-Dashboard",
    },
    { name: "French", href: "//example.com/french" },
    { name: "Dance", href: "//example.com/dance" },
    { name: "AutoCAD", href: "//example.com/autocad" },
    { name: "Accounting", href: "//example.com/accounting" },
    { name: "Biology", href: "//example.com/biology" },
    { name: "Microsoft Excel", href: "//example.com/excel" },
    { name: "Chess", href: "//example.com/chess" },
    { name: "Drawing", href: "//example.com/drawing" },
  ];
  const SecondDiv = [
    { name: "Acting", href: "//example.com/acting" },
    { name: "Music ", href: "//example.com/music-production" },
    { name: "American sign ", href: "//example.com/asl" },
    { name: "Driving", href: "//example.com/driving" },
    { name: "Violin", href: "//example.com/violin" },
    { name: "Calculus", href: "//example.com/calculus" },
    { name: "Python", href: "//example.com/python" },
    { name: "Economics", href: "//example.com/economics" },
    { name: "Medicine", href: "//example.com/medicine" },
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
  ];

  const changePage = (href) => {
    <Route path="href" />;
  };

  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: "bold", paddingTop: 30 }}>
        Learn Whatever You Want
      </Typography>
      <Box sx={{ bgcolor: "white", p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "20%",
              height: "425px",
              backgroundColor: "#E9DCDC",
              borderRadius: "20px",
              margin: "5px",
            }}
          >
            <br />
            {FirstDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer", marginTop: 2 }}
                onClick={() => {
                  changePage(item.href);
                }}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "425px",
              backgroundColor: "#E9DCDC",
              borderRadius: "20px",
              margin: "5px",
            }}
          >
            <br />
            {SecondDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer", marginTop: 2 }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "425px",
              backgroundColor: "#E9DCDC",
              borderRadius: "20px",
              margin: "5px",
            }}
          >
            <br />
            {ThirdDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer", marginTop: 2 }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: "20%",
              height: "425px",
              backgroundColor: "#E9DCDC",
              borderRadius: "20px",
              margin: "5px",
            }}
          >
            <br />
            {FourthDiv.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer", marginTop: 2 }}
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
