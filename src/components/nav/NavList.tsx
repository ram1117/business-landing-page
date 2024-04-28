import Link from "next/link";
import { BUTTON_STYLE } from "../../constants";

interface NavListProps {
  className?: string;
}

const NavList = ({ className = "" }: NavListProps) => {
  return (
    <ul
      className={`flex gap-6 lg:flex-row flex-col items-center text-base ${className}`}
    >
      <li className="p-2">
        <Link href="#home">Home</Link>
      </li>
      <li className="p-2">
        <Link href="#features">Features</Link>
      </li>

      <li className="p-2">
        <Link href="#about">About</Link>
      </li>

      <li className="p-2">
        <Link href="#why">Why</Link>
      </li>

      <li className="p-2">
        <Link href="#tean">Team</Link>
      </li>

      <li className="p-2">
        <Link href="#blog">Blog</Link>
      </li>

      <li className={`${BUTTON_STYLE}`}>
        <Link href="#contact">Get Started</Link>
      </li>
    </ul>
  );
};

export default NavList;
