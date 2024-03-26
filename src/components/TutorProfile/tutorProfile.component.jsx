import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TutorProfileCard } from "../TutorProfileCard";
import { FaStar } from "react-icons/fa";

export const TutorProfile = () => {
  const tutorReviews = [
    {
      name: "John Doe",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "New York",
      subject: "Mathematics",
      review: "Great tutor, helped me a lot!",
      rating: 4.5,
      noOfReviews: 20,
      rate: "$30",
    },
    {
      name: "Jane Smith",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "Los Angeles",
      subject: "Physics",
      review: "Excellent explanations!",
      rating: 5,
      noOfReviews: 15,
      rate: "$35",
    },
    {
      name: "Alice Johnson",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "Chicago",
      subject: "English Literature",
      review: "Very knowledgeable and patient.",
      rating: 4,
      noOfReviews: 25,
      rate: "$25",
    },
    {
      name: "Bob Brown",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "Houston",
      subject: "History",
      review: "Made history fun to learn!",
      rating: 4.5,
      noOfReviews: 18,
      rate: "$30",
    },
    {
      name: "Eva Green",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "San Francisco",
      subject: "Chemistry",
      review: "Clear and concise teaching.",
      rating: 3.5,
      noOfReviews: 22,
      rate: "$40",
    },
    {
      name: "Michael Clark",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      location: "Miami",
      subject: "Biology",
      review: "Extremely knowledgeable, highly recommend!",
      rating: 4.8,
      noOfReviews: 30,
      rate: "$45",
    },
  ];

  return (
    <Box sx={{ width: "100%", marginY: 4 }}>
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
      <Box sx={{ display: "flex", overflowX: "auto", alignItems: "center" }}>
        <Stack direction="row" spacing={2}>
          {tutorReviews.map((tutor, index) => (
            <TutorProfileCard key={index} tutor={tutor} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
