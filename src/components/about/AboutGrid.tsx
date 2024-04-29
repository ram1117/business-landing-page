import Link from "next/link";
import ImageWrapper from "../../atoms/ImageWrapper";
import SectionDivider from "../../atoms/SectionDivider";
import { StaticImageData } from "next/image";
import useIntersection from "../../hooks/useIntersection";

interface AboutGridProps {
  about: {
    boldTitle: string;
    title: string;
    content: string;
    image: StaticImageData;
  };
  imageToLeft?: boolean;
}

const AboutGrid = ({ about, imageToLeft = false }: AboutGridProps) => {
  const { containerRef, isIntersecting } = useIntersection({ threshold: 0.3 });
  return (
    <div
      className="w-full min-h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[100px]"
      ref={containerRef}
    >
      {isIntersecting && (
        <div
          className={` ${imageToLeft ? "animate-fadefromright order-2" : "animate-fadefromleft order-1"}`}
        >
          <SectionDivider className="!my-0" />
          <h2 className="text-3xl lg:text-4xl text-left my-4">
            <span className="font-black">{about.boldTitle} </span>
            {about.title}
          </h2>
          <p className="text-text-secondary my-8 w-4/5 text-left leading-8">
            {about.content}
          </p>
          <li className="w-max text-white py-2 px-6 bg-button hover:bg-button-hover rounded-md">
            <Link href="#contact">Get Started</Link>
          </li>
        </div>
      )}

      {isIntersecting && (
        <ImageWrapper
          src={about.image}
          alt="Doodle image"
          containerSize={`w-full h-[50vh] lg:h-full ${imageToLeft ? "animate-fadefromleft order-1" : "animate-fadefromright lg:order-2"}`}
          sizes="(max-width:768px) 90vw, 50vw"
        />
      )}
    </div>
  );
};

export default AboutGrid;
