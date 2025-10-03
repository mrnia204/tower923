import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const[active, setActive]=useState(false);

  const pages = [
    { name: "Home", link: "/"},
    { name: "About Us", link: "/about-us"},
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex justify-between py-4 items-center">
          <div className="flex items-center">
            <NavLink to='/' className="flex items-center space-x-3" data-discover="true">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T923</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Tower 923 Ltd</h1>
                <p className="text-sm text-gray-600">Engineering Excellence</p>
              </div>
            </NavLink>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Home</NavLink>
            <NavLink to="/about-us" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">About Us</NavLink>
            <NavLink to="/services" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Services</NavLink>
            <NavLink to="/projects" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Projects</NavLink>
            <NavLink to="/our-team" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Team</NavLink>
            <NavLink to="/our-partners" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Partners</NavLink>
            <NavLink to="/assets" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Assets</NavLink>
            <NavLink to="/contact-us" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-600">Contact</NavLink>
          </nav>

          {/**mobile view */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 cursor-pointer">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;