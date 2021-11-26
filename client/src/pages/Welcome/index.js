import React, { useState, useEffect } from 'react';

// import mePicMed from "../../assets/images/johnpic_medium.jpg";
import mePicMed from "../../assets/images/johnpic_medium_circle.png";
import mePicSmall from "../../assets/images/johnpic_small_circle.png";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Welcome = ({currentContent}) => {
  const [welcomeContent, setWelcomeContent] = useState(null)
  useEffect(()=>{
    setWelcomeContent(currentContent[0].fields.welcomeBody);
  },[currentContent])
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Welcome</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
          {welcomeContent ? (
            documentToReactComponents(
              welcomeContent,
              richTextRenderOptions
              )):(
                "Loading..."
              )
            }
          
          <div className="text-center">
            {/* <picture>
              <source media="(max-width:850px)" srcSet={mePicMed} />
              <source media="(max-width:465px)" srcSet={mePicSmall} />
              <img
                src={mePicMed}
                className="img-fluid rounded"
                style={{ align: "center" }}
                alt="pic of John"
              />
            </picture> */}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Welcome;

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      return <img src={file.url} />;
    },
  },
};
