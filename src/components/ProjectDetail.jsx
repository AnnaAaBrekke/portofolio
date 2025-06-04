import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiShare2 } from "react-icons/fi";
import { useState } from "react";

const ProjectDetail = ({ project }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 py-4">
      {/* Top bar: back + share */}
      <div className="flex justify-between items-center mb-4">
        <Link to="/" className="back-link group inline-flex items-center gap-2">
          <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

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
        <button onClick={handleCopyLink} className="share-button">
          {copied ? (
            <>
              <FiCheck className="w-4 h-4" />
              Link copied!
            </>
          ) : (
            <>
              <FiShare2 className="w-4 h-4" />
              Share
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default ProjectDetail;
