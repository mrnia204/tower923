import React from "react";
import { Helmet } from "react-helmet-async";

import CoverageSecton from "./CoverageSection";
import FleetSection from "./FleetSection";
import HeroSection from "./HeroSection";
import OperationBasesSection from "./OperationsBasesSection";
import OperationCapabilitySection from "./OperatonCapabilitySection";


function Assets() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Assets & Facilities | Tower 923 Ltd - PNG Electrical & Construction Projects</title>
        <meta
          name="description"
          content="Tower 923 Ltd operates strategically located offices and maintains reliable vehicles and equipment across Papua New Guinea, enabling efficient project delivery in electrical, civil, and renewable energy sectors."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG operational bases, electrical project assets PNG, construction equipment PNG, vehicles PNG, project delivery PNG, logistics network PNG, EPC projects PNG"
        />
        <link rel="canonical" href="https://tower923.com/assets" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Assets & Facilities | Tower 923 Ltd - PNG Electrical & Construction Projects" />
        <meta
          property="og:description"
          content="Discover Tower 923 Ltd's operational bases, vehicle fleet, and equipment across PNG, enabling efficient electrical and infrastructure project delivery nationwide."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Assets.png" />
        <meta property="og:url" content="https://tower923.com/assets" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Assets & Facilities PNG" />
        <meta
          name="twitter:description"
          content="Strategically located offices, vehicles, and equipment enable Tower 923 Ltd to deliver electrical and construction projects efficiently across Papua New Guinea."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Assets.webp"
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
            "description": "Tower 923 Ltd operates offices and maintains vehicles and equipment across Papua New Guinea, enabling efficient electrical, civil, and renewable energy project delivery.",
            "foundingDate": "2018",
            "telephone": "+675 70694334",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Tarangau, Sect 42 Lot 63",
                "addressLocality": "Lae",
                "addressRegion": "Morobe Province",
                "addressCountry": "Papua New Guinea"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Central Business District",
                "addressLocality": "Port Moresby",
                "addressRegion": "National Capital District",
                "addressCountry": "Papua New Guinea"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Head Office",
                "addressLocality": "Mt. Hagen",
                "addressRegion": "Western Highlands Province",
                "addressCountry": "Papua New Guinea"
              }
            ],
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
            },
            "hasVehicle": [
              {
                "@type": "Product",
                "name": "Toyota Land Cruiser - Lae",
                "description": "Heavy Duty 4WD for remote site access and equipment transport"
              },
              {
                "@type": "Product",
                "name": "Toyota Land Cruiser - Mt. Hagen",
                "description": "Heavy Duty 4WD for Highland region project access"
              },
              {
                "@type": "Product",
                "name": "Toyota Hilux - Port Moresby",
                "description": "Utility Vehicle for urban operations and light equipment transport"
              },
              {
                "@type": "Product",
                "name": "Toyota Mark X - Port Moresby",
                "description": "Executive Vehicle for business meetings and client relations"
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Your Assets & Facilities page components go here */}
      <HeroSection />
      <OperationBasesSection />
      <FleetSection />
      <OperationCapabilitySection />
      <CoverageSecton />
    </div>
  );
};

export default Assets;