import React from "react";
import { NavLink } from "react-router-dom";

import Towerlogo from '../../assets/Tower923_Limited_Electrical_Services.webp';

function Footer() {
  const contact = [
    {
      location: "Head Office - Mt. Hagen",
      address: "Tarangau, Sect 42 Lot 63",
      postal: "P.O. Box 103, Mt. Hagen, WHP",
      email: "info@tower923.com",
      phone: "+675 70694334",
    },
    {
      location: "Port Moresby Office",
      address: "9 Mile, Sect 187 Lot 21",
      postal: "P.O. Box 1213, Waigani, NCD",
      email: "info@tower923.com",
      phone: "+675 70171910",
    },
    {
      location: "Lae Office",
      address: "Lae, Morobe Province",
      postal: "C/- Traisa Transport, P.O. Box 840",
      email: "info@tower923.com",
      phone: "+675 70694334",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl md:max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section: Company Info + Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center">
                <span>
                  <img src={Towerlogo} alt="Tower923 official log0"  className="w-12 h-12"/>
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tower 923 Ltd</h3>
                <p className="text-gray-400">Believing in Impossibilities</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              A 100% nationally-owned Engineering and Construction company delivering innovative, cost-effective, 
              and sustainable solutions across Papua New Guinea.
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:dougsiwi18@gmail.com"
                className="text-gray-400 hover:text-white"
                aria-label="Email"
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a
                href="tel:+67570694334"
                className="text-gray-400 hover:text-white"
                aria-label="Phone"
              >
                <i className="ri-phone-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="text-gray-300 hover:text-white">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-white">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/our-team" className="text-gray-300 hover:text-white">Our Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-gray-300 hover:text-white">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contact.map((office, index) => (
              <div key={index} className="text-sm text-gray-300">
                <p className="font-semibold text-white mb-1">{office.location}</p>
                <p>{office.address}</p>
                <p>{office.postal}</p>
                <p className="mt-2">
                  <i className="ri-phone-line mr-2"></i>{office.phone}
                </p>
                <p>
                  <i className="ri-mail-line mr-2"></i>{office.email}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tower 923 Ltd. All rights reserved.
          </p>
          <a
            href="https://mrnia-356c3.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm mt-2 md:mt-0"
          >
            Code by Christopher Nia
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
