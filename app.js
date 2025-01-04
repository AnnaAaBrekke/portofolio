import { setupDropdown } from "./src/js/dropdown";
import { sidebarVisibility } from "./src/js/sidebar";
import { removeSkeletonLoader } from "./src/js/skeleton";

document.addEventListener("DOMContentLoaded", () => {
  setupDropdown();
  sidebarVisibility();
  setTimeout(removeSkeletonLoader, 2000);
});
