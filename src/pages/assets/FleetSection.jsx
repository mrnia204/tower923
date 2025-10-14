import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

import { fleet } from "../../data/images";

function FleetSection() {
  
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
              <img src={list.imgUri} alt={list.name}  loading='lazy' className="w-full h-60 object-cover object-center"/>
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