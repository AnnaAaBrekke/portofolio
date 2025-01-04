document.addEventListener("DOMContentLoaded", () => {
  // Dropdown functionality
  const setupDropdown = () => {
    const dropdownButton = document.getElementById("profileDropdown");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeSidebar = document.getElementById("closeSidebar");

    if (!dropdownButton || !sidebarMenu || !closeSidebar) {
      console.error("Dropdown elements not found! Check your HTML IDs.");
      return;
    }

    const toggleSidebar = () => sidebarMenu.classList.toggle("hidden");

    dropdownButton.addEventListener("click", toggleSidebar);
    closeSidebar.addEventListener("click", () =>
      sidebarMenu.classList.add("hidden")
    );

    document.addEventListener("click", (event) => {
      if (
        !sidebarMenu.contains(event.target) &&
        !dropdownButton.contains(event.target)
      ) {
        sidebarMenu.classList.add("hidden");
      }
    });
  };

  // Hide skillsSidebar when footer is in view
  const setupSidebarVisibility = () => {
    const skillsSidebar = document.getElementById("skillsSidebar");
    const footer = document.getElementById("footer");

    if (!skillsSidebar || !footer) {
      console.error("Skills sidebar or footer elements not found!");
      return;
    }

    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      skillsSidebar.style.display =
        footerTop <= viewportHeight ? "none" : "block";
    };

    window.addEventListener("scroll", handleScroll);
  };

  // Initialize functionality
  setupDropdown();
  setupSidebarVisibility();
});
