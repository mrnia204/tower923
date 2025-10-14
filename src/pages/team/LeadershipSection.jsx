import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

import { teams } from '../../data/images';

function LeadershipSection() {
  
  return(
    <Card>
      <CardContent 
        title="LeaderShip Team"
        content="Our experienced team brings decades of experiences n electrical engineering, and project management"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teams.map((list, index) => (
          <AnimatedWrapper key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-w-3 aspect-h-4">
              <img src={list.imgUri}  loading='lazy'  alt={list.name} className='w-full object-cover object-top h-60'/>
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{list.name}</h3>
              <p className="text-blue-600 text-base font-medium mb-2">{list.position}</p>
              <p className="text-gray-600 text-sm">{list.qualification}</p>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default LeadershipSection;