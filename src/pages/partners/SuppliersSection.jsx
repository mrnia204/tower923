import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

import { Supplier } from "../../data/images";

function SuppliersSection () {
  
  return (
    <Card className="bg-gray-50">
      <CardContent 
        title="Suppliers & Partners"
        content="Trusted Australian suppliers provinding world-class equipment and solutions"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Supplier.map((list, index) => (
          <AnimatedWrapper key={index} animation="fade-right" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-50 w-full bg-gray-50 rounded-lg mb-4">
              <img src={list.imgUri} alt={list.company}  loading='lazy' className="h-full w-full object-cover"/>
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