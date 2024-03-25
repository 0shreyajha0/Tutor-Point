import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const SearchBar = () => {
  const searchCategory = (category) => {
    // Implement your logic here to handle the click on icons
    console.log("Searching for: " + category);
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: 300,
            borderRadius: "25px",
            marginBottom: 2,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "40%",
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          Search
        </Button>
      </form>
      <Box sx={{ marginTop: 2 }}>
        <div onClick={() => searchCategory("maths")}>&#128290;</div>
        <div onClick={() => searchCategory("singing")}>&#127926;</div>
        <div onClick={() => searchCategory("computer")}>&#128187;</div>
        <div onClick={() => searchCategory("dance")}>&#127926;</div>
        <div onClick={() => searchCategory("spanish")}>&#127472;</div>
        <div onClick={() => searchCategory("chemistry")}>&#128218;</div>
      </Box>
      <Box sx={{ marginTop: 1 }}>
        Maths Singing Computer Dance Spanish Chemistry
      </Box>
    </Box>
  );
};
