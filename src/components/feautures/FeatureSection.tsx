import SectionDivider from "../../atoms/SectionDivider";
import { FeaturesData } from "../../data";
import FeaturesItem from "./FeaturesItem";

const FeatureSection = () => {
  return (
    <section
      className="relative min-h-[70vh] w-full flex flex-col items-center justify-start max-w-[1224px] text-text-primary mb-[100px]"
      id="features"
    >
      <SectionDivider />
      <h2 className="text-3xl lg:text-4xl text-center">
        <span className="font-black">Clean and simple design</span>, Comes with
        everything you need to get started!
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-28 gap-8">
        {FeaturesData.map((item) => (
          <FeaturesItem service={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default FeatureSection;
