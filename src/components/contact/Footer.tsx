import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto px-4 py-16 max-w-[1224px] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 text-white">
        <div className="col-span-1">
          <h2 className="font-bungee text-4xl font-bold track-wider mb-8">
            KRAM
          </h2>
          <p>
            Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.{" "}
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3">
          <div className="mb-8">
            <h4 className="text-3xl font-bold mb-2 lg:mb-8">Quick Links</h4>
            <ul className="flex flex-wrap lg:flex-col gap-3 lg:gap-6 text-lg">
              <li>
                <Link href="/">Site Map</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Refund Policy</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-3xl font-bold mb-2 lg:mb-8">Company</h4>
            <ul className="flex flex-wrap lg:flex-col gap-3 lg:gap-6 text-lg">
              <li>
                <Link href="/">Team</Link>
              </li>
              <li>
                <Link href="/">Corporate Policy</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-3xl font-bold mb-2 lg:mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-1 lg:gap-6 text-lg">
              <li>+91 9000044444</li>
              <li>123 Stree New York City , United States Of America 750.</li>
              <li>info@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
