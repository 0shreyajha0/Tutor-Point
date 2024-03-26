import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  IconButton,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { FOOTER_DATA } from "./footer.constants";

export const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "#000",
        color: "#fff",
        marginTop: 60,
        paddingTop: 32,
        paddingBottom: 42,
      }}
    >
      <Container
        style={{
          padding: 3,
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {FOOTER_DATA.map((item, index) => (
          <Box>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginTop: 1,
              }}
            >
              {item.list.map((childItem, index) => (
                <Link
                  variant="body1"
                  key={index}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "white",
                    fontSize: "14px",
                  }}
                  href={`/p/${childItem.href}`}
                >
                  {childItem.name}
                </Link>
              ))}
            </Box>
          </Box>
        ))}
        {/* Render About Us section */}
      </Container>
      <Divider
        style={{
          backgroundColor: "#fff",
          height: 1,
          marginY: 2,
          width: "100%",
          textAlign: "center",
        }}
      />
      <Box sx={{ textAlign: "center", marginBottom: 0 }}>
        <h3 style={{ marginBottom: 0 }}>Follow Us</h3>
        <br />
        <IconButton href="https://www.facebook.com">
          <FacebookIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton href="https://www.instagram.com">
          <InstagramIcon style={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
        Made in India with ❤️
      </Typography>
    </Box>
  );
};
