import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center mt-10 text-red-500 text-lg">
        Project not found.
      </div>
    );
  }

  return <ProjectDetail project={project} />;
};

export default SingleProject;
