const Header = () => {
  return (
    <header className="bg-gradient-to-r from-secondary via-button to-primary text-text-secondary shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <ul className="flex gap-5 md:gap-8 text-sm md:text-base font-medium tracking-wide">
          {[
            { label: "My Journey", href: "#timeline" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Media", href: "#media" },
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
