import { StaticImageData } from "next/image";
import ImageWrapper from "../../atoms/ImageWrapper";
import Link from "next/link";

interface MemberProps {
  className?: string;
  isIntersecting: boolean;
  detail: {
    id: number;
    name: string;
    title: string;
    href: string;
    image: StaticImageData;
  };
}

const Member = ({ className = "", detail, isIntersecting }: MemberProps) => {
  if (!isIntersecting) return <li></li>;

  return (
    <li
      className={`${className} animate-fadein w-full max-w-[300px] md:max-w-[500px] mx-auto rounded-lg flex flex-col items-center justify-center gap-4 pb-8 shadow-lg`}
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
    </li>
  );
};

export default Member;
