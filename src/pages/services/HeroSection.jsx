import HeroHeader from "../../components/ui/HeroHeader";

function HeroSection() {
  const bgHeroImg = 'https://images.unsplash.com/photo-1734280054706-06ef5a398fe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <HeroHeader 
      title="Services Catalogue"
      content="Papua New Guinea's leading engineering and infrastructure company delivering advanced energy and construction solutions across Port Moresby, Lae, Kimbe, Mt Hagen, and Goroka"
      bgHeroImg={bgHeroImg}
    />
  );
};

export default HeroSection;