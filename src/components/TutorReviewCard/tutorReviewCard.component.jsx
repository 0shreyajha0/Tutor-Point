import { Box, Card, CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { FaStar } from "react-icons/fa6";

export const TutorReviewCard = ({ tutor, index }) => {
  const { name, image, subject, review, rating, gender } = tutor;

  const cardColor = gender === "male" ? "#D7F1DF" : "#FFE192"; //

  return (
    <Box sx={{ height: "360px", my: 4 }}>
      <Card
        sx={{
          width: "400px",
          height: "100%",
          mt: 2,
          backgroundColor: cardColor,
          borderRadius: "25px",
        }}
      >
        <CardContent
          sx={{ display: "flex", height: "100%", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              src={image}
              alt={name}
              sx={{
                borderRadius: "50%",
                width: 90,
                height: 90,
                marginRight: 2,
              }}
            />
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body1">{subject}</Typography>
            </div>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, flex: 1, fontSize: "20px" }}>
            {review}
          </Typography>
          <Box
            sx={{
              borderRadius: 10,
              backgroundColor: "white",
              display: "flex",
              justifySelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {subject} : {rating}{" "}
              <Box sx={{ marginLeft: "8px", marginTop: "4px" }}>
                {[...new Array(rating)].map((_, index) => (
                  <FaStar style={{ color: "gold" }} />
                ))}
              </Box>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TutorReviewCard;
