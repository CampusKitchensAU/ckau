import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type NavLinks = {
  name: string;
  href: string;
};

const navigation: NavLinks[] = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Our Team", href: "/team" },
  { name: "Community Partners", href: "/partners" },
];

type SocialLinks = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const socialLinks: SocialLinks[] = [
  {
    name: "Campus Kitchen's Instagram",
    href: "https://www.instagram.com/campuskitchen_au/",
    icon: <FaInstagram className="h-6 w-6" />,
  },
  {
    name: "Campus Kitchen's Facebook",
    href: "https://m.facebook.com/TheCampusKitchenAU/",
    icon: <FaFacebook className="h-6 w-6" />,
  },
  {
    name: "Campus Kitchen's LinkedIn",
    href: "https://www.linkedin.com/company/ckau/",
    icon: <FaLinkedin className="h-6 w-6" />,
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z=[1000] fixed w-full bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link href="/" className="-m-1.5 h-8 p-1.5">
          <span className="sr-only">
            The Campus Kitchen at Auburn University
          </span>
          <Image
            className="relative -top-[18px] h-14 w-auto overflow-hidden"
            src="/logos/ckau-logo-rect-nobg.png"
            alt="The Campus Kitchen at Auburn University Logo"
            width={150}
            height={100}
          />
        </Link>
        <div className="flex flex-1 justify-end gap-2">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
      {/** Dialog */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <MdClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Link href="/" className="-m-1.5 h-8 p-1.5">
              <span className="sr-only">
                The Campus Kitchen at Auburn University
              </span>
              <Image
                className="relative -top-[18px] h-14 w-auto overflow-hidden"
                src="/logos/ckau-logo-rect-nobg.png"
                alt="The Campus Kitchen at Auburn University Logo"
                width={150}
            height={100}
              />
            </Link>
            <div className="flex flex-1 justify-end gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
