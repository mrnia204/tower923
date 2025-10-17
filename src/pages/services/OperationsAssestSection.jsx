import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Counter from '../../components/base/Counter';

function OperationAssetSection() {
  const procurements = [
    { 
      icon: "ri-calendar-check-line",
      title: "Preventive Maintenance",
      content: "Regular inspections, thermographic assessments, and condition-based monitoring for optimal performance."
    },
    { 
      icon: "ri-line-chart-line",
      title: "Predictive Maintenance",
      content: "SCADA and IoT tools to track asset health and preempt potential failures before they occur."
    },
    { 
      icon: "ri-customer-service-2-line",
      title: "24/7 Response",
      content: "Emergency restoration capability with comprehensive digital maintenance records for full traceability."
    },
  ];

  const targets = [
    { number: "98", suffix: "%", prefix: "", desc: "System Availability"},
    { number: "4", suffix: "hrs", prefix: "", desc: "Urban Response Time"},
    { number: "12", suffix: "hrs", prefix: "", desc: "Rural Response Time"},
  ];

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="8. Operations, Maintenance & Asset Management"
        content="Ongoing operations and maintenance services to ensure optimal system performance over the entire lifecycle. We maintain 24/7 response capability for emergency restoration." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-teal-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-teal-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Benchmarks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {targets.map((target) => (
            <div key={target.desc} className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
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

export default OperationAssetSection;