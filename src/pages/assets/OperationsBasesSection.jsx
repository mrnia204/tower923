import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function OperationBasesSection() {
  const bases = [
    {
      location: "Mt. Hagen",
      office: "Head Office",
      province: "Western Highlands Province",
      operation: "Primary operational base and headquarters",
      street: "Tarangau, Sect 42 Lot 63",
      icon: "ri-building-line",
      className: "bg-blue-100 text-blue-800",
    },
    {
      location: "Lae",
      office: "Reginal Office",
      province: "Morobe Province",
      operation: "Strategic location for coastal and highland projects",
      street: "Industrial area",
      icon: "ri-map-pin-line",
      className: "bg-green-100 text-green-800",
    },
     {
      location: "Port Moresby",
      office: "Reginal Office",
      province: "National Capital District",
      operation: "Government liaison and major project coordination",
      street: "Central business district",
      icon: "ri-government-line",
       className: "bg-green-100 text-green-800",
    }
  ]
  return (
    <Card>
      <CardContent 
        title="Operational Bases"
        content="Strategically located offices across PNG for comprehensive project coverage"      
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bases.map((list, index) => (
          <AnimatedWrapper key={index} animation="fade-up" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <i className={`${list.icon} text-2xl text-blue-600`}></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{list.location}</h3>
                <span className={`${list.className} text-sm font-medium px-2 rounded-full `}>{list.office}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{list.province}</p>
            <p className="text-gray-700 mb-3">{list.operation}</p>
            <div className="flex items-center text-sm text-gray-500">
              <i className="ri-map-pin mr-1"></i>
              <span>{list.street}</span>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default OperationBasesSection;