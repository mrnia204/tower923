import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";


function CivilSiteSection() {
  const procurements = [
    { 
      icon: "ri-road-map-line",
      title: "Infrastructure Development",
      content: "Access roads, foundations, drainage systems, and fencing for complete site preparation."
    },
    { 
      icon: "ri-building-2-line",
      title: "Building Construction",
      content: "Control rooms and battery houses designed for operational requirements and environmental protection."
    },
    { 
      icon: "ri-hammer-line",
      title: "Structural Design",
      content: "Reinforced concrete and steel structures engineered for seismic and environmental resilience."
    },
     { 
      icon: "ri-landscape-line",
      title: "Site Management",
      content: "Erosion control, soil stabilization, and stormwater management for environmental compliance."
    },
  ];

  const results = [
    { icon: "ri-file-text-line", title: "Geotechnical Reports", desc: "Comprehensive soil and foundation analysis"},
    { icon: "ri-draft-line", title: "As-Built Drawings", desc: "Comprehensive soil and foundation analysis"},
  ];

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="6. Civil, Structural & Site Development"
        content="Complete civil and structural works to support power infrastructure. We design and construct durable structures that withstand seismic, wind, and environmental conditions." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[37vh]">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-orange-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-orange-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Documentation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
          {results.map((result, index) => (
            <div key={index} className="flex items-center">
              <i className={`${result.icon} text-3xl text-orange-600 mr-4`}></i>
              <div>
                <p className="font-semibold text-gray-900">{result.title}</p>
                <p className="text-gray-600">{result.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default CivilSiteSection;