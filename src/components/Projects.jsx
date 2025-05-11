import React from "react";
import { projects } from "../data/projects";

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
