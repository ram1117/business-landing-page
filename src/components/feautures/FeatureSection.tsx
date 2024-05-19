"use client";

import SectionDivider from "../../atoms/SectionDivider";
import { FeaturesData } from "../../data";
import FeaturesItem from "./FeaturesItem";
import useIntersection from "../../hooks/useIntersection";
import { motion } from "framer-motion";

const FeatureSection = () => {
  let delay = 0.3;
  const { containerRef, isIntersecting } = useIntersection({ threshold: 1 });

  return (
    <section
      className="p-4 relative min-h-[70vh] w-full flex flex-col items-center justify-start max-w-[1224px] text-text-primary mb-[50px]"
      id="features"
      ref={containerRef}
    >
      <SectionDivider />
      <motion.h2
        className="text-3xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.15 }}
      >
        <span className="font-black">Clean and simple design</span>, Comes with
        everything you need to get started!
      </motion.h2>

      {isIntersecting && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-12 gap-8 animate-fadein">
          {FeaturesData.map((item) => {
            delay += 0.15;
            return <FeaturesItem service={item} key={item.id} delay={delay} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default FeatureSection;
