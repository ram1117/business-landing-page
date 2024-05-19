import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeaturesItemProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: StaticImageData;
    href: string;
  };
  delay: number;
  className?: string;
}

const FeaturesItem = ({ service, delay }: FeaturesItemProps) => {
  return (
    <motion.li
      className="py-4 px-4 max-w-[340px] lg:max-w-[540px] lg:px-6 lg:py-16 group flex flex-col items-center justify-center gap-8 rounded-md shadow-md hover:animate-showborder"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
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
    </motion.li>
  );
};

export default FeaturesItem;
