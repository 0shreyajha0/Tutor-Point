import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const TutorProfileCard = ({ tutor }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <Avatar
        src={tutor.image}
        alt={tutor.name}
        sx={{ width: 200, height: 200, margin: "auto" }}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
          {tutor.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {tutor.location}
        </Typography>
        <IconButton
          onClick={handleLikeClick}
          sx={{
            color: liked ? "red" : "inherit",
            margin: "auto",
            display: "block",
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <StarIcon sx={{ color: "yellow" }} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: 1 }}
          >
            {tutor.reviews} Reviews
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 1 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "lightblue",
              margin: "auto",
            }}
          >
            <Typography variant="body2" sx={{ lineHeight: "40px" }}>
              Ambassador
            </Typography>
          </div>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginTop: 1 }}
        >
          Subjects: {tutor.subjects.join(", ")}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginTop: 1 }}
        >
          Rate: {tutor.rate}/hr
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TutorProfileCard;
