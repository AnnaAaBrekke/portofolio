import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center mt-10 text-red-500">
        Project not found.{" "}
        <Link to="/" className="underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/" className="text-blue-500 underline mb-4 block">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} Screenshot ${idx + 1}`}
            className="w-full sm:w-[47%] rounded-xl shadow"
          />
        ))}
      </div>

      <p className="text-lg text-text-accent leading-relaxed">
        {project.description}
      </p>

      <div className="flex gap-6 mt-6">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub Repo
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Live Site
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;
