"use client";

import { useEffect } from "react";
import SectionDivider from "../../atoms/SectionDivider";
import { FeaturesData } from "../../data";
import FeaturesItem from "./FeaturesItem";
import useIntersection from "../../hooks/useIntersection";

const FeatureSection = () => {
  const { containerRef, isIntersecting } = useIntersection({ threshold: 1 });
  useEffect(() => {
    console.log(isIntersecting);
  }, [isIntersecting]);
  return (
    <section
      className="relative min-h-[70vh] w-full flex flex-col items-center justify-start max-w-[1224px] text-text-primary mb-[100px]"
      id="features"
      ref={containerRef}
    >
      <SectionDivider />
      <h2 className="text-3xl lg:text-4xl text-center">
        <span className="font-black">Clean and simple design</span>, Comes with
        everything you need to get started!
      </h2>

      {isIntersecting && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-28 gap-8 animate-fadein">
          {FeaturesData.map((item) => (
            <FeaturesItem
              service={item}
              key={item.id}
              className="anim-delay-100"
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default FeatureSection;
