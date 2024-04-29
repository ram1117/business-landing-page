import { useEffect, useRef, useState } from "react";

const useIntersection = (threshold: { threshold: number }) => {
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, threshold);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  });

  return { containerRef, isIntersecting };
};

export default useIntersection;
