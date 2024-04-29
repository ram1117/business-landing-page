import ImageWrapper from "../../atoms/ImageWrapper";
import Ayroui from "@/public/sponsors/ayroui.svg";
import Ecommerce from "@/public/sponsors/ecommerce-html.svg";
import Graygrids from "@/public/sponsors/graygrids.svg";
import LineIcons from "@/public/sponsors/lineicons.svg";
import UiDec from "@/public/sponsors/uideck.svg";

const Sponsors = () => {
  return (
    <div className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center my-12 w-full max-w-[1224px]">
      <div className="flex items-center justify-center">
        <ImageWrapper
          src={Ayroui}
          alt="Ayroui logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </div>
      <div className="flex items-center justify-center">
        <ImageWrapper
          src={Ecommerce}
          alt="Ecommerce logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </div>

      <div className="flex items-center justify-center">
        <ImageWrapper
          src={Graygrids}
          alt="Grayfrids logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </div>

      <div className="flex items-center justify-center">
        <ImageWrapper
          src={LineIcons}
          alt="LineIcons logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </div>

      <div className="flex items-center justify-center">
        <ImageWrapper
          src={UiDec}
          alt="UiDec logo"
          containerSize="h-4 md:h-6 w-full grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </div>
    </div>
  );
};

export default Sponsors;
