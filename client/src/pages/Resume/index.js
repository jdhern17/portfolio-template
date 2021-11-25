import React, { useState, useEffect } from 'react';
import PDFCard from '../../components/PDFCard';

const Resume = ({currentContent}) => {
    const [resumeContent, setResumeContent] = useState(null);
    useEffect(()=>{
        setResumeContent(currentContent[0].fields.resumePdf.fields.file.url);
  },[currentContent]);
    return ( <>
    <div className="row">
        <div className="col-2"></div>
<div className="col-8">
    <h1 className="text-center">Resume</h1>
</div>
    </div>
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex justify-content-center">
            {resumeContent ? (
                <PDFCard resumePDF={resumeContent}/>
            ) : (
                "Loading..."
            )}
        </div>
    </div>
    </> );
}
 
export default Resume;