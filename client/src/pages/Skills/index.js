import React, { useState, useEffect } from 'react';
// import {HorizontalBar} from "react-chartjs-2";
import Chart from "../../components/Chart";
import Card from "../../components/Card";

const Skills = ({currentContent}) => {
  const [skillsContent, setSkillsContent] = useState(null);
  const [breakdownContent, setBreakdownContent] = useState(null);
  const [companyContent, setCompanyContent] = useState(null);
  useEffect(()=>{
      setSkillsContent(currentContent);
},[currentContent]);

useEffect(()=>{
  console.log("skills content", skillsContent);
  if(skillsContent){
    const filteredBreakdownContent = skillsContent.filter((item)=>item.fields.skills === "Breakdown");
    setBreakdownContent(filteredBreakdownContent);
    const filteredCompanyContent = skillsContent.filter((item)=>item.fields.skills !== "Breakdown");
    setCompanyContent(filteredCompanyContent);
  }
},[skillsContent])

  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Technical Skillset</h1>
        </div>
      </div>
      <div className="row">
      {breakdownContent ? (
        <>
        <div className="col-lg-1"></div>
        <div className="col-lg-8 col-sm-12 col-md-12">
          <div className="card text-center">
            {/* <div className="card-header">Technical Summary</div> */}
            <div className="card-body">
              <p className="card-text">
                  <Chart chartType={"horizontalBar"} chartObj={breakdownContent[0].fields.skills_json_field_id.description}/>
              </p>
            </div>
            <div className="card-footer">
              <h4>Skills by Years of Experience</h4>
            </div>
          </div>
        </div>
        </>
                ) : (
                  "Loading..."
            )}
      </div>
      <br />
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">By Organization</h1>
        </div>
      </div>
      <div className="row">
      {companyContent ? (
        <>
        {companyContent.map((item,index)=>{
        return (<Card key={index} image={<img src={item.fields.skillsImage.fields.file.url} alt={item.fields.skills} className="imgStyle" />}>
          <Chart chartType={"doughnut"} chartObj={item.fields.skills_json_field_id.description} />
        </Card>)
        })}
        </>
          ) : (
              "Loading..."
        )}
      </div>
    </>
  );
};

export default Skills;

{
  /* <div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"athena"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img src={athena} alt="Athenahealth" className="imgStyle" />
  </div>
</div>
<div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"usds"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img
      src={usds}
      alt="United States Department of State"
      style={{ height: "50px" }}
    />
    <img
      src={usds2}
      alt="United States Department of State"
      style={{ height: "25px" }}
    />
  </div>
</div>
<div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"usc"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img
      src={usc}
      alt="University of Southern California"
      style={{ height: "50px" }}
    />
  </div>
</div> */
}
