import { Footer } from "../components/Footer";
import { TutorReview } from "../components/TutorReview";
import { Header } from "../components/Header";
import { TutorProfile } from "../components/TutorProfile";
import { LearnContent } from "../components/LearnContent";
export const Dashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <TutorProfile />
      <TutorReview />
      <LearnContent />
      <Footer />
    </div>
  );
};
