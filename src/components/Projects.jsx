import React from "react";

const ProjectCard = ({ title, description, images, repo, live }) => (
  <div className="bg-white border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
    <h3 className="project-title">{title}</h3>

    <div className="flex flex-wrap gap-3 justify-center mb-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} Screenshot ${idx + 1}`}
          className="w-[47%] h-auto rounded-lg object-cover shadow-sm"
          loading="lazy"
        />
      ))}
    </div>

    <p className="text-sm p-2 text-center font-medium text-text-accent leading-relaxed">
      {description}
    </p>

    <div className="flex gap-4 mt-6 justify-center">
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="github-repo"
      >
        GitHub Repo
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="live-site"
      >
        Live Site
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: "holidaze",
      title: "Holidaze",
      images: ["Soon to Come", "Soon to Come"],
      description:
        '"Holidaze" is a modern, responsive accommodation booking application.',
      repo: "Soon to Come",
      live: "Soon to Come",
    },
    {
      id: "shopsy",
      title: "Shopsy",
      images: [
        "/images/Screenshots/shopsy-home.png",
        "/images/Screenshots/shopsy-product.png",
      ],
      description: `"Shopsy" is a modern e-commerce platform built with React, Vite, Zustand for state management, and styled using Styled Components CSS. It allows users to browse products, add items to the cart, and complete purchases.`,
      repo: "https://github.com/AnnaAaBrekke/ecom-store.git",
      live: "https://shopsy-ecomstore.netlify.app/",
    },
    {
      id: "bidvault",
      title: "BidVault",
      images: [
        "/images/Screenshots/WelcomeToBidVault.png",
        "/images/Screenshots/HomeBidVault.png",
      ],
      description: `"BidVault", an online auction site where users can add items for bidding and place bids on other users' items. The platform is designed to be user-friendly for both registered and non-registered users. The app is styled using modern CSS frameworks, including Tailwind CSS and SASS.`,
      repo: "https://github.com/AnnaAaBrekke/BidVault.git",
      live: "https://bidvault.netlify.app/welcome",
    },
    {
      id: "wherever-forever",
      title: "Wherever Forever",
      images: [
        "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.03.54.png",
        "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.05.00.png",
      ],
      description: `"Wherever Forever" is a project to digitize the personal travel diaries of Serena, a travel blogger, and create an engaging travel blog that highlights places, activities, and unforgettable experiences.`,
      repo: "https://github.com/NoroffFEU/AnnaAaBrekke-FED1-PE1.git",
      live: "https://norofffeu.github.io/AnnaAaBrekke-FED1-PE1/",
    },
    {
      id: "social-app",
      title: "Social Media App",
      images: [
        "/images/Screenshots/some-landing.png",
        "/images/Screenshots/some-home.png",
      ],
      description: `"Social Media App" is a project where users can perform CRUD operations on their posts and enjoy additional features like following/unfollowing other users, commenting on posts, and reacting with emojis. The app is styled using modern CSS frameworks, including Tailwind CSS and SASS.`,
      repo: "https://github.com/NoroffFEU/fed2-js2-ca-AnnaAaBrekke",
      live: "https://socialm-aaab.netlify.app/auth/",
    },
    {
      id: "futures-museum",
      title: "Futures Museum",
      images: [
        "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.36.27.png",
        "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.35.22.png",
      ],
      description: `"Futures Museum" is a modern, accessible, and responsive web presence for the Community Science Museum, an interactive science museum aimed at children aged 7–15 and families.`,
      repo: "https://github.com/AnnaAaBrekke/ScienceMuseum-SemesterProject.git",
      live: "https://annaaabrekke.github.io/ScienceMuseum-SemesterProject/",
    },
  ];

  return (
    <section id="projects" className="mb-24 px-4 md:px-6">
      <h2 className="section-header text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
