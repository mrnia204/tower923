import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import RemixIconContent from '../../components/base/RemixIconContent';

function OperationCapabilitySection () {
  const items = [
    {
      title: "Remote Access",
      content: "Capacity for transporting tools and equipment to project locations",
      icon: "ri-car-line text-blue-600",
    },
    {
      title: "Equipment Transport",
      content: "Capacity for transporting tools and equipment to project locations",
      icon: "ri-truck-line text-blue-600",
    },
    {
      title: "Logistics Network",
      content: "Efficient logistics coordination across multiple operational bases",
      icon: "ri-route-line text-blue-600",
    },
    {
      title: "Rapid Mobilization",
      content: "Quick response capability for urgent project requirements",
      icon: "ri-time-line text-blue-600",
    },
  ]
  return (
    <Card>
      <CardContent 
        title="Operational Capabilities"
        content="Our assets enable comprehensive project delivery across PNG's diverse terrain"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <AnimatedWrapper key={index} className="text-center">
            <RemixIconContent 
              title={item.title}
              content={item.content}
              icon={item.icon}
              riClass="bg-blue-100"
            />
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default OperationCapabilitySection;