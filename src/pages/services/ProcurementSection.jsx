import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function ProcurementSection() {
  const procurements = [
    { 
      icon: "ri-tools-line",
      title: "Equipment & Labour Hire",
      content: "Professional equipment rental and skilled labour hire services.."
    },
    { 
      icon: "ri-truck-line",
      title: "Mobilization & Demobilization Services",
      content: "Efficient project mobilization and demobilization across PNG."
    },
    { 
      icon: "ri-shopping-cart-line",
      title: "Local & International Procurement",
      content: "Comprehensive procurement services for project materials and equipment."
    },
  ];

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Procurement & Support Services"
        content="Comprehensive support services to ensure project sucess from start to finish" 
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {procurements.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-green-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default ProcurementSection;