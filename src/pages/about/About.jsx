import React from "react";
import { Helmet } from "react-helmet-async";
import CallInSection from "./CallInSection";
import EthicsSection from "./EthicsSection";
import HeroSection from "./HeroSection";
import MantraSection from "./MantraSection";
import OurJourney from "./OurJourney";
import OurValues from "./OurValues";
import VisionMissionSection from "./VisionMissionSection";
import WhoweareSection from "./WhoweareSection";

function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>About Us | Tower 923 Ltd - PNG Engineering & Construction Company</title>
        <meta
          name="description"
          content="Tower 923 Ltd is a 100% PNG-owned engineering and construction company established in 2018. We specialize in Design, Engineering, Procurement, and Construction (EPC) across civil works, power, renewable energy, and telecommunications projects in Papua New Guinea."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, engineering, construction, EPC, PNG contractor, Papua New Guinea, power distribution, power distribution in Port Moresby, power distribution in Hage, renewable energy, telecommunications, civil works, engineering company PNG, construction company PNG, electrical provider in Port Moresby"
        />
        <link rel="canonical" href="https://tower923.com/about-us" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="About Tower 923 Ltd | PNG-Owned Engineering & Construction Contractor" />
        <meta
          property="og:description"
          content="Discover the story of Tower 923 Ltd — a Papua New Guinea–owned diversified EPC contractor committed to innovation, safety, and sustainable development since 2018."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923.png" />
        <meta property="og:url" content="https://tower923.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Tower 923 Ltd | PNG Engineering & Construction Experts" />
        <meta
          name="twitter:description"
          content="Tower 923 Ltd — Building Papua New Guinea through innovative EPC solutions in power, civil works, and renewable energy."
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
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Tower 923 Leadership Team"
            },
            "description": "Tower 923 Ltd is a PNG-owned EPC company delivering engineering, procurement, and construction services across civil works, renewable energy, and power sectors in Papua New Guinea.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Papua New Guinea"
            },
            "sameAs": [
              "https://www.facebook.com/tower923",
              "https://www.linkedin.com/company/tower923"
            ]
          }
        `}</script>
      </Helmet>

      {/* Page Sections */}
      <HeroSection />
      <WhoweareSection />
      <MantraSection />
      <VisionMissionSection />
      <OurValues />
      <EthicsSection />
      <OurJourney />
      <CallInSection />
    </div>
  );
}

export default About;
