import { Grid, Divider, Typography, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaReact } from "react-icons/fa";

export const Footer = () => {
  const contentItems = [
    "Who are we?",
    "Our Values",
    "Terms & Conditions",
    "Privacy Policy",
    "Superprof Global",
    "Online Lessons",
    "States",
    "Superprof Careers",
  ];

  const allSubjects = [
    "Arts & Hobbies",
    "Career Development",
    "Computer Sciences",
    "Languages",
    "Music",
    "Health & well-being",
    "Academic tutoring",
    "Sports",
  ];
  const joinAdventure = ["The Superprof Blog"];

  const help = ["Help Center", "Contact"];
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: 3 }}>
      <Container style={{ padding: 3 }}>
        <Grid container spacing={2}>
          {["About", "All Subjects", "Join the adventure", "Help"].map(
            (item, index) => (
              <Grid item xs={3} key={index}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {item}
                </Typography>
                {(item === "All Subjects" ? allSubjects : contentItems).map(
                  (contentItem, index) => (
                    <Typography
                      variant="body1"
                      key={index}
                      component={"a"}
                      href="#"
                    >
                      {contentItem}
                    </Typography>
                  )
                )}
              </Grid>
            )
          )}
        </Grid>
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
