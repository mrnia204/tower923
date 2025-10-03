import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Button from "../../components/base/Button";


function ProjectsSection() {
  const projects = [
    {
      title: "Alotau District Solar + BESS System",
      cost: "K150,000",
      year: "2024",
      location: "Milne Bay Province"
    },
     {
      title: "Power Distribution Extension",
      cost: "K2M",
      year: "2023",
      location: "Eastern Highlands Province"
    },
     {
      title: "100km Power Distribution Lines",
      cost: "K150,000",
      year: "2023",
      location: "North Waghi District"
    },

  ]
  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Recent Projects"
        content="Delivering excellence across Papua New Guinea"      
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-b hover:from-blue-100 hover:to-purple-400">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-sm font-medium px-3 py-1 rounded-full text-blue-800">{project.year}</span>
              <span className="text-2xl font-bold text-green-600">{project.cost}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 items-center">
              <i className="ri-map-pin-line mr-2"></i>
              {project.location}
            </p>
          </div>
        ))}
      </div> 

       <div className="text-center mt-12">
        <NavLink to="/">
          <Button className="bg-blue-600 hover:bg-blue-800 text-white">
            <i className="ri-arrow-right-line pr-1 animate-pulse"></i>
            View All Projects
          </Button>
        </NavLink>
      </div>
    </Card>
  );
};

export default ProjectsSection;