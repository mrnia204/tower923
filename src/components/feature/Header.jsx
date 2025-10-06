import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    { link: "/services", name: "Services" },
    { link: "/projects", name: "Projects" },
    { link: "/our-team", name: "Team" },
    { link: "/our-partners", name: "Partners" },
    { link: "/assets", name: "Assets" },
    { link: "/contact-us", name: "Contact Us" },
  ];

  const closeMenu = () => setOpenMenu(false);

  return (
   
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-blue-600">
      <nav className="px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <NavLink className="flex items-center space-x-3" to="/" data-discover="true">
            <div className=" w-10 h-10 md:w-15 md:h-15 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-lg">T923</span>
            </div>
            <div>
              <h1 className="text-sm md:text-xl text-gray-800 font-bold">Tower 923 Ltd</h1>
              <p className="text-xs md:text-sm text-gray-600">Believing In Imposibilities</p>
            </div>
          </NavLink>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((list, index) => (
              <NavLink
                key={index}
                to={list.link}
                className="hover:underline active:font-bold focus:text-blue-800 md:text-lg"
              >
                {list.name}
              </NavLink>
            ))}
          </div>

          {/** mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-white focus:outline-none"
            >
              {openMenu ? <X size={28} className="text-blue-600"/> : <Menu size={28} className="text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/**mobile drop down with Framer Motion */}
      <AnimatePresence>
        {openMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate ={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden px-4 py-3 space-y-2 flex flex-col bg-white b"
          >
            {/** Container for the stagger */}
            <motion.div 
              initial="hidden"
              animate= "visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1, // delay between items
                  },
                },
                hidden: {},
              }}
              className="space-y-2"
            >
              {links.map((list, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: {opacity: 0, x: -20},
                    visible: {opacity: 1, x: 0},
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink 
                    key={index}
                    to={list.link} 
                    onClick={closeMenu}
                    className="text-2xl border-b pt-6 border-gray-300 active:font-bold focus:font-bold w-full block"
                  >
                    {list.name}          
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
