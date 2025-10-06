import BenefitsSection from "./BenefitsSection";
import CallInSection from "./CallInSection";
import ConsultingSection from "./ConsultingSection";
import DeliverySection from "./DeliverySection";
import HeroSection from "./HeroSection";
import SuppliersSection from "./SuppliersSection";


function Partners() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <DeliverySection /> 
      <ConsultingSection />
      <SuppliersSection />
      <BenefitsSection />
      <CallInSection />
    </div>
  );
};

export default Partners;