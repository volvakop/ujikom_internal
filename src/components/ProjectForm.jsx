import React, { useState } from "react";
import Project from "./Project";


const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    wisata:"",
    keterangan:"",
    alamat: "",
    harga:""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;

    let updatedValue = value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  const validate = (project) => {
    let errors = { wisata: "", keterangan: "", alamat:"", harga:"" };

    if (project.wisata.length === 0) {
      errors.name = "Name is required";
    }
    if (project.wisata.length > 0 && project.wisata.length < 3) {
      errors.name = "Name need to be more than 3 character";
    }
    if (project.keterangan.length === 0) {
      errors.name = "Description is required";
    }
    if (project.alamat.length === 0) {
      errors.name = "alamat is required";
    }
    if (project.harga.length === 0) {
      errors.name = "Harga must be more than 0";
    }

    return errors;
  };

  const isValid = () => {
    return (
      errors.wisata.length === 0 &&
      errors.keterangan.length === 0 &&
      errors.alamat.length === 0 &&
      errors.harga.length === 0 
    );
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="wisata">  Name </label>
      <input
        type="text"
        name="wisata"
        placeholder="Enter Name"
        value={project.wisata}
        onChange={handleChange}
      />
      <label htmlFor="keterangan">  Description </label>
      <textarea
        name="keterangan"
        placeholder="Enter Description"
        cols="30"
        rows="10"
        value={project.keterangan}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="alamat">  Alamat </label>
      <input
        type="text"
        name="alamat"
        placeholder="Enter Alamat"
        value={project.alamat}
        onChange={handleChange}
      />
      <label htmlFor="harga">  Harga </label>
      <input
        type="number"
        name="harga"
        placeholder="Enter Harga"
        value={project.harga}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
