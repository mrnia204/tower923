import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function QualityAssuranceSection() {
  const procurements = [
    { 
      icon: "ri-clipboard-line",
      title: "Inspection & Test Plans",
      content: "ITPs ensuring all materials and works meet required standards and specifications."
    },
    { 
      icon: "ri-error-warning-line",
      title: "Non-Conformance Tracking",
      content: "Corrective action systems driving continual improvement and quality enhancement."
    },
    { 
      icon: "ri-search-eye-line",
      title: "Internal & External Audits",
      content: "Comprehensive auditing to guarantee transparency and regulatory compliance."
    },
     { 
      icon: "ri-award-line",
      title: "Performance Excellence",
      content: "Consistent achievement of quality benchmarks and client satisfaction targets."
    },
  ];

  const targets = [
    { number: "Over 90%", title: "Client Satisfaction", desc: "Consistently exceeding client expectations"},
     { number: "Less than 1%", title: "Rework Costs", desc: "Minimized through quality processes"},
   
  ];

  return(
    <Card className="">
      <CardContent 
        title="9. Quality Assurance & Compliance"
        content="Quality is at the core of every Tower 923 project. We implement comprehensive quality systems to ensure transparency and alignment with client and donor requirements." 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-cyan-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
       <AnimatedWrapper className='mt-12 bg-cyan-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Benchmarks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targets.map((target) => (
            <div key={target.title} className="text-center">
                <h3 className="text-3xl font-bold text-cyan-600 mb-2">{target.number}</h3>
                <p className="text-gray-900 font-bold">{target.title}</p>
                <p className="text-gray-700">{target.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default QualityAssuranceSection;