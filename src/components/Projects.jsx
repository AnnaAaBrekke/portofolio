/**
 * Projects section component that showcases a list of project cards.
 * Each card includes project title, description, screenshots, and links to GitHub and live demo.
 *
 * @component
 * @returns {JSX.Element} A grid of ProjectCard components.
 */

import React from "react";
import { projects } from "../data/projects";

const ProjectCard = ({ title, description, images, repo, live }) => (
  <div className="flex flex-col bg-white border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
    <h3 className="project-title">{title}</h3>

    <div className="flex flex-wrap gap-4 justify-center mb-4">
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

    {/* Flex-grow on description to push footer down */}
    <p className="text-sm pt-2 font-medium text-text-accent leading-relaxed flex-grow">
      {description}
    </p>

    {/* Margin top auto pushes this section to bottom */}
    <div className="flex gap-4 mt-auto pt-4">
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
