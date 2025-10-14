import React from "react";
import { Helmet } from "react-helmet-async";

import CallInSection from "./CallInSection";
import EngineeringConstructionSection from "./EngineringConstructinSection";
import HeroSection from "./HeroSection";
import ProcurementSection from "./ProcurementSection";
import SpecialFocusSection from "./SpecialFocusSection";


function Services() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Services | Tower 923 Ltd - Electrical & Engineering Solutions PNG</title>
        <meta
          name="description"
          content="Tower 923 Ltd provides comprehensive electrical engineering and construction services across Papua New Guinea. Specializing in power lines, substations, renewable energy, civil construction, telecommunications, and EPC solutions."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG engineering services, electrical construction PNG, civil construction PNG, power transmission, renewable energy PNG, substations design, rural electrification, fiber optics, EPC contractor PNG, equipment hire PNG"
        />
        <link rel="canonical" href="https://tower923.com/services" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Services | Tower 923 Ltd - PNG Electrical & Engineering Experts" />
        <meta
          property="og:description"
          content="Tower 923 Ltd delivers world-class electrical engineering and construction services across PNG including power transmission, substations, civil works, renewable energy, and telecommunications."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923.png" />
        <meta property="og:url" content="https://tower923.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Electrical & Engineering Services PNG" />
        <meta
          name="twitter:description"
          content="Comprehensive electrical engineering and construction services in PNG — power lines, substations, renewable energy, civil works, and telecommunications by Tower 923 Ltd."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Limited_Electrical_Services.webp"
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
            "description": "Tower 923 Ltd provides electrical engineering and construction services across Papua New Guinea including power transmission, substations, renewable energy, civil construction, telecommunications, procurement, and EPC solutions.",
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
              "areaServed": "PG"
            }
          }
        `}</script>
      </Helmet>

      {/* Your Services page components go here */}
      <HeroSection />
      <SpecialFocusSection />
      <EngineeringConstructionSection />
      <ProcurementSection />
      <CallInSection />
    </div>
  );
};

export default Services;