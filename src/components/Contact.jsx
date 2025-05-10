import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FiMail />,
    label: "annabrekke98@gmail.com",
    href: "mailto:annabrekke98@gmail.com",
    className: "text-link",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anna-aasprong-brekke-a571132b0/",
    className: "text-link",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/annabrekke/",
    className: "text-pink-600",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/AnnaAaBrekke",
    className: "text-text",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="text-center mb-16 px-4">
      {/* Divider */}
      <div className="w-full max-w-3xl mx-auto border-t border-border mb-10"></div>

      <h2 className="section-header mb-6">Contact Me</h2>
      <div className="flex flex-col items-center gap-4">
        {contacts.map(({ icon, label, href, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${className} hover:underline transition`}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
