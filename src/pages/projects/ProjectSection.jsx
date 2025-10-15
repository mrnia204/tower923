import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

function ProjectSections() {
  const projects = [
    {
      project: "Alotau District Solar + BESS System",
      description: "Solar battery energy storage system implementation for reliable power supply",
      year: "2024",
      status: "Ongoing",
      location: "Alotau District, Milne Bay Province",
      amount: "K150,000",
    },
    {
      project: "Eastern Highlands Province Power Distribution Extension ",
      description: "Major power distribution network extension project",
      year: "2023",
      status: "Completed",
      location: "Eastern Highlands Province",
      amount: "K2M",
    },
    {
      project: "North Waghi District Power Distribution Lines",
      description: "100km of new power distribution lines installation",
      year: "2023",
      status: "Completed",
      location: "North Waghi District, Jiwaka",
      amount: "K150,00",
    },
    {
      project: "AusAID Power Sector Developmen",
      description: "Energy consultancy for major power sector development project",
      year: "2021",
      status: "Completed",
      location: "Papua New Guinea",
      amount: "US$60M",
    },
    {
      project: "JICA Ramu Transmission Line",
      description: "Consultancy and project reinforcement for major transmission line",
      year: "2018-2019",
      status: "Completed",
      location: "Ramu Region, Madang",
      amount: "K224M",
    }
  ];

  return(
    <Card>
      <CardContent 
        title="Recent & Ongoing Projects"
        content="Our latest showcase our commitment to advancing PNG's electrical infrastructure"
      />
      <div className="space-y-8">
        {projects.map((list, index) => (
          <AnimatedWrapper key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2"> 
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">{list.year}</span>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">{list.status}</span>
                  </div> 
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{list.project}</h3>
                  <p className="text-gray-600 mb-2">{list.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-1"></i>
                    <span>{list.location}</span>
                  </div>
                </div>
                {/**
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="text-right">
                    <div className=" text-xl md:text-2xl font-bold text-blue-600">{list.amount}</div>
                    <div className="text-sm text-gray-500">Project Value</div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Card>
  );
};

export default ProjectSections; 