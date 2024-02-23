import React, { useState, useEffect, memo } from "react";
import descriptionsData from "./description.json";

const ProjectItem = ({ title, organization, description, imageUrl }) => (
  <div className="col-6 col-lg-12">
    <div className="row no-gutters">
      <div
        className="col-md-6 bg-img mh-300"
        style={{ backgroundImage: `url(${imageUrl})`, height: "600px" }}
      ></div>
      <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
        <br />
        <br />
        <br />
        <br />
        <h4>{title}</h4>
        <h5>{organization}</h5>
        <ul>
          {description.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProjectList = () => {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    setDescriptions(descriptionsData);
  }, []);

  return (
    <div className="container-fluid px-0">
      <div className="row" data-shuffle="list">
        {descriptions.map((description) => (
          <ProjectItem
            key={description.id}
            title={description.title}
            organization={description.organization}
            description={description.content}
            imageUrl={description.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProjectList);
