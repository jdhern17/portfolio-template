import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Projects = ({currentContent}) => {
  const [projectsContent, setProjectsContent] = useState();

  useEffect(()=>{
    setProjectsContent(currentContent);
},[currentContent]);
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
      </div>

      <div className="row">
      {projectsContent ? (
        <div className="col-lg-10 col-sm-12 col-md-12">
          {projectsContent.map((item,index)=>{
            return (
              <>
            <div key={index} className="card text-center">
            <div className="card-header">{item.fields.projectTitle}</div>
            <div className="text-center">
              <img
                src={item.fields.projectCoverImage.fields.file.url}
                className="card-img-top cardImgStyle"
                alt={item.fields.projectTitle}
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                {item.fields.projectDescription}
              </p>
              <a
                href={`//${item.fields.projectUrl}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Page
              </a>
            </div>
          </div>
          <br/>
          </>)
          })} 
        </div>
      ) : (
        "Loading..."
      )}
      </div>
    </>
  );
};

export default Projects;
