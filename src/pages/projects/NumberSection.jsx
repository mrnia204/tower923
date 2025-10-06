import Counter from "../../components/base/Counter";
import Card from "../../components/ui/Card";


function NumberSection() {

  const items = [
    {
      title: "50",
      prefix: "",
      suffix: "+",
      content: "Projects Completed",
    },
     {
      title: "500",
      prefix: "K",
      suffix: "M+",
      content: "Total Project Value",
    },
     {
      title: "15",
      prefix: "",
      suffix: "+",
      content: "Provinces Served",
    },
     {
      title: "1000",
      prefix: "",
      suffix: "+",
      content: "KM Power Lines",
    },
  ]

  return(
    <Card className="bg-blue-600 text-white">
     <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-8">
        {items.map((item, index) => (
          <div key={index}>
            <div className="text-2xl text-white mg md:text-4xl mb-2">
              <Counter 
                targetNumber={item.title}
                prefix={item.prefix}
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