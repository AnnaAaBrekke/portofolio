export const projects = [
  {
    id: "holidaze",
    title: "Holidaze",
    images: ["/images/Holiidaze-home.jpg", "/images/Holidaze-Booking.jpg"],
    shortDescription: `A modern, responsive accommodation booking app built with React, Tailwind CSS, and Vite.`,
    description: `"Holidaze" is a modern, responsive accommodation booking application built as part of the Front-End Development 2 course exam. This project demonstrates skills in project planning, responsive UI design, front-end development using React and Tailwind CSS, with Vite as the build tool for fast local development and optimized production builds.`,
    repo: "https://github.com/AnnaAaBrekke/PE2-holidaze.git",
    live: "https://holidaze-annaaab.netlify.app/",
    reflection: [
      {
        title: "What did I learn?",
        content:
          "I learned how to plan, design, and build a large, complex booking application from scratch. I enhanced my skills with React, especially React Router and Hooks, and worked with the Noroff Holidaze API. I also learned to structure an app with multiple user roles and focused on accessibility, responsiveness, and testing.",
      },
      {
        title: "What have I improved?",
        content:
          "Since this project is still under assessment, I haven't changed the code. However, I applied past feedback to ensure cleaner structure, DRY code, and overall better organization during development.",
      },
    ],
  },
  {
    id: "shopsy",
    title: "Shopsy",
    images: ["/images/shopsy-home.jpg", "/images/shopsy-product.jpg"],
    shortDescription: `A React-based e-commerce store using Zustand for state and Styled Components for styling.`,
    description: `"Shopsy" is a modern e-commerce platform built with React, Vite, Zustand for state management, and styled using Styled Components CSS. It allows users to browse products, add items to the cart, and complete purchases.`,
    repo: "https://github.com/AnnaAaBrekke/ecom-store.git",
    live: "https://shopsy-ecomstore.netlify.app/",
    reflection: [
      {
        title: "What did I learn?",
        content:
          "This was my first React project where I built a functional e-commerce app using Zustand, React Router, styled-components, and form validation with React Hook Form and Yup. It helped me practice dynamic routing, API integration, and modular component organization.",
      },
      {
        title: "What have I improved?",
        content:
          "I added JSDoc comments, cleaned up JSX, removed unnecessary fragments, ensured hooks run at the top level, replaced index keys with stable IDs, added tests, and improved the README file.",
      },
    ],
  },
  {
    id: "bidvault",
    title: "BidVault",
    images: ["/images/Welome-bidVault.jpg", "/images/bidvault - bid.jpg"],
    shortDescription: `A online auction app built with OOP in vanilla JavaScript, styled using Tailwind CSS and SASS.`,
    description: `"BidVault", an online auction site where users can add items for bidding and place bids on other users' items. The platform is designed to be user-friendly for both registered and non-registered users. The app is styled using modern CSS frameworks, including Tailwind CSS and SASS.`,
    repo: "https://github.com/AnnaAaBrekke/BidVault.git",
    live: "https://bidvault.netlify.app/welcome",
    reflection: [
      {
        title: "What did I learn?",
        content:
          "I learned how to build an auction platform using API integration, user stories, and responsive design. I applied OOP principles to keep the code clean, reusable, and organized, while enhancing my skills in Tailwind CSS and SCSS.",
      },
      {
        title: "What have I improved?",
        content:
          "I centralized error handling, corrected naming issues, added redirects for unauthorized users, made minor UX tweaks, and updated the README file.",
      },
    ],
  },
];
