import AnimatedWrapper from "../../components/animation/AnimatedWrapper";
import PapuaNewGuineaMap from "../../components/base/PapuaNewGuineaMap";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function CoverageSecton() {
  const location = [
    { icon: "text-red-500", office: "Mt. Hagen - Head Office"},
    { icon: "text-green-500", office: "Lae - Regional Office"},
    { icon: "text-blue-500", office: "Port Moresby - Regional Office"},
  ];


  return(
    <Card className="bg-blue-50">
      <CardContent 
        title="PNG Coverage"
        content="Our strategic locations provide comprehensive coverage across Papua New Guinea"      
      />
      <AnimatedWrapper className="bg-white rounded-lg shadow-lg p-8">
        <div className="aspect-w-16 aspect-h-9">
          <PapuaNewGuineaMap />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 text-center gap-4">
          {location.map((list, index) => (
            <div key={index} className="flex items-center justify-center">
              <i className={`ri-map-pin-line mr-2 ${list.icon}`}></i>
              <span className="font-medium">{list.office}</span>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default CoverageSecton;