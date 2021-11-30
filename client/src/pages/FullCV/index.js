import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Collapse from "../../components/Collapse";

const FullCV = ({currentContent}) => {
  const [fullCVContent, setFullCVContent] = useState();

  useEffect(()=>{
    setFullCVContent(currentContent);
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
                image={item.fields.fullcvCoverImage && <img src={item.fields.fullcvCoverImage.fields.file.url} alt="Code For Denver" className="imgStyle" />}
                idNum={item.sys.id}
                title={item.fields.fullcvTitle}
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