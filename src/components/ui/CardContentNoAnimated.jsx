import AnimatedWrapper from "../animation/AnimatedWrapper";

function CardContent({title, children, className="", content}) {
  return(
    <AnimatedWrapper animation="fade-down" className="text-center mb-16">
      <h2 className={`${className} text-2xl md:text-4xl font-bold text-gray-900 mb-4`}>{title}</h2>
      <p className={`${className} text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-8`}>{content}</p>
      {children && <p className="text-center gap-4">{children}</p>}
    </AnimatedWrapper>
  );
};

export default CardContent;