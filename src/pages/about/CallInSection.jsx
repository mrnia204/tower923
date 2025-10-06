import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Button from "../../components/base/Button";

function CallInSection() {
  return(
    <Card className="bg-blue-600 text-white">
      <CardContent 
        title="Ready to Work With Us?"
        content="Let's discuss how we can bring your engineering and construction projects to life"
        className="text-white mb-8"
      >
        <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center items-center">
          <Button className="text-blue-600 bg-white hover:bg-gray-200 hover:text-blue-600">
            <NavLink to='/services'>Explore Our Services</NavLink>
          </Button>
          <Button className="text-white bg-gray-600 hover:bg-gray-700">
            <NavLink to='/contact-us'> Contact us Today</NavLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallInSection;