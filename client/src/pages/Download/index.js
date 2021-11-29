import React, { useState, useEffect } from 'react';
import PDF from "../../assets/images/pdf_logo.png";
import Resume from "../../components/PDFCard/Hernandez_John_Resume.pdf";

const Download = ({currentContent}) => {
  const [downloadContent, setDownloadContent] = useState();

  useEffect(()=>{
    setDownloadContent(currentContent);
},[currentContent]);
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Download Links</h1>
        </div>
      </div>
      
      <div className="row">
      {downloadContent ? (
        <div className="col-lg-10 col-sm-12 col-md-12">
          {downloadContent.map((item,index)=>{
            return (
          <div key={index} className="card text-center">
            <div className="card-header">{item.fields.downloadTitle}</div>
            <div className="text-center">
              <img
                src={item.fields.downloadCoverImage.fields.file.url}
                className="card-img-top cardImgStyle"
                alt={item.fields.downloadTitle}
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{item.fields.downloadDescription}</p>
              <a
                href={item.fields.downloadUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          <br/>
          </div>)
          })} 
        </div>
         ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default Download;
