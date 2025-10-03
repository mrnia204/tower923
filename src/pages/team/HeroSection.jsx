import HeroHeader from "../../components/ui/HeroHeader";

function HeroSection() {
  const bgHeroImg = 'https://plus.unsplash.com/premium_photo-1681823100546-0541b5880f14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <HeroHeader 
      title="Our Team"
      content="Experienced professionals driving PNG's electrical infrastructure developme"
      bgHeroImg={bgHeroImg}
    />
  );
};

export default HeroSection;