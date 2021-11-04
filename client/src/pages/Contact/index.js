import React from "react";
import mail from "../../assets/images/mail_logo.png";

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-header">My Email</div>
            <div className="text-center">
              <img
                src={mail}
                className="card-img-top cardImgStyle"
                alt="Resume"
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">hernandez.d.john@gmail.com </p>
              <a
                href="mailto:hernandez.d.john@gmail.com"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an Email!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
