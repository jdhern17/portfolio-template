import React, { useState, useEffect } from 'react';
import LinkedIn from "../../assets/images/linkedin_logo.png";
import GitHub from "../../assets/images/github_logo.png";
import PDF from "../../assets/images/pdf_logo.png";
import Resume from "../PDFCard/Hernandez_John_Resume.pdf";


const Footer = ({currentFooterContent}) => {
  const [footerContent, setFooterContent] = useState();

  useEffect(()=>{
    setFooterContent(currentFooterContent);
},[currentFooterContent]);

  return (
    <>
       <div className="footer">
    {footerContent &&
       (<><a href={footerContent[0].fields.firstFooterLinkUrl} target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" className="footerImg"/></a>
       <a href={footerContent[0].fields.secondFooterLinkUrl} target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className="footerImg"/></a>
       <a href={footerContent[0].fields.resumeFooter.fields.file.url} target="_blank" rel="noopener noreferrer"><img src={PDF} alt="PDF" className="footerImg"/></a></>)
       }
       </div>
    </>
  );
};

export default Footer;
