import { NavLink } from "react-router-dom";

function Footer() {
  const contact=[
    {
      location: "Head Office- Mt. Hagen",
      address: "Tarangau, Sect 42 Lot 63",
      postal: "P.O. Box 103, Mt. Hagen, WHP",
      email: "dougsiwi18@gmail.com", 
      phone: "+675 70694334"
    },
    {
      location: "Port Moresby Office",
      address: "9 Mile, Sect 187 Lot 21",
      postal: "P.O. Box 1213, Waigani, NCD",
      email: "dougsiwi18@gmail.com", 
      phone: "+675 70171910"
    },
    {
      location: "Lae Office",
      address: "Lae Morobe Provice",
      postal: " C/-Traisa Transport, P.O. Box 840,  Lae Morobe Province",
      email: "dougsiwi18@gmail.com", 
      phone: "+675 70694334"
    },
  ]
  return(
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T923</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tower 923 Ltd</h3>
                <p className="text-gray-400">Believing in Impossibilities</p>
              </div>
            </div>

            <p className="text-gray-300 mb4  max-w-md">
              A 100% nationally-owned Engineering and Construction company delivery innovative, const-effective, 
              and sustainable solutions across Papua New Guinea.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:dougsiwil18@gmail.com" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a href="tel:+67570694334" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-phone-line tet-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white cursor-pointer">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="text-gray-300 hover:text-white cursor-pointer">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white cursor-pointer">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white cursor-pointer">Our Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-gray-300 hover:text-white cursor-pointer">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {contact.map((office, index) => (
                <li key={index}>
                  <div>
                    <p className="font-medium">{office.location}</p>
                    <p className="text-gray-300 text-sm">{office.address}</p>
                    <p className="text-gray-300 text-sm">{office.postal}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      <i className="ri-phone-line mr-2"></i>
                      {office.phone}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <i className="ri-mail-line mr-2 text-gray-300"></i>
                      {office.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            @{new Date().getFullYear()} Tower 923 Ltd. All rights reserved
          </p>
          <a 
            href="https://mrnia-356c3.web.app/" 
            className="text-gray-400 hover:text-white text-sm cursor-pointer mt-2 md:mt-0"
          >code by Christopher Nia</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;