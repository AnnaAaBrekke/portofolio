/**
 * Hides or shows the skills sidebar based on the footer's visibility.
 */
export const sidebarVisibility = () => {
  const skillsSidebar = document.getElementById("skillsSidebar");
  const footer = document.getElementById("footer");

  if (!skillsSidebar || !footer) {
    console.error("Skills sidebar or footer elements not found!");
    return;
  }

  /**
   * Checks if the footer is visible and hides/shows the skills sidebar accordingly.
   */
  const handleScroll = () => {
    const footerTop = footer.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    skillsSidebar.style.display =
      footerTop <= viewportHeight ? "none" : "block";
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
};
