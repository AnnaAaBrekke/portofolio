// export function createCardSkeleton() {
//   const skeleton = document.createElement("div");
//   skeleton.classNameList.add(
//     "bg-white",
//     "rounded-lg",
//     "shadow-md",
//     "p-4",
//     "animate-pulse"
//   );

//   const header = document.createElement("div");
//   header.classNameList.add("w-2/3", "h-4", "bg-gray-300", "rounded", "mb-2");
//   skeleton.appendChild(header);

//   for (let i = 0; i < 2; i++) {
//     const bodyLine = document.createElement("div");
//     bodyLine.classNameList.add("w-full", "h-8", "bg-gray-300", "rounded", "mb-2");
//     skeleton.appendChild(bodyLine);
//   }

//   const footer = document.createElement("div");
//   footer.classNameList.add("w-1/2", "h-8", "bg-gray-300", "rounded");
//   skeleton.appendChild(footer);

//   return skeleton;
// }

// export function showCardLoaders(containerId, count = 6) {
//   const container = document.getElementById(containerId);

//   if (!container) {
//     console.error(`Container with ID "${containerId}" not found.`);
//     return;
//   }

//   // Clear the container before adding loaders
//   container.innerHTML = "";

//   for (let i = 0; i < count; i++) {
//     const loader = createCardSkeleton();
//     loader.classNameList.add("card-loader"); // Add a shared className for all loaders
//     container.appendChild(loader);
//   }
// }
// export function hideCardLoaders(containerId) {
//   const container = document.getElementById(containerId);
//   if (!container) {
//     console.error(`Container with ID "${containerId}" not found.`);
//     return;
//   }

//   // Select all elements with the "card-loader" className and remove them
//   const loaders = container.querySelectorAll(".card-loader");
//   loaders.forEach((loader) => loader.remove());
// }
/**
 * Removes the skeleton loader once the content is fully loaded or after a timeout.
 */
export const removeSkeletonLoader = () => {
  const loader = document.getElementById("skeleton-loader");
  if (loader) {
    loader.style.display = "none";
  }
};
