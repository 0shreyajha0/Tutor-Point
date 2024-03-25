import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { FaStar } from "react-icons/fa6";
export const TutorReviewCard = ({ tutor }) => {
  const { name, image, subject, review, rating, gender } = tutor;

  const cardColor = gender === "male" ? "#add8e6" : "#d8ad"; //

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        mt: 2,
        backgroundColor: cardColor,
        borderRadius: "10%",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <img
            src={image}
            alt={name}
            style={{
              borderRadius: "50%",
              width: 60,
              height: 60,
              marginRight: 2,
            }}
          />
          <div>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{subject}</Typography>
          </div>
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {review}
        </Typography>
        <div
          style={{
            width: "100%",
            height: "15px",
            borderRadius: 10,
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography variant="body1">
            Ratings : {rating} <FaStar style={{ color: "gold" }} />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorReviewCard;
