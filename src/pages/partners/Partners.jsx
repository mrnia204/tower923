import React from "react";
import { Helmet } from "react-helmet-async";

import BenefitsSection from "./BenefitsSection";
import CallInSection from "./CallInSection";
import ConsultingSection from "./ConsultingSection";
import DeliverySection from "./DeliverySection";
import HeroSection from "./HeroSection";
import SuppliersSection from "./SuppliersSection";


function Partners() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Partners & Suppliers | Tower 923 Ltd - PNG Electrical Projects</title>
        <meta
          name="description"
          content="Tower 923 Ltd collaborates with strategic partners and trusted suppliers to deliver world-class electrical and infrastructure projects across Papua New Guinea. Our partners provide equipment, expertise, and innovative solutions."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG partners, PNG suppliers, electrical infrastructure partners, civil engineering partners, renewable energy suppliers, project delivery PNG, EPC projects PNG"
        />
        <link rel="canonical" href="https://tower923.com/our-partners" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Partners & Suppliers | Tower 923 Ltd - PNG Electrical & Infrastructure Projects" />
        <meta
          property="og:description"
          content="Discover Tower 923 Ltd's strategic partners and suppliers who strengthen our capacity to deliver high-quality electrical and infrastructure projects across Papua New Guinea."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Partners.png" />
        <meta property="og:url" content="https://tower923.com/our-partners" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Partners & Suppliers PNG" />
        <meta
          name="twitter:description"
          content="Tower 923 Ltd partners with trusted international suppliers and professionals to deliver world-class electrical and infrastructure projects across Papua New Guinea."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Partners.webp"
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
            "description": "Tower 923 Ltd collaborates with strategic partners and suppliers to deliver high-quality electrical and infrastructure projects across Papua New Guinea.",
            "foundingDate": "2018",
            "telephone": "+675 70694334",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Papua New Guinea"
            },
            "areaServed": "Papua New Guinea",
            "partner": [
              {
                "@type": "Organization",
                "name": "Preformed Line Products",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "Interlec Australia",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "ABB Australia",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "Sierra Support Services",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "Celtic Power Australia",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "Hexeis Australia",
                "location": "Australia"
              },
              {
                "@type": "Organization",
                "name": "Transnet Australia",
                "location": "Australia"
              }
            ],
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

      {/* Your Partners page components go here */}
      <HeroSection />
      <DeliverySection /> 
      <ConsultingSection />
      <SuppliersSection />
      <BenefitsSection />
      <CallInSection />
    </div>
  );
};

export default Partners;