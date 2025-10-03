import HeroHeader from "../../components/ui/HeroHeader";

function HeroSection() {
  const bgHeroImg = 'https://images.unsplash.com/photo-1734280054706-06ef5a398fe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <HeroHeader 
      title="Our Services"
      content="Comprehensive electrical engineering and construction services across Papua New Guinea"
      bgHeroImg={bgHeroImg}
    />
  );
};

export default HeroSection;