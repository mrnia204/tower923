import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";


function TransmissionDistributionSection() {
  const procurements = [
    { 
      icon: "ri-flashlight-line",
      title: "Transmission Lines",
      content: "11 to 66 kilovolt transmission lines with pole spotting, conductor stringing, grounding and lightning protection systems."
    },
    { 
      icon: "ri-building-line",
      title: "Substation Construction",
      content: "Up to 132/66 kilovolt substations featuring transformers with capacities between 25 and 60 MVA."
    },
    { 
      icon: "ri-shield-check-line",
      title: "Protection Systems",
      content: "Relay configurations including overcurrent, earth fault, restricted earth fault, and differential protection with SCADA integration."
    },
    
  ];

  const results = [
    { icon: "ri-line-chart-line", title: "Improved Grid Stability", desc: "Enhanced network reliability and performance"},
    { icon: "ri-tools-line", title: "Lower Maintenance Costs", desc: "Reduced operational expenses over system lifecycle"},
    { icon: "ri-check-double-line", title: "Enhanced Reliability", desc: "Consistent electricity supply nationwide"},
  ];

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="4. Transmission, Distribution & Substation Engineering"
        content="Building critical infrastructure that powers communities and industries across PNG. We design and construct transmission lines and substations with comprehensive testing and commissioning to ensure quality and reliability." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[37vh]">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-purple-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-purple-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">System Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {results.map((result) => (
            <div key={result.desc}>
              <i className={`${result.icon} text-3xl text-purple-600 mb-2`}></i>
              <p className="font-semibold text-gray-900">{result.title}</p>
              <p className="text-gray-600">{result.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default TransmissionDistributionSection;