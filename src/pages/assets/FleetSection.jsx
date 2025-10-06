import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function FleetSection() {
  const land_curiser_1 = 'https://images.unsplash.com/photo-1623659791251-b4d0881bb9d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const land_curiser_2 = 'https://images.unsplash.com/photo-1623264025997-7f3e64bec444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const toyota_hilux = 'https://images.unsplash.com/photo-1629807390858-2d19718c41d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const toyota_mark_x = 'https://images.unsplash.com/photo-1716237923565-b5368f0cad10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const fleet = [
    {
      imgUri: land_curiser_1,
      name: "Toyota Land Cruiser",
      office: "Lae",
      description: "Heavy Duty 4WD",
      content: "Remote site access and equipment transport",
    },
     {
      imgUri: land_curiser_2,
      name: "Toyota Land Cruiser",
      office: "Mt. Hagen",
      description: "Heavy Duty 4WD",
      content: "Highland region project access",
    },
     {
      imgUri: toyota_hilux,
      name: "Toyota Hilux",
      office: "Port Moresby",
      description: "Utility Vehicle",
      content: "Urban operations and light equipment transport",
    },
     {
      imgUri: toyota_mark_x,
      name: "Toyota Mark X",
      office: "Port Moresby",
      description: "xecutive Vehicle",
      content: "Business meetings and client relations",
    },
  ]
  return (
    <Card className="bg-gray-50">
      <CardContent 
        title="Vehicle Fleet"
        content="Reliable vehicles and equipment for efficient mobilization across remote and urban locations"      
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {fleet.map((list, index) => (
          <AnimatedWrapper key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-w-4 aspect-h-3">
              <img src={list.imgUri} alt={list.name} className="w-full h-48 object-cover object-center"/>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{list.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">{list.office}</span>
              </div>
              <p className="text-gray-600 font-medium mb-2">{list.description}</p>
              <p className="text-gray-700">{list.content}</p>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default FleetSection;