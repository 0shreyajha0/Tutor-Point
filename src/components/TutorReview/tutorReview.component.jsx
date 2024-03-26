import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TutorReviewCard } from "../TutorReviewCard";
import { FaStar } from "react-icons/fa6";

export const TutorReview = () => {
  const tutorReviews = [
    {
      name: "John Doe",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      subject: "Mathematics",
      review: "Great tutor, helped me a lot!",
      rating: 4.5,
      gender: "male",
    },
    {
      name: "Jane Smithsons",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      subject: "Physics",
      review: "Excellent explanations!",
      rating: 5,
      gender: "male",
    },
    {
      name: "Alice Johns",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      subject: "English",
      review: "Very helpful and patient.",
      rating: 4,
      gender: "female",
    },
    {
      name: "Bob Brown",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      subject: "History",
      review: "Made history fun to learn!",
      rating: 4.5,
      gender: "male",
    },
    {
      name: "Eva Green",
      image:
        "https://c.superprof.com/i/m/11671691/600/20220805175604/11671691.webp",
      subject: "Chemistry",
      review: "Clear and concise teaching.",
      rating: 3.5,
      gender: "female",
    },
  ];

  return (
    <Box sx={{ display: "flex", overflowX: "auto", alignItems: "center" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          The Perfect Match
        </Typography>
        <Stack direction="row" spacing={1}>
          <FaStar style={{ color: "gold" }} />
          <FaStar style={{ color: "gold" }} />
          <FaStar style={{ color: "gold" }} />
          <FaStar style={{ color: "gold" }} />
          <FaStar style={{ color: "gold" }} />
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          More than one million students gave a<br />
          <b>5 star review to their tutor</b>
        </Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        {tutorReviews.map((tutor, index) => (
          <TutorReviewCard key={index} tutor={tutor} />
        ))}
      </Stack>
    </Box>
  );
};
