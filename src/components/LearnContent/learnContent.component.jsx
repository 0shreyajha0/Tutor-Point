import { Box, Typography } from "@mui/material";
import { DATA, CITY_DATA } from "./LearnContent.constants";
import { ListCard } from "../ListCard";

export const LearnContent = () => {
  return (
    <Box sx={{ width: "70%", marginX: "auto", marginY: 4 }}>
      <Box>
        <Typography variant="h4" style={{ fontWeight: 900, paddingTop: 30 }}>
          Learn whatever you want
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "32px",
            marginTop: 4,
          }}
        >
          {DATA.map((list, index) => (
            <ListCard key={index} list={list} />
          ))}
        </Box>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography
          variant="h4"
          style={{
            fontWeight: 900,
            paddingTop: 30,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box component="span">Learn,</Box>
          <Box component="span">Explore your city</Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "32px",
            marginTop: 4,
          }}
        >
          {CITY_DATA.map((list, index) => (
            <ListCard forCity={true} key={index} list={list} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
