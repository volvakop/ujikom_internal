import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

const ProjectList = ({ projects, onSave }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project) => {
    setProjectBeingEdited(project);

  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  return (
    <div className="baris">
      {projects.map((project) => (
        <div key={project.id} className="cols-row">
          {project === projectBeingEdited ? (
            <ProjectForm
              onSave={onSave}
              onCancel={cancelEditing}
              project={project}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
};



export default ProjectList;
