/**
 * Contact component displays a list of contact methods (email, social media)
 * with icons and links. The data is sourced from a static array and rendered
 * as a list of styled anchor tags.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact section.
 */

import { contacts } from "../data/contacts";
import { IconMap } from "../utils/iconMap";

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
            {IconMap[icon]}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
