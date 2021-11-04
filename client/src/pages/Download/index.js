import React from "react";
import PDF from "../../assets/images/pdf_logo.png";
import Resume from "../../components/PDFCard/Hernandez_John_Resume.pdf";

const Download = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Download Links</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-header">My Resume</div>
            <div className="text-center">
              <img
                src={PDF}
                className="card-img-top cardImgStyle"
                alt="Resume"
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">Download my Resume Here! </p>
              <a
                href={Resume}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go To Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
