import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Counter from '../../components/base/Counter';

function ProcurementSection() {
  const procurements = [
    { 
      icon: "ri-calendar-check-line",
      title: "Engineering & Design Validation",
      content: "Detailed PEP defining scope, milestones, risk mitigation, and stakeholder engagement."
    },
    { 
      icon: "ri-tools-line",
      title: "Mobilization & Demobilization Services",
      content: "Constructability validation and value engineering for cost-effective results."
    },
    { 
      icon: "ri-global-line",
      title: "Global Procurement",
      content: "Sourcing from certified OEMs, factory acceptance tests, and logistics management."
    },
     { 
      icon: "ri-building-2-line",
      title: "Construction Management",
      content: "Execution under strict HSE protocols using Primavera and MS Project monitoring."
    },
    { 
      icon: "ri-checkbox-circle-line",
      title: "Testing & Commissioning",
      content: "Relay testing, transformer oil analysis, and end-to-end system verification."
    },
    { 
      icon: "ri-file-transfer-line",
      title: "Documentation & Handover",
      content: "Comprehensive FAT/SAT reports, safety records, and handover dossiers."
    },
  ];

  const targets = [
    { number: "0", suffix: "", prefix: "", desc: "Lost-Time Injuries"},
    { number: "95", suffix: "%+", prefix: "", desc: "On-Time Delivery"},
    { number: "2", suffix: "%", prefix: "<", desc: "Defects at Completion"},
  ];

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="2. EPC (Engineering–Procurement–Construction) Contracting"
        content="Complete EPC solutions under a single contract, taking full responsibility for engineering, procurement, and construction phases with strict HSE protocols and advanced project management." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-green-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-green-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Targets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {targets.map((target) => (
            <div key={target.desc} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <Counter 
                    targetNumber={target.number}
                    prefix={target.prefix}
                    suffix={target.suffix}
                  />
                </div>
                <p className="text-gray-700">{target.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default ProcurementSection;