import Card from "../../components/ui/Card";
import Counter from "../../components/base/Counter";


function NumberSection() {
  const counts = [
    {
      title: "14",
      content: "Team Members",
      suffix: "+",
    },
    {
      title: "70",
      content: "Years Combined Experience",
      suffix: "+",
    },
    {
      title: "6",
      content: "Licensed Engineers",
      suffix: "",
    },
    {
      title: "100",
      content: "PNG Nationals",
      suffix: "%",
    }
  ]
  return(
     <Card className="bg-blue-600 text-white">
     <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-8">
        {counts.map((item, index) => (
          <div key={index}>
            <div className="text-2xl text-white mg md:text-4xl mb-2">
              <Counter 
                targetNumber={item.title}
                suffix={item.suffix}
                className="font-bold"
              />
            </div>
            <div className="text-blue-100">{item.content}</div>
          </div>
        ))}
     </div>
    </Card>
  );
};

export default NumberSection;