import { NavLink } from "react-router-dom";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import Button from "../../components/base/Button";

function CallInSection() {
  return(
    <Card className="bg-blue-600 text-white">
      <CardContent 
        title="Ready to Start Your Project?"
        content="Contact us today to discuss your electrical engineering and construction needs"
        className="text-white"
      >
        <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
          <Button className="text-blue-600 bg-white hover:bg-gray-200 hover:text-blue-600">
            <NavLink to='/contact-us'>Get in Touch</NavLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallInSection;