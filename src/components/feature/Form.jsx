import React, { useState } from "react";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import Button from "../base/Button";


function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    company: "",
    service: "",
    message: "",
  });
  const[errors, setErrors]=useState({});
  const[submitted, setSubmitted]=useState(false);

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
  ]; 


  // handle change
  const changeHandler= (e) => {
    const {name, value} = e.target;

    // update form data
    setFormData((prev) => ({...prev, [name]: value }));

    // clear error as user type
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //validation
  const validateFormHandler = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address."
    }

    if (!formData.phone.trim()){
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.company.trim()) newErrors.company = "Company/Organization name is required";
    if (!formData.service) newErrors.service = "Please select a service";
    
    if (!formData.message.trim()){
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    return newErrors;
  };
  
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const validationError = validateFormHandler();
    setErrors(validationError); // this set first so it triggers a re-render

    if (Object.keys(validationError).length > 0) {
      console.log(validationError);
      
      return; // stop here, form invalid
    };

    // form is valid
    setSubmitted(true);
    alert("Form submitted successfully");

    //reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  }




  return(
    <form onSubmit={submitHandler} id="contact-form" noValidate> 
      {/** fullname and email */}
      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your full name" 
            name="name" 
            value={formData.name}
            onChange={changeHandler}
            className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm ${
              errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
         <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email address" 
            name="email" 
            value={formData.email}
            onChange={changeHandler}
            className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Enter your phone number" 
            name="phone" 
            value={formData.phone}
            onChange={changeHandler}
            className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm ${
              errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization 
            <strong className="text-red-600">*</strong>
          </label>
          <input 
            type="text" 
            id="company" 
            placeholder="Enter your company name" 
            name="company" 
            value={formData.company}
            onChange={changeHandler}
            className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm ${
              errors.company ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
        <div className="relative">
          <select
            id="service" 
            name="service" 
            value={formData.service}
            onChange={changeHandler}
            className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm appearance-none bg-white ${
              errors.service ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
            }`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <i className="ri-arrow-down-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
        </div>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
      </AnimatedWrapper>
      <AnimatedWrapper className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message 
          <strong className="text-red-600">*</strong>
        </label>
        <textarea 
          name="message" 
          id="message" 
          value={formData.message}
          rows={12} 
          maxLength={1000} 
          onChange={changeHandler}
          placeholder="Tell us about your project requirements..."
          className={`w-full px-3 py-2 border  rounded-lg focus:ring-2 text-sm appearance-none bg-white ${
              errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
          }`}
          
        />
        <div className="text-right text-xs text-gray-500 mt-1">
          {formData.message.length}/1000 characters
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </AnimatedWrapper>

      <button
        type="submit"
        disabled={submitted}
        className="text-white rounded-full px-4 py-2 md:px-8 md:py-4 hover:bg-blue-700 bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitted ? "Message Sent" : "Send Message"}
      </button>
    </form>
  );
};

export default Form;