import React from "react";
// import { v4 as uuidv4 } from 'uuid';

const Collapse = ({ title, children, idNum, image, imageTwo }) => {
  return (
    <>
      <div className="card">
        <div className="card-header" id={"heading" + idNum}>
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-center"
              type="button"
              data-toggle="collapse"
              data-target={"#collapse" + idNum}
              aria-expanded="true"
              aria-controls={"collapse" + idNum}
            >
                {title}
              {image}
              {imageTwo}
            </button>
          </h2>
        </div>
        <div
          id={"collapse"+idNum}
          className="collapse"
          aria-labelledby={"heading" + idNum}
          data-parent="#accordionExample"
        >
          <div className="card-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
