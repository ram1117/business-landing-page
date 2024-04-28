import Link from "next/link";
import NavList from "./NavList";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 flex justify-between py-6 px-6 lg:px-16 w-full text-white z-[99]">
      <Link href="#home">
        <h2 className="font-comfortaa text-2xl font-bold track-wider">KRAM</h2>
      </Link>
      <div className="flex gap-6">
        <div className="lg:block hidden">
          <NavList />
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
