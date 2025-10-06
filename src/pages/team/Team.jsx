import CallInSection from "./CallInSection";
import HeroSection from "./HeroSection";
import LeadershipSection from "./LeadershipSection";
import NumberSection from "./NumberSection";
import WorkforceSection from "./WorkforceSection";


function Team() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <LeadershipSection />
      <WorkforceSection />
      <NumberSection />
      <CallInSection />
    </div>
  );
};

export default Team;