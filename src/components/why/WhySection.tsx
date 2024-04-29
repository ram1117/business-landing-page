"use client";

import SectionDivider from "../../atoms/SectionDivider";
import useIntersection from "../../hooks/useIntersection";

const WhySection = () => {
  const { containerRef, isIntersecting } = useIntersection({ threshold: 0.4 });

  return (
    <section
      className="p-4 relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 min-h-[60vh] w-full max-w-[1224px] text-text-primary mb-[100px]"
      id="why"
      ref={containerRef}
    >
      {isIntersecting && (
        <iframe
          className="w-5/6 lg:w-full aspect-square rounded-xl mx-auto animate-fadein"
          src="https://www.youtube.com/embed/cjrN-vru2h8?si=tIrzd8kRdFYKCgbU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}

      {isIntersecting && (
        <div className="animate-fadein">
          <SectionDivider className="!my-0" />
          <h2 className="text-3xl lg:text-4xl text-left my-4">
            <span className="font-black">Cool facts </span>
            about this app
          </h2>
          <p className="text-text-secondary my-8 text-left leading-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="w-full grid grid-cols-3 my-16">
            <div className="relative h-[15vh] flex flex-col items-center justify-center text-white">
              <div className="absolute rotate-[135deg] bg-gradient-to-b from-[#30c0bf] to-[#139ed1] w-full h-full left-0 top-0 rounded-full z-[-10]">
                &nbsp;
              </div>
              <h5 className="text-2xl font-bold">125K</h5>
              <p className="text-sm">Downloads</p>
            </div>
            <div className="relative h-[15vh] flex flex-col items-center justify-center text-white">
              <div className="absolute rotate-[135deg] bg-gradient-to-b from-[#fe8366] to-[#fe6e99] w-full h-full left-0 top-0 rounded-full z-[-10]">
                &nbsp;
              </div>
              <h5 className="text-2xl font-bold">87K</h5>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="relative h-[15vh] flex flex-col items-center justify-center text-white">
              <div className="absolute rotate-[135deg] bg-gradient-to-b from-[#3620c3] to-[#2e7fee] w-full h-full left-0 top-0 rounded-full z-[-10]">
                &nbsp;
              </div>
              <h5 className="text-2xl font-bold">59K</h5>
              <p className="text-sm">User Rating</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhySection;
