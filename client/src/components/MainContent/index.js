import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import titleArr from "../../pages.json";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Skills from "../../pages/Skills";
import FullCV from "../../pages/FullCV";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Download from "../../pages/Download";
import Welcome from "../../pages/Welcome";
import { getContent } from "../../api/apiContentService";

import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-top: 80px;
  margin-top: 1em;
  margin-left: 20vw;
  margin-right: 0em;
  grid-auto-rows: minmax(25px, auto);
    @media (max-width: 543px) {
    margin-left: 25vw;
  }
  @media(max-height:400px){
    padding-top:40px;
  }
`; 

const MainContent = () => {
  const [contentfulContent, setContentfulContent] = useState(null);
  const { linkId } = useParams();
  const [currentContent, setCurrentContent] = useState(null);

  const currentPage = titleArr.filter((page) => {
    return linkId === page.linkName;
  });
  
  useEffect(() => {
    async function someFunc() {
      // setLoading(true);
      try {
        const res = await getContent();
        // const entry = res.find(
        //   (item) => item.fields.id === "welcome-about-me"
        // ).fields;
        
        console.log("allTheContent", res);
        setContentfulContent([...res]);
        // const outcomeEntries = res.data
        //     .filter((item) => item.sys.contentType.sys.id === 'screenerOutcome')
        //     .map((item) => item.fields);
        // setOutcomeContent(outcomeEntries);
      } catch (e) {
        console.log(e);
        //     setError(true);
      } finally {
        //     setLoading(false);
      }
    }
    someFunc();
  }, []);
  
  useEffect(()=>{
    if (contentfulContent){
      let filteredContent = contentfulContent.filter(entry => entry.sys.contentType.sys.id === currentPage[0].id);
      setCurrentContent(filteredContent);
      console.log("filtered content", filteredContent);
    }
  },[linkId, contentfulContent]);

  const componentsList = {
    Welcome: Welcome,
    About: About,
    Resume: Resume,
    Skills: Skills,
    FullCV: FullCV,
    Projects: Projects,
    Contact: Contact,
    Download: Download,
  };

  const CurrComp = componentsList[currentPage[0].pageName];
  return (
    <>
    <GridWrapper>
      <div style={{marginBottom: "100px"}}>
        {(currentContent && (currentContent[0].sys.contentType.sys.id === currentPage[0].id)) ? (
          <CurrComp currentContent={currentContent} />
          ):(
          "Loading..."
        )}
      </div>
      </GridWrapper>
    </>
  );
};

export default MainContent;
