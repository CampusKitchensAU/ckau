import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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

export default socialLinks;
