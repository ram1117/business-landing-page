"use client";
import ImageWrapper from "../../atoms/ImageWrapper";
import Bubbles from "../Bubbles";
import HeroImage from "@/public/header-hero.png";
import Sponsors from "./Sponsors";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-main-bg bg-no-repeat bg-cover flex flex-col items-center justify-start mb-[100px]"
      id="home"
    >
      <Bubbles />

      <motion.div
        className="px-4 mt-32 flex flex-col gap-4 items-center justify-center text-white z-[20] text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight">
          Basic - SaaS Landing Page
        </h1>
        <h2 className="text-3xl lg:text-4xl font-bold">
          Kickstart Your SaaS or App Site
        </h2>
        <h3 className="my-4">
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor{" "}
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-11/12 lg:w-5/6 aspect-video max-w-[800px] my-8 z-[10]"
      >
        <ImageWrapper
          src={HeroImage}
          alt="Laptop image"
          containerSize=" h-full w-full "
          sizes="(max-width:768px) 90vw, 60vw"
        />
      </motion.div>

      <Sponsors />
    </section>
  );
};

export default HeroSection;
