import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import RemixIconContent from "../../components/base/RemixIconContent";
import Card from "../../components/ui/Card";

function BenefitsSection() {
  const Benefits = [
    {
      title: 'Quality Assurance',
      content: 'Access to certified, high-quality equipment and materials from trusted international suppliers',
      icon: 'ri-award-line text-green-600',
      className: 'bg-green-100',
    },
    {
      title: 'Innovation',
      content: 'Latest technologies and innovative solutions for modern electrical infrastructure projects',
      icon: 'ri-rocket-line text-blue-600',
      className: 'bg-blue-100',
    },
    {
      title: 'Global Standards',
      content: 'International compliance and standards ensuring world-class project delivery',
      icon: 'ri-global-line text-blue-600',
      className: 'bg-purple-100',
    }
  ]
  return(
    <Card>
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Benefits.map((list, index) => (
            <AnimatedWrapper key={index} className="text-center" animation="zoom-in">
              <RemixIconContent 
                title={list.title}
                content={list.content}
                icon={list.icon}
                riClass={list.className}
              />
            </AnimatedWrapper>
        ))}
        
      </div>
    </Card>
  );
};

export default BenefitsSection;