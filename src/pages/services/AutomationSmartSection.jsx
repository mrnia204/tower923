import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

function AutomationSmartSection() {

  const services = [
    { 
      icon: "ri-dashboard-line",
      title: "SCADA Systems",
      content: "Integration using IEC and DNP3 protocols for network supervision, fault detection, and swift response capabilities."
    },
    { 
      icon: "ri-settings-3-line",
      title: "Automation Solutions",
      content: "Automatic reclosing, voltage control, and load balancing systems for enhanced network efficiency."
    },
    { 
      icon: "ri-bar-chart-box-line",
      title: "Smart Metering",
      content: "AMI and AMR technology providing detailed consumption analytics, reduced losses, and improved billing accuracy."
    },
   
  ];

  const keyDeliverables = [
    [
      "Configuration Manuals",
      "Telemetry Reports"
    ],
    [
      "Visual Dashboards",
      "Real-time Monitoring"
    ],
    [
      "Full Asset Visibility",
      "Complete Control Systems"
    ]
  ];

  return(
    <Card>
      <CardContent 
        title="5. SCADA, Automation & Smart Metering"
        content="nhancing power network efficiency through real-time monitoring and smart technologies. Our automation and control systems provide operators with full visibility and control of their assets."      
      /> 
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((list, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-[35vh]">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${list.icon} text-2xl text-indigo-600`}></i>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{list.title}</h3>
            <p className="text-gray-600">{list.content}</p>
          </div>
        ))}
      </AnimatedWrapper>
      <AnimatedWrapper className='mt-12 bg-indigo-50 rounded-lg p-8'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">System Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keyDeliverables.map((column, columnIndex) => (
          <ul key={columnIndex} className='space-y-2'>
            {column.map((list) => (
              <li key={list} className="flex items-center text-gray-700">
                <i className="ri-check-line text-indigo-600 mr-2"></i>
                {list}
              </li>
            ))}
          </ul>
          ))}
        </div>
      </AnimatedWrapper>
    </Card>
  );
};

export default AutomationSmartSection;