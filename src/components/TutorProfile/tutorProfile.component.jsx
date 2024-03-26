import React from "react";
import { Box, Typography } from "@mui/material";
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
      rate: "$30/hr",
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
      rate: "$35/hr",
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
      rate: "$25/hr",
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
      rate: "$30/hr",
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
      rate: "$40/hr",
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
      rate: "$45/hr",
    },
  ];

  return (
    <Box sx={{ width: "80%", maxWidth: '1080px', marginX: "auto", marginY: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          27 million evaluated private tutors
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
          <FaStar style={{ color: "rgb(255, 99, 99)" }} />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        {tutorReviews.map((tutor, index) => (
          <TutorProfileCard key={index} tutor={tutor} />
        ))}
      </Box>
    </Box>
  );
};
