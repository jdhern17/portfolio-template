import React from "react";

const Card = ({children, image, title}) => {
  return (
    <>
<div className="card text-center" style={{ margin: "10px" }}>
          <div className="card-body">
            <p className="card-text">
{children}            </p>
          </div>
          <div className="card-footer">
            {image ? image : title}
          </div>
        </div>
    </>
  );
};

export default Card;
