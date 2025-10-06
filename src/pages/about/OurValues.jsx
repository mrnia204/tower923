import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import RemixIconContent from '../../components/base/RemixIconContent';
import AnimatedWrapper from "../../components/animation/AnimatedWrapper";

function OurValues() {
  const values = [
    {
      title: "Trust & Honesty",
      content: "Trust, honesty, and fairness in all our business dealings",
      icon: "ri-shield-check-line text-blue-400",
      className: "bg-blue-100"
    },
    {
      title: "Respect & Teamwork",
      content: "Respect for people, gender equality, and collaborative teamwork",
      icon: "ri-team-line text-blue-400",
      className: "bg-blue-100"
    },
    {
      title: "Safety First",
      content: "Safety-first approach at every worksite and project",
      icon: "ri-shield-star-line text-blue-400",
      className: "bg-blue-100"
    },
    {
      title: "Project Ownership",
      content: "Treating every project—big or small—with equal respect and dedication",
      icon: "ri-heart-line text-blue-400",
      className: "bg-blue-100"
    }
  ]
  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Our Values"
        content="These core values guide our decisions and shape our company culture"
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-lg transition-shadow">
            <RemixIconContent 
              title={value.title}
              content={value.content}
              icon={value.icon}
              riClass={value.className}
            />
          </div>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default OurValues;