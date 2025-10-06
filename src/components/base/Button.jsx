import AnimatedWrapper from "../animation/AnimatedWrapper";

function Button({className, children}) {
  return (
    <AnimatedWrapper>
      <button type="button" className={`${className} font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap px-4 py-2 md:px-8 md:py-4 text-lg w-full sm:w-auto`}>
        {children}
      </button>
    </AnimatedWrapper>
  );
};

export default Button;