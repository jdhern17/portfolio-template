import React from "react";
import dof from "../../assets/images/dumonfhir_logo.png";
import expunge from "../../assets/images/expunge_logo_medium.png"

const Projects = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              {/* CARD ONE START */}
              <div className="card text-center">
                <div className="card-header">DUMonFHIR</div>
                <div className="text-center">
                  <img
                    src={dof}
                    className="card-img-top cardImgStyle"
                    alt="DUMonFHIR"
                  />
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    A learning to support non-technical teams understand how
                    FHIR works!
                  </p>
                  <a
                    href="https://tranquil-fortress-53463.herokuapp.com"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
              {/* CARD ONE END */}
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/* CARD TWO START */}
              <div className="card text-center">
                <div className="card-header">Expunge Colorado Screener Tool</div>
                <div className="text-center">
                  <img
                    src={expunge}
                    className="card-img-top cardImgStyle"
                    alt="Expunge CO Screener"
                  />
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    A criminal record expungement tool for Expunge Colorado!
                  </p>
                  <a
                    href="https://codefordenver.github.io/expunge-colorado-screener/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
              {/* CARD TWO END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
