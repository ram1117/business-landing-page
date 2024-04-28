import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
  containerSize: string;
  sizes?: string;
  className?: string;
}

const ImageWrapper = ({
  src,
  alt,
  containerSize,
  sizes = "",
  className = "",
}: ImageWrapperProps) => {
  return (
    <div className={`${containerSize} relative`}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        className={`${className}`}
        fill
      />
    </div>
  );
};

export default ImageWrapper;
