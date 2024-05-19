import SectionDivider from "../../atoms/SectionDivider";
import { BlogData } from "../../data";
import BlogItem from "./BlogItem";

const BlogSection = () => {
  let delay = 0.2;

  return (
    <section
      className="p-4 relative min-h-[60vh] w-full max-w-[1224px] text-text-primary mb-[100px]"
      id="blog"
    >
      <div className="w-full flex flex-col items-start">
        <SectionDivider className="" />
        <h2 className="text-3xl lg:text-4xl text-left my-4">
          Our Recent
          <span className="font-black"> Blog Posts</span>
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {BlogData.map((item) => {
          delay += 0.25;
          return <BlogItem key={item.id} blog={item} delay={delay}></BlogItem>;
        })}
      </ul>
    </section>
  );
};

export default BlogSection;
