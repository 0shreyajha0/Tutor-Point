import React, { useState, useEffect } from "react";
import { Modal, IconButton, Typography, Box, AppBar } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { Login } from "../Login";
import { SearchBar } from "../SearchBar";
import { TbMathSymbols } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { IoIosMusicalNotes } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { GiMaterialsScience } from "react-icons/gi";
import { display } from "@mui/system";

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
      position="sticky"
      sx={{
        background: "linear-gradient(to bottom, #FFFFFF, #FF7F8F)",
        height: hideHeader ? "0" : "45vh",
        transition: "height 0.3s",
        borderRadius: "0,0, 50%, 50%",
      }}
    >
      <Box
        display={!hideHeader ? "flex" : "none"}
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Box display="flex" alignItems="center">
          <div style={{ marginRight: "20px", cursor: "pointer" }}>
            <img src="logo.png" alt="Your Logo" />
          </div>
          <div style={(display = "flex")}>
            <div
              style={{ cursor: "pointer", color: "black" }}
              onClick={handleOpenModal}
            >
              Log in
            </div>
            <Modal open={openModal} onClose={handleCloseModal}>
              <div>
                <Login />
              </div>
            </Modal>
            <IconButton>
              <HelpOutline />
            </IconButton>
            <div style={{ cursor: "pointer", color: "black" }}>
              Tutoring Jobs
            </div>
          </div>
        </Box>
      </Box>

      <Box
        display={!hideHeader ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        px={2}
        my={2}
      >
        <Typography variant="h4" fontWeight="bold" color="black">
          Tutor Point
        </Typography>
      </Box>
      <Box
        display={!hideHeader ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        <Box bgcolor="white" borderRadius="30%" p={1} width="50%">
          <Box height="90%" width="90%" bgcolor="pink" borderRadius="80%">
            <SearchBar />
          </Box>
        </Box>
      </Box>

      <Box
        display={!hideHeader ? "flex" : "none"}
        justifyContent="space-between"
        px={2}
        mt={2}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <TbMathSymbols />
            <Typography>Maths</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <SlChemistry />
            <Typography>Chemistry</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <IoIosMusicalNotes />
            <Typography sx={{ color: "black" }}>Music</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "black",
            }}
          >
            <CiFlag1 />
            <Typography>Spanish</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <GiMaterialsScience />
            <Typography>Physics</Typography>
          </div>
        </div>
      </Box>
    </AppBar>
  );
};
