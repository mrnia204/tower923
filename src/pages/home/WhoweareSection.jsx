import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/base/Button";
import AnimatedWrapper from '../../components/animation/AnimatedWrapper';

function WhoweareSection() {
  const teamImg = "https://images.unsplash.com/photo-1641194298727-fa6e5401bf1b?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return(
    <Card className="bg-gray-50">
      <AnimatedWrapper className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Established in 2018, Tower 923 Ltd is a PNG-owned diversified contractor
             specializing in Design, Engineering, Procurement, and Construction (EPC). 
             We deliver high-quality projects in civil works, 
              power distribution, renewable energy, and telecommunications across the country.
          </p>
          <p className="text-base md:text-lg text-blue-800 font-semibold mb-6">
            "Believing in Impossibilities" – We believe nothing is impossible when 
            skilled professionals work together with the right tools and vision.
          </p>
          <NavLink to="/about-us">
            <Button className="bg-blue-600 hover:bg-blue-800 text-white">Learn More About Us</Button>
          </NavLink>
        </div>

        <div className="relative">
          <img 
            src={teamImg} 
            alt="Tower 923 Team" 
            className="rounded-lg shadow-lg object-cover w-full h-96 hover:shadow-lg"
          />
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default WhoweareSection;