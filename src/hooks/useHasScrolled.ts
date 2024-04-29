import { useEffect, useState } from "react";
const OFFSET = 30;
const useHasScrolled = () => {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) setOnScroll(true);
      else setOnScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return onScroll;
};

export default useHasScrolled;
