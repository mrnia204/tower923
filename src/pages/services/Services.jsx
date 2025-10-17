import React from "react";
import { Helmet } from "react-helmet-async";

import CallInSection from "./CallInSection";
import EngineeringConstructionSection from "./EngineringConstructinSection";
import HeroSection from "./HeroSection";
import ProcurementSection from "./ProcurementSection";
import SpecialFocusSection from "./SpecialFocusSection";
import RenewableEnergySection from "./RenewableEnergySection";
import TransmissionDistributionSection from "./TransmissionDistributionSection";
import AutomationSmartSection from "./AutomationSmartSection";
import CivilSiteSection from "./CivilSiteSection";
import HealthSafetyManagementSection from "./HealthSafetyManagementSection";
import OperationAssetSection from "./OperationsAssestSection";
import QualityAssuranceSection from "./QualityAssuranceSection";


function Services() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* ===================== Basic SEO Meta Tags ===================== */}
        <title>Services Catalogue | Tower 923 Ltd — Electrical, Engineering & EPC Solutions PNG</title>
        <meta
          name="description"
          content="Explore Tower 923 Ltd’s full range of engineering, EPC, renewable energy, and construction services across Papua New Guinea — powering the nation’s sustainable future, Electrical provider in port moresby, mt Hagen, lae"
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923 Ltd, PNG engineering services, electrical engineering PNG, EPC contractor PNG, renewable energy PNG, solar PNG, substation design PNG, transmission lines PNG, civil construction PNG, SCADA automation PNG, infrastructure PNG"
        />
        <link rel="canonical" href="https://tower923.com/services" />

        {/* ===================== Open Graph (Facebook, LinkedIn) ===================== */}
        <meta property="og:title" content="Tower 923 Ltd — PNG’s Leading Electrical & EPC Contractor" />
        <meta
          property="og:description"
          content="Discover Tower 923 Ltd’s Services Catalogue — delivering world-class electrical, renewable energy, and infrastructure solutions across Papua New Guinea."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Limited_Electrical_Services.webp" />
        <meta property="og:url" content="https://tower923.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* ===================== Twitter Card ===================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Engineering & Infrastructure Experts in PNG" />
        <meta
          name="twitter:description"
          content="View Tower 923 Ltd’s Services Catalogue — from design and EPC to renewable energy, SCADA, civil works, and maintenance across Papua New Guinea."
        />
        <meta name="twitter:image" content="https://tower923.com/assets/Tower923_Limited_Electrical_Services.webp" />

        {/* ===================== Structured Data (JSON-LD for Google) ===================== */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tower 923 Ltd",
            "url": "https://tower923.com",
            "logo": "https://tower923.com/assets/Tower923_Limited_Electrical_Services.webp",
            "tagline": "Believing in Impossibilities",
            "description": "Tower 923 Ltd — Papua New Guinea’s leading engineering and infrastructure company delivering electrical, EPC, renewable energy, SCADA, and civil construction services nationwide.",
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
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tower 923 Ltd Services Catalogue",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Engineering, Design & Advisory Services",
                  "description": "Feasibility studies, electrical designs, protection systems, and regulatory-compliant engineering for PNG conditions."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "EPC Contracting",
                  "description": "End-to-end engineering, procurement, and construction with full project execution, HSE compliance, and timely delivery."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Renewable Energy Solutions",
                  "description": "Solar PV, Battery Energy Storage Systems, and hybrid power systems for sustainable and reliable energy in PNG."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Transmission, Distribution & Substation Engineering",
                  "description": "Power line design and construction up to 132/66 kV, with SCADA-integrated protection and control systems."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "SCADA, Automation & Smart Metering",
                  "description": "Real-time monitoring, smart grid control, and advanced metering systems improving efficiency and reliability."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Civil, Structural & Site Development",
                  "description": "Construction of foundations, access roads, control buildings, and civil works supporting power infrastructure."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Health, Safety, Environment & Social (HSES) Management",
                  "description": "Comprehensive safety, environmental, and community engagement programs ensuring zero harm and compliance."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Operations, Maintenance & Asset Management",
                  "description": "Preventive and predictive maintenance services for high system reliability and rapid response."
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Quality Assurance & Compliance",
                  "description": "Inspection and Test Plans (ITPs), audits, and corrective systems ensuring consistent quality and client satisfaction."
                }
              ]
            }
          }
        `}</script>
      </Helmet>

      {/* Your Services page components go here */}
      <HeroSection />
      <SpecialFocusSection />
      <EngineeringConstructionSection />
      <ProcurementSection />
      <RenewableEnergySection />
      <TransmissionDistributionSection />
      <AutomationSmartSection />
      <CivilSiteSection />
      <HealthSafetyManagementSection />
      <OperationAssetSection />
      <QualityAssuranceSection />
      <CallInSection />
    </div>
  );
};

export default Services;