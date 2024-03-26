import { TbMathSymbols } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { IoIosMusicalNotes } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { GiMaterialsScience } from "react-icons/gi";
import { Typography, Box } from "@mui/material";

export const HeaderIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "black",
        p: "36px 50px",
        gap: 6,
        borderRadius: "54px",
        backgroundColor: "rgba(255,255,255,0.6)",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <TbMathSymbols style={{ fontSize: "20px" }} />
        <Typography variant="h6">Mathematics</Typography>
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <SlChemistry style={{ fontSize: "20px" }} />
        <Typography variant="h6">Chemistry</Typography>
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <IoIosMusicalNotes style={{ fontSize: "20px" }} />
        <Typography sx={{ color: "black" }} variant="h6">
          Music
        </Typography>
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <CiFlag1 style={{ fontSize: "20px" }} />
        <Typography variant="h6">Spanish</Typography>
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <GiMaterialsScience style={{ fontSize: "20px" }} />
        <Typography variant="h6">Physics</Typography>
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <IoIosMusicalNotes style={{ fontSize: "20px" }} />
        <Typography sx={{ color: "black" }} variant="h6">
          Music
        </Typography>
      </Box>
    </Box>
  );
};
