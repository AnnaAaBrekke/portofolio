/**
 * SidebarProfile component renders a floating profile button that toggles a sidebar.
 * The sidebar displays personal info, language skills, and contact links.
 * Includes skeleton loaders for the profile image while loading.
 *
 * @component
 * @returns {JSX.Element} The sidebar profile UI with contact and language information.
 */

import { useState } from "react";
import { FiChevronDown, FiX, FiMapPin, FiGlobe, FiMail } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SkeletonImageCircle } from "../utils/Skeleton";

function SidebarProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Profile Toggle */}
      <div
        className="fixed top-2 right-4 flex items-center gap-2 cursor-pointer z-50"
        onClick={toggleSidebar}
      >
        {!thumbnailLoaded && <SkeletonImageCircle />}
        <img
          src="/images/profile.JPG"
          alt="Profile thumbnail"
          onLoad={() => setThumbnailLoaded(true)}
          className={`w-10 h-10 rounded-full object-cover border-2 border-white shadow transition-opacity duration-300 ${
            thumbnailLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {isOpen ? (
          <FiX className="text-text hover:text-primary text-xl transition" />
        ) : (
          <FiChevronDown className="text-text hover:text-primary text-xl transition" />
        )}
      </div>

      {/* Sidebar and Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={closeSidebar}>
          <aside
            className="fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl z-40 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mt-6">
              {!profileLoaded && (
                <div className="w-32 h-36 mx-auto mb-4">
                  <SkeletonImageCircle size="w-32 h-36" />
                </div>
              )}
              <img
                src="/images/profile.jpg"
                alt="Profile"
                onLoad={() => setProfileLoaded(true)}
                className={`w-32 h-36 rounded-full mx-auto mb-4 border-2 border-gray-300 shadow transition-opacity duration-300 ${
                  profileLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              <h2 className="text-xl font-semibold">Anna Aasprong Brekke</h2>
              <p className="text-sm text-gray-500 mt-1">26 years</p>
              <p className="text-sm text-gray-500 flex justify-center items-center gap-2 mt-1">
                <FiMapPin className="text-primary" />
                Drammen, Norway
              </p>
            </div>

            {/* Language skills */}
            <div className="mt-6 space-y-2 text-center text-sm">
              <LanguageSkill language="Norwegian" rating="★★★★★" />
              <LanguageSkill language="English" rating="★★★★☆" />
            </div>

            {/* Contact links */}
            <div className="mt-8 space-y-4 text-sm text-center">
              <ContactLink
                icon={<FiMail />}
                href="mailto:annabrekke98@gmail.com"
              >
                annabrekke98@gmail.com
              </ContactLink>
              <ContactLink
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/anna-aasprong-brekke-a571132b0/"
              >
                LinkedIn
              </ContactLink>
              <ContactLink
                icon={<FaInstagram />}
                href="https://www.instagram.com/annabrekke/"
              >
                Instagram
              </ContactLink>
              <ContactLink
                icon={<FaGithub />}
                href="https://github.com/AnnaAaBrekke"
              >
                GitHub
              </ContactLink>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function ContactLink({ href, icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:underline hover:text-black transition flex items-center justify-center gap-2"
    >
      {icon}
      {children}
    </a>
  );
}

function LanguageSkill({ language, rating }) {
  return (
    <p>
      <FiGlobe className="inline text-primary mr-1" />
      {language}: <span className="text-secondary">{rating}</span>
    </p>
  );
}

export default SidebarProfile;
