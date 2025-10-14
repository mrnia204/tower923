import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import NumberSection from "./NumberSection";
import ProjectSections from "./ProjectSection";


function Projects() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Projects | Tower 923 Ltd - Electrical & Infrastructure Projects PNG</title>
        <meta
          name="description"
          content="Tower 923 Ltd delivers impactful infrastructure and electrical projects across Papua New Guinea. Recent projects include solar energy systems, power distribution lines, substations, and rural electrification initiatives."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG engineering projects, electrical projects PNG, infrastructure projects PNG, power distribution lines, solar energy projects, renewable energy PNG, EPC projects, civil works PNG"
        />
        <link rel="canonical" href="https://tower923.com/projects" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Projects | Tower 923 Ltd - PNG Engineering & Electrical Projects" />
        <meta
          property="og:description"
          content="Showcasing Tower 923 Ltd's electrical and infrastructure projects across Papua New Guinea, including power lines, solar energy systems, substations, and rural electrification."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Projects.png" />
        <meta property="og:url" content="https://tower923.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Electrical & Infrastructure Projects PNG" />
        <meta
          name="twitter:description"
          content="Delivering impactful electrical and infrastructure projects across Papua New Guinea, including solar systems, power distribution, substations, and rural electrification by Tower 923 Ltd."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Projects.webp"
        />

        {/* Structured Data (JSON-LD for Google) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tower 923 Ltd",
            "url": "https://tower923.com",
            "logo": "https://tower923.com/assets/Tower923_Limited_Electrical_Services.webp",
            "tagline": "Believing in Impossibilities",
            "description": "Tower 923 Ltd delivers electrical and infrastructure projects across Papua New Guinea, including solar energy, power distribution lines, substations, and rural electrification initiatives.",
            "foundingDate": "2018",
            "telephone": "+675 70694334",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Papua New Guinea"
            },
            "areaServed": "Papua New Guinea",
            "sameAs": [
              "https://www.facebook.com/tower923",
              "https://www.linkedin.com/company/tower923"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+675 70694334",
              "contactType": "Customer Service",
              "areaServed": "PG and Pacific"
            }
          }
        `}</script>
      </Helmet>

      {/* Your Projects page sections go here */}
      <HeroSection />
      <ProjectSections />
      <HighlightsSection />
      <NumberSection />
    </div>
  );
};

export default Projects;