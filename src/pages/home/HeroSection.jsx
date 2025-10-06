import { NavLink } from "react-router-dom";
import Button from "../../components/base/Button";

function HeroSection(){

  const bgHero = 'https://images.unsplash.com/photo-1627207278573-58ecc196e08e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return(
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundColor: "#1e3a8a",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgHero})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-white w-full">
        <h1 className="text-3xl md:text-7xl font-bold mb-6">Believing in Impossibilities</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16">
          Tower 923 Ltd is a 100% nationally-owned engineering and construction company delivering innovative, 
          cost-effective, and sustainable solutions across Papua New Guinea.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink to='/services'>
            <Button className="bg-blue-600 hover:bg-blue-800 text-white">Expolore Our Services</Button>
          </NavLink>
          <NavLink to='/contact-us'>
            <Button className="border-2 border-gray-300 bg-white/10 hover:bg-white hover:text-gray-700">Contact Us Today</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;