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

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6 mt-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-primary">{project.title}</h1>

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

        {/* Full Description */}
        <div className="border-t pt-6 mt-6">
          <h2 className="text-xl font-semibold text-primary mb-2">
            Project Overview
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>
        {/* Reflections & Improvements */}
        {project.reflection && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Reflections & Improvements
            </h2>
            {project.reflection.map((section, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-md font-semibold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo"
            >
              GitHub Repo
            </a>
          )}
          {project.live && (
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
      </div>
    </section>
  );
};

export default ProjectDetail;
