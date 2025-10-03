import CallInSection from "./CallInSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import SubHeroSection from "./SubHeroSection";
import WhoweareSection from "./WhoweareSection";

function Home() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <SubHeroSection />
      <WhoweareSection />
      <ServicesSection />
      <ProjectsSection />
      <CallInSection />
    </div>
  );
};

export default Home;