import React from "react";

const ProjectCard = ({ title, description, images, repo, live }) => (
  <div className="bg-white border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>

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

    <div className="flex gap-4 mt-6">
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
      title: "Holidaze",
      images: ["Soon to Come", "Soon to Come"],
      description:
        '"Holidaze" is a modern, responsive accommodation booking application.',
      repo: "Soon to Come",
      live: "Soon to Come",
    },
    {
      title: "Shopsy",
      images: [
        "/images/Screenshots/shopsy-home.png",
        "/images/Screenshots/shopsy-product.png",
      ],
      description:
        '"Shopsy" is a modern e-commerce platform built with React, Vite, Zustand for state management, and Styled Components.',
      repo: "https://github.com/AnnaAaBrekke/ecom-store.git",
      live: "https://shopsy-ecomstore.netlify.app/",
    },
    {
      title: "BidVault",
      images: [
        "/images/Screenshots/WelcomeToBidVault.png",
        "/images/Screenshots/HomeBidVault.png",
      ],
      description:
        '"BidVault" is an online auction site styled with Tailwind CSS and SASS.',
      repo: "https://github.com/AnnaAaBrekke/BidVault.git",
      live: "https://bidvault.netlify.app/welcome",
    },
    {
      title: "Wherever Forever",
      images: [
        "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.03.54.png",
        "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.05.00.png",
      ],
      description:
        '"Wherever Forever" is a digitized travel blog based on Serena’s handwritten diaries.',
      repo: "https://github.com/NoroffFEU/AnnaAaBrekke-FED1-PE1.git",
      live: "https://norofffeu.github.io/AnnaAaBrekke-FED1-PE1/",
    },
    {
      title: "Social Media App",
      images: [
        "/images/Screenshots/some-landing.png",
        "/images/Screenshots/some-home.png",
      ],
      description:
        '"Social Media App" includes CRUD posts, follow features, comments, and emoji reactions.',
      repo: "https://github.com/NoroffFEU/fed2-js2-ca-AnnaAaBrekke",
      live: "https://socialm-aaab.netlify.app/auth/",
    },
    {
      title: "Futures Museum",
      images: [
        "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.36.27.png",
        "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.35.22.png",
      ],
      description:
        '"Futures Museum" is a responsive site for a science museum aimed at families and kids.',
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
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
