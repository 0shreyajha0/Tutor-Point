import React, { useState, useEffect } from "react";
import {
  Modal,
  IconButton,
  Typography,
  Box,
  AppBar,
  Button,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { Login } from "../Login";
import { SearchBar } from "../SearchBar";
import { Logo } from "../Logo";
import { HeaderIcons } from "../HeaderIcons";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        background:
          "linear-gradient(to bottom, #FFFFFF, rgba(255,127,143,0.3))",
        minHeight: "58vh",
        transition: "height 0.3s",
        borderRadius: "0 0 50px 50px",
      }}
    >
      <Box
        display="flex"
        sx={{ justifyContent: "space-evenly", width: "100%", p: 3 }}
      >
        <Logo />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "black",
          }}
        >
          <IconButton>
            <HelpOutline />
          </IconButton>
          <Button
            sx={{ color: "black", textTransform: "capitalize" }}
            variant="text"
          >
            Tutoring Jobs
          </Button>
        </Box>

        <Button
          sx={{ color: "black", textTransform: "capitalize" }}
          onClick={handleOpenModal}
          variant="text"
        >
          LogIn
        </Button>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
        my={2}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          color="black"
          sx={{ width: "390px" }}
        >
          Find the perfect tutor
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
        marginTop="20px"
      >
        <SearchBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <HeaderIcons />
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Login />
      </Modal>
    </AppBar>
  );
};
