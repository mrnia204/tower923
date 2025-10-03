import RemixIconContent from '../../components/base/RemixIconContent';
import Card from '../../components/ui/Card';

function SubHeroSection () {
  const subHero = [
    {
      icon: "ri-building-line text-white text-2xl",
      title: "Civil, Electrical & Renewable Energy Projects",
      content: "Comprehensive engineering solutions.",
      className: "bg-blue-600"
    },
    {
      icon: "ri-map-pin-line text-white text-2xl",
      title: "Operating in Port Moresby, Lae & Mt Hagen",
      content: "Strategic locations across PNG",
      className: "bg-blue-600"
    },
    {
      icon: "ri-shield-check-line text-white text-2xl",
      title: "Trusted by PNG Power, Water PNG, ADB & AusAID",
      content: "Proven track record with major clients",
      className: "bg-blue-600"
    }
  ]
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subHero.map((item, index) => (
          <div   key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
            <RemixIconContent 
              riClass={item.className}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </Card>
    
  );
};

export default SubHeroSection;