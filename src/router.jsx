import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from './pages/services/Services';
import Projects from "./pages/projects/Projects";
import Partners from "./pages/partners/Partners";
import Assets from "./pages/assets/Assets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About />},
      { path: "/services", element: <Services />},
      { path: "/projects", element: <Projects />},
      { path: "/our-partners", element: <Partners />},
      { path: "/assets", element: <Assets />},
      { path: "/contact-us", element: <Contact />},
    ]
  }
]);