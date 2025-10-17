import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";


function SpecialFocusSection() {
  return (
    <Card className="bg-blue-50">
      <AnimatedWrapper className="max-w-4xl mx-auto text-center bg-white  rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Special Focus</h2>
        <div className="flex items-center justify-center mb-4">
        </div>
        <p className="text-base md:text-lg text-gray-700">
          We provide end-to-end expertise from feasibility and design through to construction, 
          commissioning, and long-term maintenance. Our goal is to power PNG's sustainable future 
          through reliable, safe, and innovative engineering solutions 
          that meet international standards while being suited to Papua New Guinea's challenging conditions.
        </p>
      </AnimatedWrapper>
    </Card>
  );
};

export default SpecialFocusSection;