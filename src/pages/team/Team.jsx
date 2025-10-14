import { Helmet } from "react-helmet-async";

import CallInSection from "./CallInSection";
import HeroSection from "./HeroSection";
import LeadershipSection from "./LeadershipSection";
import NumberSection from "./NumberSection";
import WorkforceSection from "./WorkforceSection";


function Team() {
  return(
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Our Team | Tower 923 Ltd - Electrical & Engineering Experts PNG</title>
        <meta
          name="description"
          content="Meet the experienced team of Tower 923 Ltd, driving electrical and infrastructure development across Papua New Guinea. Our skilled workforce includes engineers, project managers, and technicians with decades of combined expertise."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, PNG engineering team, electrical engineers PNG, project managers PNG, renewable energy experts PNG, civil engineers PNG, transmission line engineers PNG, skilled workforce PNG"
        />
        <link rel="canonical" href="https://tower923.com/our-team" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Our Team | Tower 923 Ltd - Electrical & Engineering Experts PNG" />
        <meta
          property="og:description"
          content="Meet Tower 923 Ltd's leadership and skilled workforce driving electrical and infrastructure projects across Papua New Guinea."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Team.png" />
        <meta property="og:url" content="https://tower923.com/our-team" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Our Experienced Team PNG" />
        <meta
          name="twitter:description"
          content="Discover the talented team of Tower 923 Ltd, including engineers, project managers, and technicians driving electrical and infrastructure development across Papua New Guinea."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Team.webp"
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
            "description": "Meet the leadership and skilled workforce of Tower 923 Ltd, driving electrical and infrastructure projects across Papua New Guinea, including engineers, technicians, and project managers with decades of experience.",
            "foundingDate": "2018",
            "telephone": "+675 70694334",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Papua New Guinea"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Douglas Ekya Siwi",
                "jobTitle": "Director & Project Manager",
                "alumniOf": "M.Eng. Electrical Engineering"
              },
              {
                "@type": "Person",
                "name": "Joshua Yari",
                "jobTitle": "Project Engineer",
                "alumniOf": "Electrical Engineering"
              },
              {
                "@type": "Person",
                "name": "Benjamin William",
                "jobTitle": "Power Engineer",
                "alumniOf": "Power Systems Engineering"
              },
              {
                "@type": "Person",
                "name": "Samson Kapia",
                "jobTitle": "Transmission Line Engineer",
                "alumniOf": "Transmission Engineering"
              },
              {
                "@type": "Person",
                "name": "Joliken Isafa",
                "jobTitle": "Construction Manager",
                "alumniOf": "Construction Management"
              },
              {
                "@type": "Person",
                "name": "Robert Simon",
                "jobTitle": "Accounts Manager",
                "alumniOf": "Financial Management"
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

      {/* Your Team page components go here */}
      <HeroSection />
      <LeadershipSection />
      <WorkforceSection />
      <NumberSection />
      <CallInSection />
    </div>
  );
};

export default Team;