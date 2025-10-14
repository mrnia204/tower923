import React from "react";
export const AnimationVariants = {
  "fade-up" : {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6}}
  },
  "fade-down" : {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6}}
  },
  "slide-left" : {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6}}
  },
  "slide-right" : {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6}}
  },
  "zoom-in" : {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6}}
  },

};