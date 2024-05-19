"use client";

import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

interface MemberProps {
  delay: number;
  detail: {
    id: number;
    name: string;
    title: string;
    href: string;
    image: StaticImageData;
  };
}

const Member = ({ detail, delay }: MemberProps) => {
  return (
    <motion.li
      className="w-full max-w-[300px] md:max-w-[500px] mx-auto rounded-lg flex flex-col items-center justify-center gap-4 pb-8 shadow-lg"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <ImageWrapper
        src={detail.image}
        alt="Team Member Image"
        containerSize="w-full aspect-square"
        className="rounded-t-xl"
        sizes="(max-width:768px) 80vw, 40vw"
      ></ImageWrapper>
      <Link href={detail.href}>
        <h3 className="text-2xl font-bold">{detail.name}</h3>
      </Link>

      <h4 className="font-sm">{detail.title}</h4>
    </motion.li>
  );
};

export default Member;
