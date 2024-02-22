import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-fill">
      <div className="btn-toolbar align-self-end column-gap-1">
            <button type="button" className="btn btn-outline-secondary">Collapse All</button>
            <button type="button" className="btn btn-outline-secondary">View Progress</button>
            <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    <FaRegCheckCircle className="mb-1"></FaRegCheckCircle> Publish All
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/"> Publish All</a></li>
                </ul>
            </div>
            <button type="button" className="btn btn-danger"><FaPlus className="mb-1" /> Module</button>
            <button type="button" className="btn btn-outline-secondary"><FaEllipsisV /> </button>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-3" />
              {module.name}
              <span className="float-end mt-1">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-3" />
                <FaEllipsisV className="ms-3" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-3" />
                    {lesson.name}
                    <span className="float-end mt-1">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-3" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;