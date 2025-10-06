import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";


function WorkforceSection () {
  const workforce = [
    {
      title: "Electrical Power Systems",
      content: "Design, installation, and maintenance of electrical power infrastructure",
      icon: "ri-flashlight-line",
    },
    {
      title: "Civil Engineering",
      content: "Structural design and construction for electrical infrastructure projects",
      icon: "ri-building-line",
    },
    {
      title: "Telecommunications & ICT",
      content: "Fiber optics, networking, and communication systems installation",
      icon: "ri-wifi-line",
    },
    {
      title: "Renewable Energy & Rural Electrification",
      content: "Solar systems, hybrid solutions, and rural power distribution",
      icon: "ri-sun-line",
    }
  ]

  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Skilled Workforce"
        content="Our workforce of 14+ engineers, technicians, and linesmen bring decades of combined experience across multiple disciplines"
      />
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {workforce.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex mx-auto items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-blue-600 `}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
    </Card>
  );
};

export default  WorkforceSection;