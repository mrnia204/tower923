import CoverageSecton from "./CoverageSection";
import FleetSection from "./FleetSection";
import HeroSection from "./HeroSection";
import OperationBasesSection from "./OperationsBasesSection";
import OperationCapabilitySection from "./OperatonCapabilitySection";


function Assets() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <OperationBasesSection />
      <FleetSection />
      <OperationCapabilitySection />
      <CoverageSecton />
    </div>
  );
};

export default Assets;