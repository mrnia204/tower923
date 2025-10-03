import CallInSection from "./CallInSection";
import EthicsSection from "./EthicsSection";
import HeroSection from "./HeroSection";
import MantraSection from "./MantraSection";
import OurJourney from "./OurJourney";
import OurValues from "./OurValues";
import VisionMissionSection from "./VisionMissionSection";
import WhoweareSection from "./WhoweareSection";

function About() {
  return(
   <div className="min-h-screen">
    <HeroSection />
    <WhoweareSection />
    <MantraSection />
    <VisionMissionSection />
    <OurValues />
    <EthicsSection />
    <OurJourney />
    <CallInSection />
   </div> 
  );
};

export default About;