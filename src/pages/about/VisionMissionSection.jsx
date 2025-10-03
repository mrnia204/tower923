import Card from "../../components/ui/Card";

function VisionMissionSection() {
  return(
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg text-white p-8">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
            <i className="ri-eye-line text-2xl text-yellow-300"></i>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-base md:text-lg leading-relaxed">
            To build long-term partnerships with clients through consistent, 
            high-quality project delivery, while embracing technology, safety, and sustainable development.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-800 rounded-lg text-white p-8">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
            <i className="ri-focus-2-line text-2xl text-red-500"></i>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-base md:text-lg leading-relaxed">
           To provide value-driven engineering and construction services 
           that enhance communities and support national development across Papua New Guinea.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default VisionMissionSection;