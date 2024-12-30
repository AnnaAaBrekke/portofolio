document.addEventListener("DOMContentLoaded", () => {
  // Dropdown functionality
  const dropdownButton = document.getElementById("profileDropdown");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const closeSidebar = document.getElementById("closeSidebar");

  if (dropdownButton && sidebarMenu && closeSidebar) {
    dropdownButton.addEventListener("click", () => {
      const isHidden = sidebarMenu.classList.contains("hidden");
      if (isHidden) {
        sidebarMenu.classList.remove("hidden");
      } else {
        sidebarMenu.classList.add("hidden");
      }
    });

    closeSidebar.addEventListener("click", () => {
      sidebarMenu.classList.add("hidden");
    });

    document.addEventListener("click", (event) => {
      if (
        !sidebarMenu.contains(event.target) &&
        !dropdownButton.contains(event.target)
      ) {
        sidebarMenu.classList.add("hidden");
      }
    });
  } else {
    console.error("Dropdown elements not found! Check your HTML IDs.");
  }
});
