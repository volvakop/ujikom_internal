import React from "react";
import "./ProjectCard.css"

  const FormatDescription = (description) => {
    return description.substring(0, 50) + "...";
  };
const ProjectCard = (props) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="row">
    <div className="card">
      <img src={project.pic} alt={project.wisata} />
      <section className="section light ">
          <h5 className="strong">
            <strong>{project.wisata}</strong>
          </h5>
          <p>{FormatDescription(project.keterangan)}</p>
          <p>Alamat :{project.alamat}</p>
          <p>HTM : {project.harga}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
    </div>
  );
};

export default ProjectCard;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 