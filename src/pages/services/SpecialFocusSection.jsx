import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";


function SpecialFocusSection() {
  return (
    <Card className="bg-blue-50">
      <AnimatedWrapper className="max-w-4xl mx-auto text-center bg-white  rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Special Focus</h2>
        <div className="flex items-center justify-center mb-4">
          <i className="ri-flashlight-fill text-2xl md:text-4xl text-blue-600"></i>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-600"> 
            Engineering, Procurement and Construction of Power Lines
          </h3>
        </div>
        <p className="text-base md:text-lg text-gray-700">
          Our core expertise lies in the complete lifecycle management of power 
          line projects, from initial engineering design through procurement and final construction.
        </p>
      </AnimatedWrapper>
    </Card>
  );
};

export default SpecialFocusSection;