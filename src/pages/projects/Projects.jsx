import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import NumberSection from "./NumberSection";
import ProjectSections from "./ProjectSection";


function Projects() {
  return(
    <div className="min-h-screen">
      <HeroSection />
      <ProjectSections />
      <HighlightsSection />
      <NumberSection />
    </div>
  );
};

export default Projects;