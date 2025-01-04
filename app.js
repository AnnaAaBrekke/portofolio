import { setupDropdown } from "./src/js/dropdown.js";
import { sidebarVisibility } from "./src/js/sidebar.js";
import { removeSkeletonLoader } from "./src/js/skeleton.js";

document.addEventListener("DOMContentLoaded", () => {
  setupDropdown();
  sidebarVisibility();
  setTimeout(removeSkeletonLoader, 2000);
});
