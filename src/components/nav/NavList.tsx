import Link from "next/link";

interface NavListProps {
  className?: string;
  onClick?: null | (() => void);
}

const NavList = ({ className = "", onClick = null }: NavListProps) => {
  return (
    <ul
      className={`flex gap-6 lg:flex-row flex-col items-center text-base font-medium ${className}`}
    >
      <li className="p-2">
        <Link
          href="#home"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          Home
        </Link>
      </li>
      <li className="p-2">
        <Link
          href="#features"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          Features
        </Link>
      </li>

      <li className="p-2">
        <Link
          href="#about"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          About
        </Link>
      </li>

      <li className="p-2">
        <Link
          href="#why"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          Why
        </Link>
      </li>

      <li className="p-2">
        <Link
          href="#team"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          Team
        </Link>
      </li>

      <li
        className="p-2"
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <Link href="#blog">Blog</Link>
      </li>

      <li className="text-white py-2 px-6 bg-button hover:bg-button-hover rounded-md">
        <Link
          href="#contact"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          Get Started
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
