import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function SuppliersSection () {
  const imageUri = 'https://images.unsplash.com/photo-1604608619736-53e7be31f8d4?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const Supplier = [
    {
      company: "Preformed Line Products",
      content: "Power line hardware and accessories",
      country: "Australia",
      imgUri: imageUri,
    },
     {
      company: "Interlec Australia",
      content: "Electrical infrastructure solutions",
      location: "Australia",
      imgUri: imageUri,
    },
    {
      company: "ABB Australia",
      content: "Power and automation technologies",
      country: "Australia",
      imgUri: imageUri,
    },
    {
      company: "Sierra Support Services",
      content: "Technical support and maintenance",
      country: "Australia",
      imgUri: imageUri,
    },
    {
      company: "Celtic Power Australia",
      content: "Power transmission equipment",
      country: "Australia",
      imgUri: imageUri,
    },
    {
      company: "Hexeis Australia",
      content: "Electrical components and systems",
      country: "Australia",
      imgUri: imageUri,
    },
    {
      company: "Transnet Australia",
      content: "Transmission network solutions",
      country: "Australia",
      imgUri: imageUri,
    },
  ]
  return (
    <Card className="bg-gray-50">
      <CardContent 
        title="Suppliers & Partners"
        content="Trusted Australian suppliers provinding world-class equipment and solutions"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Supplier.map((list, index) => (
          <AnimatedWrapper key={index} animation="fade-right" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg mb-4">
              <img src={list.imgUri} alt={list.company} className="max-h-16 max-w-full object-contain"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{list.company}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <i className="ri-map-pin-line text-gray-600 text-xl"></i>
              <span className="ml-2">{list.country}</span>
            </div>
            <p className="text-sm text-gray-600">{list.content}</p>
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default SuppliersSection;