import AboutSection from "./AboutSection";
import Certifications from "./Certifications";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from './HeroSection'
import InterviewExperince from "./InterviewExperince";
import Portfolio from "./Portfolio";
import SkillsSection from "./SkillsSection";
import SocialMedia from "./SocialMedia";
import SystemDesign from "./SystemDesign";
const App = () => {
  return (
    <div>

      <Header />

      {/* <LandingPage/> */}
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
            <SystemDesign/>

      <Portfolio/>
      <InterviewExperince/>
      <Certifications/>
      
      <SocialMedia/>
      <ContactUs/>
      <Footer/>


    </div>
  );
};
export default App