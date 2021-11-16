import React from "react";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
          <p>
            {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque architecto a magnam voluptatibus ipsam excepturi odio optio vel. Voluptatibus ratione facere iusto eos sit culpa saepe quaerat aliquid quod velit.`} 
          </p>
          <p>
           {` If you believe similarly and know of teams using software, academic
            research or data science to work against obstacles affecting the
            following groups, please reach out, I would love to talk and learn
            more!`}
          </p>
          <div className="text-left">
          <ul>
            <li>BIPOC</li>
            <li>The Incarcerated/Released</li>
            <li>The Homeless</li>
            <li>Refugees</li>
            <li>Immigrants</li>
            <li>Sexual Minorities & Gender Non-Conforming Individuals</li>
            <li>The Trans Community and Transgender Individuals</li>
            <li>Addiction-afflicted Individuals</li>
            <li>Substance Abuse Victims</li>
            <li>Fostered Youth</li>
            <li>Endangered Ecosystems & Wildlife</li>
            <li>Endangered Animal Species</li>
            <li>The Mentally Incapacitated</li>
            <li>The Physically Incapacitated</li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
