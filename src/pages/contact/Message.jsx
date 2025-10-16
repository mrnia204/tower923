import AnimatedWrapper from '../../components/animation/AnimatedWrapper';
import Button from '../../components/base/Button';
import Form from '../../components/feature/Form';
import Card from '../../components/ui/Card';

function Message () {
  const contactInfo = [
    {
      location: "Head Office - Mt Hagen",
      iconMain: "ri-building-line",
      info: [
        {icon: "ri-map-pin-line", name: "Rarangau, Sect 42 Lot 63"},
        {icon: "ri-mail-send-line", name: "P.O. Box 1-3, Mt. Hagen, WHP"},
        {icon: "ri-phone-line", name: "+675 70694334"},
        {icon: "ri-at-line", name: "info@tower923.com"},
      ],
    },
    {
      location: "Head Office - Mt Hagen",
      iconMain: "ri-map-pin-line",
      info: [
        {icon: "ri-map-pin-line", name: "Rarangau, Sect 42 Lot 63"},
        {icon: "ri-mail-send-line", name: "P.O. Box 1-3, Mt. Hagen, WHP"},
        {icon: "ri-phone-line", name: "+675 70694334"},
        {icon: "ri-at-line", name: "info@tower923.com"},
      ],
    },
    {
      location: "Head Office - Mt Hagen",
      iconMain: "ri-building-line",
      info: [
        {icon: "ri-map-pin-line", name: "Rarangau, Sect 42 Lot 63"},
        {icon: "ri-mail-send-line", name: "P.O. Box 1-3, Mt. Hagen, WHP"},
        {icon: "ri-phone-line", name: "+675 70694334"},
        {icon: "ri-at-line", name: "info@tower923.com"},
      ],
    },

  ]
  return (
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <Form />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to discuss your electrical engineering project? Contact us through any of 
            our offices or send us a message using the form. We're here to help bring your 
            infrastructure vision to life.
          </p>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <AnimatedWrapper key={index} className="bg-gray-50 rounded-lg p-6">
            
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className={`${item.iconMain} text-xl text-blue-600`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.location}</h3>
                    <div className="space-y-1 text-gray-600">
                      {item.info.map((list, i) => (
                        <p key={i} className="flex items-center hover:text-blue-600">
                          <i className={`${list.icon} mr-2`}></i>
                          <span>{list.name}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg mt-8 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Contact</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-800">
                <a href="https://wa.me/+67570694344">
                  <i className="ri-whatsapp-line pr-1 text-green-400 text-2xl"></i>
                  WhatsApp Us
                </a>
              </Button>
              <Button className="text-blue-600 border border-blue-600 hover:bg-blue-100">
                <a href="mailto:nia.chrix@gmail.com">
                  <i className='ri-mail-star-line pr-1 text-blue-500 text-2xl'></i>
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Message;