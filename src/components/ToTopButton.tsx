"use client";
import ArrowIcon from "@/public/icons/uparrow.svg";
import ImageWrapper from "../atoms/ImageWrapper";
import useHasScrolled from "../hooks/useHasScrolled";

const ToTopButton = () => {
  const hasScrolled = useHasScrolled();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!hasScrolled) return <></>;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 aspect-square bg-button hover:bg-button-hover rounded-md z-[99] p-2"
    >
      <ImageWrapper
        src={ArrowIcon}
        alt="To top icon"
        containerSize="h-6 w-6 lg:w-8 lg:w-8"
      ></ImageWrapper>
    </button>
  );
};

export default ToTopButton;
