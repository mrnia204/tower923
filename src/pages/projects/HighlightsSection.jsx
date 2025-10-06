import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import RemixIconContent from '../../components/base/RemixIconContent';
import AnimatedWrapper from '../../components/animation/AnimatedWrapper';

function HighlightsSection() {
  const highlights = [
    {
      title: "Rural Electrification Projects",
      content: "Rural Electrification Projects",
      icon: "ri-home-line text-blue-600",
      riClass: "bg-blue-100",
    },
    {
      title: "Rural Electrification Projects",
      content: "Rural Electrification Projects",
      icon: "ri-school-line text-blue-600",
      riClass: "bg-blue-100",
    },
    {
      title: "Rural Electrification Projects",
      content: "Rural Electrification Projects",
      icon: "ri-flashlight-line text-blue-600",
      riClass: "bg-blue-100",
    }
  ]
  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Past Highlights"
        content="Key achievements that demonstrate our expertise and commitment to PNG's development"    
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 bg-white gap-8">

        {highlights.map((list, index) => (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <RemixIconContent 
              key={index}
              title={list.title}
              content={list.content}
              icon={list.icon}
              riClass={list.riClass}
            />
          </div>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default HighlightsSection;