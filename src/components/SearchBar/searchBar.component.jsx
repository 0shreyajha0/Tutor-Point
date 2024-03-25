import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <Box sx={{ textAlign: "center", margin: 4, height: 150 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant="outlined"
          placeholder="What would you like to Learn."
          sx={{
            width: 300,
            borderRadius: "2%",
            marginBottom: 2,
            marginTop: 5,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "30%",
            backgroundColor: "red",
            color: "#fff",
          }}
        >
          Search
          <CiSearch />
        </Button>
      </form>
    </Box>
  );
};
