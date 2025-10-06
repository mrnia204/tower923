import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

function LeadershipSection() {
  const imgUri = 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const leadershipteam = [
    {
      name: "Douglas Ekya Siwi",
      position: "Director & Project Manager",
      qualification: "M.Eng. Electrical Engineering",
      imgUri: imgUri,
    },
      {
      name: "Joshua Yari",
      position: "Project Enginee",
      qualification: "Electrical Engineering",
      imgUri: imgUri,
    },
    {
      name: "Benjamin William",
      position: "Power Engineer",
      qualification: "Power Systems Engineering",
      imgUri: imgUri,
    },  
    {
      name: "Samson Kapia",
      position: "Transmission Line Engineer",
      qualification: "Transmission Engineering",
      imgUri: imgUri,
    },  
    {
      name: "Joliken Isafa",
      position: "Construction Manager",
      qualification: "Construction Management",
      imgUri: imgUri,
    },  
    {
      name: "Robert Simon",
      position: "Accounts Manager",
      qualification: "Financial Management",
      imgUri: imgUri,
    }
  ]
  return(
    <Card>
      <CardContent 
        title="LeaderShip Team"
        content="Our experienced team brings decades of experiences n electrical engineering, and project management"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadershipteam.map((list, index) => (
          <AnimatedWrapper key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-w-3 aspect-h-4">
              <img src={list.imgUri} alt={list.name} className='w-full object-cover object-top h-60'/>
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