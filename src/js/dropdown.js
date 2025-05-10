/**
 * Initializes dropdown functionality, including toggling the sidebar menu
 * and closing it when clicking outside.
 */
export const setupDropdown = () => {
  const dropdownButton = document.getElementById("profileDropdown");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const closeSidebar = document.getElementById("closeSidebar");

  if (!dropdownButton || !sidebarMenu || !closeSidebar) {
    console.error("Dropdown elements not found! Check your HTML IDs.");
    return;
  }

  /**
   * Toggles the visibility of the sidebar menu.
   */
  const toggleSidebar = () => sidebarMenu.classNameList.toggle("hidden");

  // Add event listeners for toggling and closing the sidebar
  dropdownButton.addEventListener("click", toggleSidebar);
  closeSidebar.addEventListener("click", () =>
    sidebarMenu.classNameList.add("hidden")
  );

  // Close sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !sidebarMenu.contains(event.target) &&
      !dropdownButton.contains(event.target)
    ) {
      sidebarMenu.classNameList.add("hidden");
    }
  });
};
