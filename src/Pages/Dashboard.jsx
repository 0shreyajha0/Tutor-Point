import { Footer } from "../components/Footer";
import { TutorReview } from "../components/TutorReview";
import { Header } from "../components/Header";
import { TutorProfile } from "../components/TutorProfile";
import { LearnContent } from "../components/LearnContent";
import { AvailableCity } from "../components/AvailableCity";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export const Dashboard = () => {
  return (
    <div>
      <Header />

      <TutorProfile />
      <TutorReview />
      <LearnContent />

      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate To Top
      </Fab>
      <Footer />
    </div>
  );
};

// const arr=[

//   : 'TutorProfile',
//   place arr=[ French,,
//     Mathematics,
//     Chemistry,];
// ]
