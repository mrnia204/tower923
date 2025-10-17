import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

function EngineeringConstructionSection() {

  const services = [
    { 
      icon: "ri-search-line",
      title: "Feasibility Studies",
      content: "Comprehensive technical, economic, and environmental evaluations with demand forecasting and financial modeling."
    },
    { 
      icon: "ri-draft-line",
      title: "Electrical Design",
      content: "Detailed engineering drawings, single-line diagrams, cable schedules, and protection coordination studies."
    },
    { 
      icon: "ri-shield-check-line",
      title: "Protection & Control Systems",
      content: "Advanced systems to safeguard grid stability, minimize downtime, and ensure quick fault isolation."
    },
    { 
      icon: "ri-map-pin-line",
      title: "Rural Electrification Surveys",
      content: "Detailed surveys and Project Formulation Documents with GPS coordinates and cost estimates."
    },
    { 
      icon: "ri-grid-line",
      title: "Grid Impact Studies",
      content: "Interconnection studies for generation and distribution systems ensuring PNG Power Limited compliance."
    },
    { 
      icon: "ri-file-text-line",
      title: "Quality Documentation",
      content: "Design Basis Reports, IFC drawings, bills of quantities, and technical specifications."
    }, 
  ];

  const keyDeliverables = [
    [
      "Design Basis Reports",
      "Feasibility and Design Reports",
      "IFC Drawings" 
    ],
    [
      "Bills of Quantities",
      "Technical Specifications",
      "Risk Registers & Quality Documentation"
    ]    
  ];

  return(
    <Card>
      <CardContent 
        title="1. Engineering, Design & Advisory Services"
        content="Our Engineering and Advisory Division serves as the foundation of all our projects, delivering technically sound, regulation-compliant, and cost-effective engineering designs that meet international standards."      
      /> 
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-blue-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
      <AnimatedWrapper className='mt-12 bg-blue-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Deliverables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyDeliverables.map((column, columnIndex) => (
            <ul key={`col-${columnIndex}`}className='space-y-2'>
              {column.map((list, index) => (
                <li key={`list-${index}`} className="flex items-center text-gray-700">
                  <i className="ri-check-line text-blue-600 mr-2"></i>
                  {list}
                </li>
              ))}
          </ul>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default EngineeringConstructionSection;