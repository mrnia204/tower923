import Button from "../base/Button";


function Form() {
  const services=[
  
      "Power Transmission & Distribution",
      "Civil & Building Construction",
      "Substations Design & Construction",
      "Rural Electrification Projects",
      "Renewable Energy Solutions",
      "Telecommunications & Networking",
      "Equipment & Labour Hire",
      "Procurement Services",
      "Other", 
  ]
  return(
    <form action="" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="text" id="name" placeholder="Enter your full name" name="name" required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
         <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="email" id="email" placeholder="Enter your email address" name="email" required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="tel" id="phone" placeholder="Enter your phone number" name="phone" required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization 
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="text" id="company" placeholder="Enter your company name" name="company" required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
        <div className="relative">
          <select 
            name="service" id="service"
            className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white"
          >
            <option value>Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <i className="ri-arrow-down-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message 
          <strong className="text-red-600">*</strong>
        </label>
        <textarea 
          name="message" id="message" required rows={12} maxLength={100} placeholder="Tell us about your project requirements..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        <div className="text-right text-xs text-gray-500 mt-1">
          0/1000 characters
        </div>
      </div>

      <Button className="text-white hover:bg-blue-700 bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
        Send Message
      </Button>
    </form>
  );
};

export default Form;