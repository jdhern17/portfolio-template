import React from "react";

const Card = ({children, image, imageTwo}) => {
  return (
    <>
<div className="card text-center" style={{ margin: "10px" }}>
          <div className="card-body">
            <p className="card-text">
{children}            </p>
          </div>
          <div className="card-footer">
            {image}
            {imageTwo}
          </div>
        </div>
    </>
  );
};

export default Card;
