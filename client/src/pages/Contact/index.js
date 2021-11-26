import React, { useState, useEffect } from 'react';
import mail from "../../assets/images/mail_logo.png";

const Contact = ({currentContent}) => {
  const [contactContent, setContactContent] = useState();

  useEffect(()=>{
    setContactContent(currentContent);
},[currentContent]);

  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Contact</h1>
        </div>
      </div>

      <div className="row">
      {contactContent ? (

        <div className="col-lg-10 col-sm-12 col-md-12">
            {contactContent.map((item,index)=>{

          return (
            <>
          <div key={index} className="card text-center">
            <div className="card-header">{item.fields.contactTitle}</div>
            <div className="text-center">
              <img
                src={item.fields.contactCoverImage.fields.file.url}
                className="card-img-top cardImgStyle"
                alt={item.fields.contactTitle}
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{item.fields.contactUrl} </p>
            </div>
          </div>
          <br/>
          </>)
            })}
        </div>
      ):(
        "Loading..."
      )}
      </div>
    </>
  );
};

export default Contact;
