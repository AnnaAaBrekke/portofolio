import "./assets/styles/main.scss";

const dropdownButton = document.getElementById("profileDropdown");
const sidebarMenu = document.getElementById("sidebarMenu");
const closeSidebar = document.getElementById("closeSidebar");

dropdownButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("hidden");
});

closeSidebar.addEventListener("click", () => {
  sidebarMenu.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("skillsSidebar");
  const footer = document.getElementById("footer");

  const sidebarHeight = sidebar.offsetHeight;
  const footerOffsetTop = footer.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= footerOffsetTop) {
      // Fix the sidebar to stop at the footer
      sidebar.classList.remove("fixed", "top-24");
      sidebar.classList.add("absolute");
      sidebar.style.top = `${footerOffsetTop - sidebarHeight}px`;
    } else {
      // Restore fixed position when not touching the footer
      sidebar.classList.add("fixed", "top-24");
      sidebar.classList.remove("absolute");
      sidebar.style.top = "";
    }
  });
});
