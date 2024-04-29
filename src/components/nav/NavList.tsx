import Link from "next/link";

interface NavListProps {
  className?: string;
}

const NavList = ({ className = "" }: NavListProps) => {
  return (
    <ul
      className={`flex gap-6 lg:flex-row flex-col items-center text-base font-medium ${className}`}
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

      <li className="text-white py-2 px-6 bg-button hover:bg-button-hover rounded-md">
        <Link href="#contact">Get Started</Link>
      </li>
    </ul>
  );
};

export default NavList;
