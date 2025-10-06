import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Button from "../../components/base/Button";

function CallInSection() {
  return(
    <Card className="bg-gray-50">
      <CardContent 
        title="Join Our Growing Team"
        content="We're always looking for talented engineers, technicians, and professionals to join our mission of developing PNG's electrical infrastructure"
        className="text-gray-800 mb-8"
      >
        <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center items-center">
          <Button className="text-white bg-blue-600 hover:bg-blue-800">
            <NavLink to='/contact-us'>Contact Us Now</NavLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallInSection;