import Card from "../../components/ui/Card";

function EthicsSection () {
  const actionImg = 'https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const ethics = [
    "No alcohol or betel nut (buai) on project sites",
    "Merit-based recruitment with no nepotism",
    "Equal employment opportunities for all",
    "Commitment to building Papua New Guinean capacity",
  ];

  return (
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="relative">
          <img 
            src={actionImg} 
            alt="Tower 923 Team" 
            className="rounded-lg shadow-lg object-cover w-full h-96 hover:shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Work Ethics & Standards</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            We maintain the highest standards of professionalism and workplace ethics across all our operations
          </p>
          <div className="space-y-4">
            {ethics.map(ethic => (
              <div key={ethic} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <p className="text-gray-700">{ethic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EthicsSection;