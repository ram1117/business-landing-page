"use client";

import AboutGrid from "./AboutGrid";
import { AboutData } from "../../data";

const AboutSection = () => {
  return (
    <section
      className="p-4 relative min-h-[60vh] w-full flex flex-col items-center justify-center max-w-[1224px] text-text-primary mb-[100px]"
      id="about"
    >
      <AboutGrid about={AboutData[0]}></AboutGrid>
      <AboutGrid about={AboutData[1]} imageToLeft={true}></AboutGrid>
      <AboutGrid about={AboutData[2]}></AboutGrid>
    </section>
  );
};

export default AboutSection;
