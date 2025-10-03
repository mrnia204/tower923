import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";

function OurJourney() {
  return(
    <Card className="bg-blue-50">
      <CardContent 
        title="Our Journey"
        content="Key Milestones in our company's growth"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          <div className="space-y-2">
            <div className="relative flex items-center">
              <div className="flex-1 text-right pr-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lx font-semibold text-gray-900 mb-2">2018</h3>
                  <p className="text-gray-700">Tower 923 Ltd established as a PNG-owned engineering and construction company</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="flex-1 text-left pl-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lx font-semibold text-gray-900 mb-2">2018-2019</h3>
                  <p className="text-gray-700">
                    JICA Ramu Transmission Line consultancy and project reinforcement (K224M)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 text-right pr-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lx font-semibold text-gray-900 mb-2">2021</h3>
                  <p className="text-gray-700">
                    AusAID Power Sector Development energy consultancy (US$60M project)
                  </p>
                </div>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="flex-1 text-left pl-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lx font-semibold text-gray-900 mb-2">2023-2024</h3>
                  <p className="text-gray-700">
                    Continued expansion with major projects across Eastern Highlands, North Waghi, and Alotau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OurJourney;