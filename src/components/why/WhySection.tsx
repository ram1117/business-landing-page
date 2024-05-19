import WhyContent from "./WhyContent";

const WhySection = () => {
  return (
    <section
      className="p-4 relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 min-h-[60vh] w-full max-w-[1224px] text-text-primary mb-[130px]"
      id="why"
    >
      <iframe
        className="w-5/6 lg:w-full aspect-square rounded-xl mx-auto animate-fadein"
        src="https://www.youtube.com/embed/cjrN-vru2h8?si=tIrzd8kRdFYKCgbU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <WhyContent />
    </section>
  );
};

export default WhySection;
