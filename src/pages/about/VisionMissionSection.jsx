import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";

function VisionMissionSection() {
  return(
    <Card>
      <AnimatedWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-green-50 rounded-lg shadow hover:shadow-xl p-8 transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <i className="ri-eye-line text-2xl text-blue-600"></i>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
          <p className="text-base md:text-lg leading-relaxed">
            To build long-term partnerships with clients through consistent, 
            high-quality project delivery, while embracing technology, safety, and sustainable development.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg shadow hover:shadow-xl p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <i className="ri-focus-2-line text-2xl text-blue-600"></i>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
          <p className="text-base md:text-lg leading-relaxed">
           To provide value-driven engineering and construction services 
           that enhance communities and support national development across Papua New Guinea.
          </p>
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default VisionMissionSection;