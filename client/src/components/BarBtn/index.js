import React from "react";

const BarBtn = ({title}) => {
  return (
    <>
      <button type="button" className="text-reset btn btn-block btn-outline-secondary" style={{marginBottom:"10px"}}>
        {title}
      </button>
    </>
  );
};

export default BarBtn;
