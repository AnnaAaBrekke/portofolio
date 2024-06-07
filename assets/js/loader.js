document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loadingInd");

  function showLoader() {
    loader.style.display = "flex";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  // Show loader on page load
  showLoader();

  // Hide loader when everything is fully loaded
  window.addEventListener("load", function () {
    hideLoader();
  });
});
