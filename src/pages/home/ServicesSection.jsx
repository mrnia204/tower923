import { NavLink } from "react-router-dom";
import RemixIconContent from "../../components/base/RemixIconContent";
import Card from "../../components/ui/Card";
import CardContent from '../../components/ui/CardContent';
import Button from "../../components/base/Button";
import AnimatedWrapper from '../../components/animation/AnimatedWrapper';

function ServicesSection() {
  const services = [
    {
      icon: "ri-flashlight-line text-white text-2xl",
      className: "bg-blue-600",
      title: "Power Distribution",
      content: "Transmission lines and substations"
    },
    {
      icon: "ri-sun-line text-white text-2xl",
      className: "bg-blue-600",
      title: "Renewable Energy",
      content: "Solar and hybrid energy systems"
    },
    {
      icon: "ri-building-2-line text-white text-2xl",
      className: "bg-blue-600",
      title: "Civil Construction",
      content: "Infrastructure and building projects"
    },
    {
      icon: "ri-wifi-line text-white text-2xl",
      className: "bg-blue-600",
      title: "Telecommunications",
      content: "Fiber optics and networking solutions"
    }
  ]

  return(
    <Card>
      <CardContent 
        title="Our Services"
        content="Comprehensive engineering and construction solutions tailored to Papua New Guinea's unique need"
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <RemixIconContent 
              riClass={service.className}
              icon={service.icon}
              title={service.title}
              content={service.content}
            />
          </div>
        ))}
      </AnimatedWrapper>

      <div className="text-center mt-12">
        <NavLink to="/services">
          <Button className="bg-blue-600 hover:bg-blue-800 text-white">
            <i className="ri-arrow-right-line pr-1 animate-pulse"></i>
            View All Services
          </Button>
        </NavLink>
      </div>
    </Card>
  );
};

export default ServicesSection;