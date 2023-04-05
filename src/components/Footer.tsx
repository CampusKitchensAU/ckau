import Image from "next/image";
import Link from "next/link";
import navigation, { type NavLinks } from "~/data/navLinks";
import socialLinks from "~/data/socialLinks";

const contactLinks: NavLinks[] = [
  {
    name: "Lupton Residence Hall",
    href: "https://goo.gl/maps/zfLEZ5fABSZF6UULA",
  },
  {
    name: "Email Us",
    href: "mailto:theckau@gmail.com",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-12 w-auto"
              src="/logos/ckau-logo-rect-nobg-white.png"
              alt="Company name"
              height={200}
              width={100}
            />
            <p className="text-sm leading-6 text-gray-300">
              Fighting food waste and hunger in the East Central Alabama
              community.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Contact Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {contactLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Site Map
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <Link href="https://auburn.edu/" target="_blank" rel="noopener">
                <Image
                  className="h-14 w-auto"
                  src="/logos/AULogo.png"
                  alt="Company name"
                  height={200}
                  width={100}
                />
              </Link>
              <Link
                href="https://auburn.campuslabs.com/engage/organization/thecampuskitchenatau"
                target="_blank"
                rel="noopener"
                className="mt-10 md:mt-0"
              >
                <Image
                  className="h-14 w-auto"
                  src="/logos/AUInvolveLogo.png"
                  alt="Company name"
                  height={200}
                  width={100}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 justify-between border-t border-white/10 pt-8 sm:mt-20 md:flex lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Campus Kitchen AU. All Rights
            Reserved.
          </p>
          <Link
            href="https://www.linkedin.com/in/trevor-aupperle/"
            target="_blank"
            rel="noopener"
            className="text-xs leading-5 text-gray-500 hover:underline"
          >
            Proudly built by Trevor Aupperle.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
