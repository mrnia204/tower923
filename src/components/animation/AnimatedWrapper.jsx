// components/AnimatedWrapper.jsx
import { motion } from "framer-motion";
import { AnimationVariants } from "./AnimationVariants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


function AnimatedWrapper({ 
  children, 
  className = "", 
  animation="fade-up", // default effect
  once = false, // configurabel: run once or repeat
}) {
  
  const selectedVariant = AnimationVariants[animation] || AnimationVariants["fade-up"];
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={selectedVariant}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={selectedVariant}>{children}</motion.div>
      }
    </motion.div>
  )
};

export default AnimatedWrapper;