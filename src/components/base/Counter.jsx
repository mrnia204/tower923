import React, { useEffect, useRef, useState } from "react";

const Counter = ({targetNumber, duration = 2000, className = "", suffix="", prefix=""}) => {
  const[count, setCount] = useState(0);
  const ref = useRef(null);  
  
  useEffect(() => {
    let timer; 

    const animate = () => {
      let start = 0;
      const increment = targetNumber / (duration / 16)
      timer = setInterval(() => {
        start+= increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
    }
  

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          setCount(0);
          clearInterval(timer);
        }
      },
      {threshold: 0.3}
    );

    if (ref.current) {
      observer.observe(ref.current);
    };

  },[targetNumber, duration])
  
  return (
    <p className={className} ref={ref}>{prefix}{count}{suffix}</p>
  )
}

export default Counter;