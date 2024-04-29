import ImageWrapper from "../../atoms/ImageWrapper";
import Bubbles from "../Bubbles";
import HeroImage from "@/public/header-hero.png";
import Sponsors from "./Sponsors";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-main-bg bg-no-repeat bg-cover flex flex-col items-center justify-start mb-[100px]"
      id="home"
    >
      <Bubbles />
      <div className="px-4 mt-32 flex flex-col gap-4 items-center justify-center text-white z-[20] text-center">
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight animate-fadefrombottom animate-delay-150">
          Basic - SaaS Landing Page
        </h1>
        <h2 className="text-3xl lg:text-4xl font-bold animate-fadefrombottom animate-delay-500">
          Kickstart Your SaaS or App Site
        </h2>
        <h3 className="my-4 animate-fadefrombottom animate-delay-1000">
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor{" "}
        </h3>
      </div>
      <ImageWrapper
        src={HeroImage}
        alt="Laptop image"
        containerSize="w-11/12 lg:w-5/6 aspect-video max-w-[800px] my-8 z-[10]"
        sizes="(max-width:768px) 90vw, 60vw"
      />
      <Sponsors />
    </section>
  );
};

export default HeroSection;
