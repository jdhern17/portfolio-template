import React from 'react';
import PDFCard from '../../components/PDFCard';

const Resume = () => {
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
    <PDFCard/>
        </div>
    </div>
    </> );
}
 
export default Resume;