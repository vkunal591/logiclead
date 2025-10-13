import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const SocialMediaLinks = ({ size }: { size?: number }) => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/4uconsultantservice",
      icon: (
        <FaInstagram
          size={size ?? 20}
          className="text-white hover:text-primary"
        />
      ),
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/4uconsultantservice/",
      icon: (
        <FaFacebook
          size={size ?? 20}
          className="text-white hover:text-primary"
        />
      ),
      label: "Facebook",
    },
    // {
    //   href: "https://twitter.com",
    //   icon: (
    //     <FaTwitter
    //       size={size ?? 20}
    //       className="text-white hover:text-primary"
    //     />
    //   ),
    //   label: "Twitter",
    // },
    {
      href: "https://www.linkedin.com/in/4u-consultant-service",
      icon: (
        <FaLinkedinIn
          size={size ?? 20}
          className="text-white hover:text-primary"
        />
      ),
      label: "LinkedIn",
    },
    {
      href: "4uconsultantservice@gmail.com",
      icon: (
        <FaEnvelope
          size={size ?? 20}
          className="text-white hover:text-primary"
        />
      ),
      label: "Email",
    },
  ];

  return (
    <div className="flex justify-start space-x-6 mt-2 text-xl">
      {socialLinks.map((social) => (
        <Link
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          key={social.label}
          href={social.href}
          passHref
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
