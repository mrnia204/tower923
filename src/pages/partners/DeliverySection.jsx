import Card from '../../components/ui/Card';

import AnimatedWrapper from '../../components/animation/AnimatedWrapper';

function DeliverySection () {
  return(
    <Card>
       <AnimatedWrapper className="max-w-4xl mx-auto text-center bg-blue-50  rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Strengthening Project Delivery</h2>
        <p className="text-base md:text-lg text-gray-700">
          These partnerships strengthen our capacity to deliver world-class projects across PNG, ensuring we have 
          access to the latest technologies, expertise, and quality materials needed for successful project completion.
        </p>
      </AnimatedWrapper>

    </Card>
  );
};

export default DeliverySection;