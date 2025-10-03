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
        <NavLink to="/" className="m-4">
          <Button className="text-blue-600 bg-white hover:bg-gray-200 hover:text-blue-600">
            Explore Our Services
          </Button>
        </NavLink>
        <NavLink to="/" className="m-4">
          <Button className="text-white bg-gray-600 hover:bg-gray-700">
            Contact us Today
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default CallInSection;