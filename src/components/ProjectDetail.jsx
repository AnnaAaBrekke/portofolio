import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FiArrowLeft } from "react-icons/fi";

const ProjectDetail = ({ project }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 py-4">
      {/* Back link */}
      <Link to="/" className="back-link mb-6 group">
        <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      {/* Title */}
      <h1 className="project-title">{project.title}</h1>

      {/* Images */}
      <div className="flex flex-wrap gap-4 mb-6">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} Screenshot ${idx + 1}`}
            className="project-img sm:w-[48%]"
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-base text-text-accent leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        {project.repo !== "Soon to Come" && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo"
          >
            GitHub Repo
          </a>
        )}
        {project.live !== "Soon to Come" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="live-site"
          >
            Live Site
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
