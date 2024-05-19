"use client";

import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogItemProps {
  delay: number;
  blog: {
    id: number;
    content: string;
    image: StaticImageData;
    date: string;
    href: string;
  };
}

const BlogItem = ({ delay, blog }: BlogItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <ImageWrapper
        src={blog.image}
        alt="Blog image"
        containerSize="h-[340px] w-full"
        sizes="(max-width:768px) 90vw, 50vw"
      ></ImageWrapper>
      <div className="flex justify-between items-center text-text-secondary my-4 text-lg">
        <p>Author: Admin</p>
        <p>{blog.date}</p>
      </div>
      <p className="text-xl mb-4 hover:text-blue-800">{blog.content}</p>
      <Link
        href={blog.href}
        className="text-primary hover:animate-expandletters text-lg"
      >
        Read More
      </Link>
    </motion.li>
  );
};

export default BlogItem;
