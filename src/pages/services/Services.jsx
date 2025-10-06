import CallInSection from "./CallInSection";
import EngineeringConstructionSection from "./EngineringConstructinSection";
import HeroSection from "./HeroSection";
import ProcurementSection from "./ProcurementSection";
import SpecialFocusSection from "./SpecialFocusSection";


function Services() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <SpecialFocusSection />
      <EngineeringConstructionSection />
      <ProcurementSection />
      <CallInSection />
    </div>
  );
};

export default Services;