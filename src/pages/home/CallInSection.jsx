import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Button from "../../components/base/Button";

function CallInSection() {
  return(
    <Card className="bg-blue-600 text-white">
      <CardContent 
        title="Ready to Start Your Project?"
        content="Let's discuss how Tower 923 Ltd can bring your engineering and construction vision to life with our proven expertise and commitment to excellence."
        className="text-white mb-8"
      >
        <NavLink to="/" className="m-4">
          <Button className="text-blue-600 bg-white hover:bg-gray-200 hover:text-blue-600">Get in Touch</Button>
        </NavLink>
        <NavLink to="/" className="m-4">
          <Button className="text-white bg-gray-600 hover:bg-gray-700">
            <i className="ri-phone-line text-white pr-2"></i>
            Call +675 70694334
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default CallInSection;