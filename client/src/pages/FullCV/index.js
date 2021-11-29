import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Collapse from "../../components/Collapse";
import athena from "../../assets/images/athena_logo.png";
import usds from "../../assets/images/usds_logo.png";
import usds2 from "../../assets/images/usds_logo_text_2.png";
import glytec from "../../assets/images/glytec_logo.png";
import twoU from "../../assets/images/2U_logo.png";
import usc from "../../assets/images/usc_logo.png";
import harvard from "../../assets/images/harvard_logo.png";
import scheck from "../../assets/images/scheck_logo.png";
import denver from "../../assets/images/codefordenver_logo.png";

const FullCV = ({currentContent}) => {
  console.log("within FullCV component");
  const [fullCVContent, setFullCVContent] = useState();

  useEffect(()=>{
    setFullCVContent(currentContent);
    console.log("current content", currentContent);
    console.log("full cv description", currentContent[0].fields.fullcvDescription);
},[currentContent]);

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">Full Resume / Curriculum Vitae (CV)</h1>
          <p className="text-center">Click on the tabs below for details.</p>
        </div>
      </div>

      <div className="row">
      {fullCVContent ? (
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="justify-content-center">
            <div className="accordion" id="accordionExample" style={{maxWidth:"75vw"}}>
            {fullCVContent.map((item,index)=>{
              return (
            <Collapse key={index}
                image={<img src={item.fields.fullcvCoverImage.fields.file.url} alt="Code For Denver" className="imgStyle" />}
                idNum={item.sys.id}
              >
                {fullCVContent ? (
            documentToReactComponents(
              item.fields.fullcvDescription,
              richTextRenderOptions
              )):(
                "Loading..."
              )
            }
              </Collapse>
              )
            })}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
      </div>
    </>
  );
};

export default FullCV;

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      return <img src={file.url} />;
    },
  },
};