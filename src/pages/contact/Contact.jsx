import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import Message from "./Message";

function Team() {
  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Contact Us | Tower 923 Ltd - PNG Electrical & Engineering Company</title>
        <meta
          name="description"
          content="Get in touch with Tower 923 Ltd, Papua New Guinea's leading electrical and infrastructure engineering company. Contact our offices or send us a message about your project requirements."
        />
        <meta
          name="keywords"
          content="Tower 923, Tower923, contact PNG engineering company, electrical engineering contact PNG, project inquiry PNG, PNG infrastructure company, Tower 923 contact details"
        />
        <link rel="canonical" href="https://tower923.com/contact-us" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Contact Us | Tower 923 Ltd - PNG Electrical & Engineering Company" />
        <meta
          property="og:description"
          content="Reach out to Tower 923 Ltd, Papua New Guinea's leading electrical engineering and infrastructure company. Get in touch with our offices or submit your project requirements online."
        />
        <meta property="og:image" content="https://tower923.com/assets/Tower923_Contact.png" />
        <meta property="og:url" content="https://tower923.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tower 923 Ltd" />

        {/* Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tower 923 Ltd | Contact PNG Electrical Engineering Experts" />
        <meta
          name="twitter:description"
          content="Contact Tower 923 Ltd for electrical and infrastructure engineering projects across Papua New Guinea. Get in touch via phone, email, or WhatsApp."
        />
        <meta
          name="twitter:image"
          content="https://tower923.com/assets/Tower923_Contact.webp"
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
            "description": "Contact Tower 923 Ltd, Papua New Guinea's leading electrical and infrastructure engineering company, for inquiries, project requirements, or consultations.",
            "foundingDate": "2018",
            "telephone": "+675 70694334",
            "email": "dougsiwi18@gmail.com",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Rarangau, Sect 42 Lot 63",
                "addressLocality": "Mt. Hagen",
                "addressRegion": "WHP",
                "postalCode": "P.O. Box 1-3",
                "addressCountry": "Papua New Guinea"
              }
            ],
            "areaServed": "Papua New Guinea",
            "sameAs": [
              "https://www.facebook.com/tower923",
              "https://www.linkedin.com/company/tower923"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+675 70694334",
                "contactType": "Customer Service",
                "areaServed": "PG"
              },
              {
                "@type": "ContactPoint",
                "email": "dougsiwi18@gmail.com",
                "contactType": "Customer Service",
                "areaServed": "PG"
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Your Contact page components go here */}
      <HeroSection />
      <Message />
    </div>
  );
};

export default Team;