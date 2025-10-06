import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

function EngineeringConstructionSection() {

  const services = [
    { 
      icon: "ri-building-line",
      title: "Civil & Building Construction",
      content: "Complete civil engineering and building construction services for infrastructure projects."
    },
    { 
      icon: "ri-flashlight-line",
      title: "Power Transmission & Distribution",
      content: "Design and construction of power transmission lines and distribution networks."
    },
    { 
      icon: "ri-settings-3-line",
      title: "Substations Design & Construction",
      content: "Comprehensive substation design, construction, and commissioning services."
    },
    { 
      icon: "ri-home-line",
      title: "Rural Electrification Projects",
      content: "Bringing reliable electricity to remote and rural communities across PNG."
    },
    { 
      icon: "ri-sun-line",
      title: "Renewable Energy Solutionss",
      content: "Solar, hybrid systems, and solar water supply solutions for sustainable energy."
    },
    { 
      icon: "ri-wifi-line",
      title: "Telecommunication & Networking",
      content: "Fiber optics, ADSS, and POGW installation and maintenance services."
    },
    
  ]

  return(
    <Card>
      <CardContent 
        title="Engineering & Construction Services"
        content="Delivering worl-class engineering solutions with local expertise and international standards"      
      /> 
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-blue-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default EngineeringConstructionSection;