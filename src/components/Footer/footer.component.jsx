import { Grid, Divider, Typography, Container, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaReact } from "react-icons/fa";

export const Footer = () => {
  const aboutUs = [
    { name: "Who are we?", href: "//example.com/who-we-are" },
    { name: "Our Values", href: "//example.com/our-values" },
    { name: "Terms & Conditions", href: "//example.com/terms" },
    { name: "Privacy Policy", href: "//example.com/privacy" },
    { name: "Superprof Global", href: "//example.com/global" },
    { name: "Online Lessons", href: "//example.com/online-lessons" },
    { name: "States", href: "//example.com/states" },
    { name: "Superprof Careers", href: "//example.com/careers" },
  ];

  const allSubjects = [
    { name: "Arts & Hobbies", href: "//example.com/arts-hobbies" },
    { name: "Career Development", href: "//example.com/career-development" },
    { name: "Computer Sciences", href: "//example.com/computer-sciences" },
    { name: "Languages", href: "//example.com/languages" },
    { name: "Music", href: "//example.com/music" },
    { name: "Health & well-being", href: "//example.com/health" },
    { name: "Academic tutoring", href: "//example.com/academic-tutoring" },
    { name: "Sports", href: "//example.com/sports" },
  ];

  const joinAdventure = [
    { name: "The Superprof Blog", href: "//example.com/blog" },
  ];

  const help = [
    { name: "Help Center", href: "//example.com/help-center" },
    { name: "Contact", href: "//example.com/contact" },
  ];

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: 3 }}>
      <Container
        style={{ padding: 3, display: "flex", justifyContent: "space-between" }}
      >
        {/* Render About Us section */}
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <div>
            {aboutUs.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
        </Box>

        {/* Render All Subjects section */}
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            All Subjects
          </Typography>
          <div>
            {allSubjects.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
        </Box>

        {/* Render Join Adventure section */}
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Join Adventure
          </Typography>
          <div>
            {joinAdventure.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
        </Box>

        {/* Render Help section */}
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Help
          </Typography>
          <div>
            {help.map((item, index) => (
              <Typography
                variant="body1"
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(item.href)}
              >
                {item.name}
              </Typography>
            ))}
          </div>
        </Box>
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
      <div style={{ textAlign: "center", marginBottom: 0 }}>
        <h3 style={{ marginBottom: 0 }}>Follow Us</h3>
        <br />
        <FacebookIcon
          onClick={() => window.open("https://www.facebook.com")}
          style={{ cursor: "pointer", marginRight: "30px" }}
        />
        <InstagramIcon
          onClick={() => window.open("https://www.instagram.com")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Typography variant="body2" style={{ textAlign: "center", marginTop: 2 }}>
        Made in India
        <FaReact style={{ cursor: "pointer", marginLeft: "10px" }} />
      </Typography>
    </div>
  );
};
