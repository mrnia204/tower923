import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import RemixIconContent from '../../components/base/RemixIconContent';

function ConsultingSection () {
  const consulting = [
    {
      title: "Auditors",
      content: "Certified financial and project auditing services",
      icon: "ri-file-list-3-line text-blue-600",
      className: "bg-blue-100",
    },
    {
      title: "Surveyors",
      content: "Professional land and engineering surveying",
      icon: "ri-compass-3-line text-blue-600",
      className: "bg-blue-100",
    },
    {
      title: "Civil Engineers",
      content: "Structural and infrastructure engineering expertise",
      icon: "ri-building-line text-blue-600",
      className: "bg-blue-100",
    },
    {
      title: "Architects",
      content: "Design and planning for construction projects",
      icon: "ri-pencil-ruler-2-line text-blue-600",
      className: "bg-blue-100",
    },
    {
      title: "Legal Advisors",
      content: "Legal compliance and contract management",
      icon: "ri-scales-3-line text-blue-600 ",
      className: "bg-blue-100",
    },
  ]
  return (
    <Card>
      <CardContent 
        title="Consulting Professionals"
        content="We collaborate with experienced professionals to ensure project quality and compliance"
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-5 items-center justify-center gap-6">
        {consulting.map((list, index) => (
          <AnimatedWrapper animation="zoom-in" key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <RemixIconContent 
              title={list.title}
              content={list.content}
              icon={list.icon}
              riClass={list.className}
            />
          </AnimatedWrapper>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default ConsultingSection;