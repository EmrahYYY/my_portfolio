import React from "react";

import "./projectlist.css";

import Project from "../project/Project";

import ProjectsData from "../../ProjectsData";

function projectlist() {
  return (
    <div className="projectlist">
      <h1 className="projectlist-header"> My Projects</h1>

      <div className="projectlist-list">
        {ProjectsData.map((i) => (
          <Project key={i.id} name={i.name} img={i.img} link={i.link} />
        ))}
      </div>
    </div>
  );
}

export default projectlist;
