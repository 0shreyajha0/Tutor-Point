import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Avatar,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { styled } from "@mui/system";
import { SearchBar } from "../SearchBar";

const GradientAppBar = styled(AppBar)`
  background: linear-gradient(45deg, white, #ffb6c1);
`;

export const Header = () => {
  return (
    <GradientAppBar position="static">
      <Toolbar>
        {/* Image at top left */}
        <Avatar
          src="/your_image_path.jpg"
          alt="Logo"
          sx={{ marginRight: "auto" }}
        />

        {/* Text link directing to tutoring jobs */}
        <Typography
          variant="h6"
          component={Link}
          href="/tutoring-jobs"
          color="inherit"
          underline="none"
          sx={{ marginRight: "20px" }}
        >
          Tutoring Jobs
        </Typography>

        {/* Help icon at top right */}
        <IconButton color="inherit" sx={{ marginRight: "20px" }}>
          <HelpIcon />
        </IconButton>

        {/* Large heading in center */}
        <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
          Find the perfect tutor
        </Typography>

        {/* Text link directing to Login */}
        <Typography
          variant="h6"
          component={Link}
          href="/login"
          color="inherit"
          underline="none"
          sx={{ marginLeft: "20px" }}
        >
          Log In
        </Typography>
      </Toolbar>
      <SearchBar />
    </GradientAppBar>
  );
};

export default Header;
