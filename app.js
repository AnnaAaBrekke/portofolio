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
