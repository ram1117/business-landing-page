import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";

interface FeaturesItemProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: StaticImageData;
    href: string;
  };
}

const FeaturesItem = ({ service }: FeaturesItemProps) => {
  return (
    <li className="py-4 px-4 max-w-[340px] lg:max-w-[540px] lg:px-6 lg:py-16 group flex flex-col items-center justify-center gap-8 rounded-md shadow-md hover:animate-showborder">
      <div className="relative w-4/12 max-w-[140px] aspect-square">
        <ImageWrapper
          src={service.icon}
          alt="service icon"
          containerSize="w-full aspect-square z-[80] group-hover:animate-slightspin"
        />
      </div>

      <h3 className="text-3xl font-black">{service.title}</h3>
      <p className="text-center text-text-secondary">{service.description}</p>
      <Link
        href={service.href}
        className="text-primary hover:animate-expandletters text-lg"
      >
        Read More
      </Link>
    </li>
  );
};

export default FeaturesItem;
