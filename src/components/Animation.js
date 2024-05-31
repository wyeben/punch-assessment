import React from "react";
import { useInView } from "react-intersection-observer";
import "../App.css"; 

const Animation = ({ className, children, animation }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div
      ref={ref}
      className={`${className} ${animation} ${inView ? "fade-in-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default Animation;
