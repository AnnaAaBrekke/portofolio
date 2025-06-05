/**
 * Header component displays the top navigation bar with animated link styling.
 * Shows a skeleton loader while simulating loading state.
 *
 * @component
 * @returns {JSX.Element} The rendered header or a skeleton version during load.
 */

import React, { useEffect, useState } from "react";
import { HeaderSkeleton } from "../utils/Skeleton";

const Header = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HeaderSkeleton />;
  }

  // Real header
  return (
    <header className="bg-gradient-to-r from-secondary via-button to-primary text-text-secondary shadow-md">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <ul className="flex gap-5 md:gap-8 text-sm md:text-base font-medium tracking-wide">
          {[
            { label: "My Journey", href: "#timeline" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative inline-block text-text-secondary hover:text-tertiary transition duration-200"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-tertiary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
