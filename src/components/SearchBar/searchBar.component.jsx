import React from "react";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FaBookOpen } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        p: 1,
        paddingLeft: "20px",
        borderRadius: "50px",
        backgroundColor: "white",
        display: "flex",
        width: "560px",
        height: "80px",
        alignItems: "center",
        gap: 1,
        border: "9px solid #fff1f1",
      }}
      component="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <FaBookOpen style={{ color: "rgb(255, 99, 99)", fontSize: "19px" }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What would you like to learn?"
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          textTransform: "capitalize",
          borderRadius: "50px",
          backgroundColor: "rgb(255, 99, 99)",
          color: "#fff",
        }}
      >
        Search
      </Button>
    </Box>
  );
};
