import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";

export const TutorReviewCard = ({ tutor }) => {
  const { name, image, subject, review, rating, gender } = tutor;

  const cardColor = gender === "male" ? "#add8e6" : "#d8ad";

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
          <Avatar
            src={image}
            alt={name}
            sx={{
              borderRadius: "50%",
              width: 60,
              height: 60,
              marginRight: 2,
            }}
          />
          <div>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {subject}
            </Typography>
          </div>
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {review}
        </Typography>
        <Box
          sx={{
            width: "150px",
            height: "25px",
            borderRadius: 10,
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            marginRight: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <Typography variant="body2">Ratings : {rating}</Typography>
            <FaStar style={{ color: "gold" }} />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TutorReviewCard;
