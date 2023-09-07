import { useEffect, useRef, useState } from "react";
import propTypes from 'prop-types';

ScrollAnimate.propTypes = {
    children: propTypes.node.isRequired,
    animateClass: propTypes.string.isRequired,
  };

export default function ScrollAnimate({animateClass, children}) {
    const animatedElementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, 
      };
  
      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animatedElementRef.current.classList.add(animateClass); 
            observer.unobserve(entry.target); 
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
  
      if (animatedElementRef.current) {
        observer.observe(animatedElementRef.current);
      }
  
      return () => {
        if (animatedElementRef.current) {
          observer.unobserve(animatedElementRef.current);
        }
      };
    }, [animateClass]);
    return (
        <div ref={animatedElementRef}  className={`${isVisible ? animateClass : 'opacity-0'} w-full`}>
            {children}
        </div>
    )
}
