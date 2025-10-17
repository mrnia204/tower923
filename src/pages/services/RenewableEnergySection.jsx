import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";


function RenewableEnergySection() {
  const procurements = [
    { 
      icon: "ri-sun-line",
      title: "Solar PV Systems",
      content: "Rooftop and ground-mounted systems using PVSyst simulation for optimized performance."
    },
    { 
      icon: "ri-battery-charge-line",
      title: "Battery Energy Storage (BESS)",
      content: "Load management, backup power, and frequency control with intelligent battery management."
    },
    { 
      icon: "ri-settings-3-line",
      title: "Hybrid Power Systems",
      content: "Solar, diesel, and battery storage under single Energy Management System."
    },
     { 
      icon: "ri-home-4-line",
      title: "PayGo & Solar Home Systems",
      content: "Distribution and maintenance of off-grid solutions for rural communities."
    },
  ];

  const results = [
    { icon: "ri-gas-station-line", title: "Significant Fuel Savings", desc: "Reduced dependency on diesel generators"},
    { icon: "ri-leaf-line", title: "Minimized Emissions", desc: "Clean energy for sustainable development"},
    { icon: "ri-flashlight-line", title: "Reliable Electricity Access", desc: "Consistent power for homes and businesses"},
  ];

  return(
    <Card className="">
      <CardContent 
        title="3. Renewable Energy Solutions (Solar PV, BESS & Hybrid Systems)"
        content="At the forefront of renewable energy deployment in Papua New Guinea, providing tailored solar, battery, and hybrid power systems for both commercial and rural communities." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[37vh]">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-yellow-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-yellow-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {results.map((result) => (
            <div key={result.desc}>
              <i className={`${result.icon} text-3xl text-yellow-600 mb-2`}></i>
              <p className="font-semibold text-gray-900">{result.title}</p>
              <p className="text-gray-600">{result.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default RenewableEnergySection;