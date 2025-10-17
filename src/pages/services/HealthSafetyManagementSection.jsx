import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function HealthSafetyManagementSection() {
  const procurements = [
    { 
      icon: "ri-shield-check-line",
      title: "Safety Procedures",
      content: "Job Hazard Analyses (JHAs), Permit to Work systems, Lock-Out/Tag-Out (LOTO), and confined space protocols."
    },
    { 
      icon: "ri-leaf-line",
      title: "Environmental Safeguards",
      content: "Environmental and Social Management Plans (ESMPs), waste segregation programs, and biodiversity protection strategies."
    },
    { 
      icon: "ri-team-line",
      title: "Community Inclusion",
      content: "Employment opportunities, local leader engagement, and gender-sensitive workplace policies for sustainable development."
    },
  ];

  const targets = [
    { number: "zero", desc: "Harm Target"},
    { number: "100%",  desc: "Compliance"},
    { number: "Full", desc: "Sustainability"},
  ];

  return(
    <Card>
      <CardContent 
        title="7. Health, Safety, Environment & Social (HSES) Management"
        content="Safety, environmental responsibility, and community engagement are the cornerstones of our operations. We aim for zero harm, full compliance, and sustainable project delivery." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-red-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-red-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {targets.map((target) => (
            <div key={target.desc} className="text-center">
             <div>
                <div className="text-3xl font-bold text-red-600 mb-2">{target.number} </div>
                <p className="text-gray-700">{target.desc}</p>
              </div> 
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default HealthSafetyManagementSection;