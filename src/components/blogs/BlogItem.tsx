import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";

interface BlogItemProps {
  isIntersecting: boolean;
  blog: {
    id: number;
    content: string;
    image: StaticImageData;
    date: string;
    href: string;
  };
}

const BlogItem = ({ isIntersecting, blog }: BlogItemProps) => {
  if (!isIntersecting) return <li></li>;

  return (
    <li className="animate-fadein ">
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
      <p className="text-xl mb-4">{blog.content}</p>
      <Link
        href={blog.href}
        className="text-primary hover:animate-expandletters text-lg"
      >
        Read More
      </Link>
    </li>
  );
};

export default BlogItem;
