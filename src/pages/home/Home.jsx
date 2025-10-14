import React from "react";
import { Helmet } from "react-helmet-async";

import CallInSection from "./CallInSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import SubHeroSection from "./SubHeroSection";
import WhoweareSection from "./WhoweareSection";

function Home() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Tower 923 Ltd | PNG Engineering & Construction Company</title>
        <meta
          name="description"
          content="Tower 923 Ltd is a 100% PNG-owned engineering and construction company providing innovative, sustainable, and cost-effective EPC solutions across Papua New Guinea. Specialists in civil, electrical, renewable energy, and telecommunications projects."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG engineering company, construction PNG, civil works, electrical engineering, renewable energy PNG, telecommunications, EPC contractor, Papua New Guinea projects, power distribution, infrastructure development"
        />
        <link rel="canonical" href="https://tower923.com/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Tower 923 Ltd | Believing in Impossibilities" />
        <meta
          property="og:description"
          content="Tower 923 Ltd is a 100% nationally-owned EPC company in Papua New Guinea, delivering excellence in engineering, construction, power, and renewable energy projects nationwide."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923.png" />
        <meta property="og:url" content="https://tower923.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | PNG Engineering & Construction Experts" />
        <meta
          name="twitter:description"
          content="Delivering innovative and sustainable engineering and construction solutions across Papua New Guinea — Believing in Impossibilities."
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
            "description": "Tower 923 Ltd is a PNG-owned EPC contractor providing design, engineering, procurement, and construction services in civil, power, renewable energy, and telecommunications sectors.",
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

      {/* Your homepage sections go here */}

      <HeroSection />
      <SubHeroSection />
      <WhoweareSection />
      <ServicesSection />
      <ProjectsSection />
      <CallInSection />
    </div>
  );
};

export default Home;