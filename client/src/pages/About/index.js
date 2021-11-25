import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const About = ({currentContent}) => {
  const [aboutContent, setAboutContent] = useState(null)
  useEffect(()=>{
    console.log("useEffect About");
    setAboutContent(currentContent[0].fields.aboutBodyName);
  },[currentContent])

  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
        {aboutContent ? (
            documentToReactComponents(
              aboutContent,
              richTextRenderOptions
              )):(
                "Loading..."
              )
            }
        </div>
      </div>
    </>
  );
};

export default About;

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      return <img src={file.url} />;
    },
  },
};
