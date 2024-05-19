import ImageWrapper from "../../atoms/ImageWrapper";
import Ayroui from "@/public/sponsors/ayroui.svg";
import Ecommerce from "@/public/sponsors/ecommerce-html.svg";
import Graygrids from "@/public/sponsors/graygrids.svg";
import LineIcons from "@/public/sponsors/lineicons.svg";
import UiDec from "@/public/sponsors/uideck.svg";
import { motion } from "framer-motion";

const fadeinitial = { opacity: 0 };

const Sponsors = () => {
  return (
    <div className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center my-12 w-full max-w-[1224px]">
      <motion.div
        className="flex items-center justify-center"
        initial={fadeinitial}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0 }}
      >
        <ImageWrapper
          src={Ayroui}
          alt="Ayroui logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        initial={fadeinitial}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <ImageWrapper
          src={Ecommerce}
          alt="Ecommerce logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={fadeinitial}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <ImageWrapper
          src={Graygrids}
          alt="Grayfrids logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={fadeinitial}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <ImageWrapper
          src={LineIcons}
          alt="LineIcons logo"
          containerSize="h-6 md:h-12 w-32 grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={fadeinitial}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <ImageWrapper
          src={UiDec}
          alt="UiDec logo"
          containerSize="h-4 md:h-6 w-full grayscale hover:grayscale-0"
          sizes="(max-width:768px) 50vw, 30vw"
        />
      </motion.div>
    </div>
  );
};

export default Sponsors;
