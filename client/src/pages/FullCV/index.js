import React from "react";
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

const FullCV = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">Full Resume / Curriculum Vitae (CV)</h1>
          <p className="text-center">Click on the tabs below for details.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="justify-content-center">
            <div className="accordion" id="accordionExample" style={{maxWidth:"75vw"}}>
            <Collapse
                image={<img src={denver} alt="Code For Denver" className="imgStyle" />}
                idNum={"Zero"}
              >
                <strong>Developer</strong>
                <p><i>December 2020 - Present</i></p>
                <li>
                  Created a criminal record expungement screener tool for Expunge Colorado to support the expungement of Coloradoans' criminal records by building and collaborating with other developers using tools such as surveyjs and AWS DynamoDB with API Gateway and Lambda.
                </li>
              </Collapse>
              <Collapse
                image={<img src={twoU} alt="2U" className="imgStyle" />}
                idNum={"One"}
              >
                <strong>Senior Tutor</strong>
                <p><i>March 2020 - Present</i></p>
                <li>
                  Ensure student success by providing troubleshooting support
                  for tools such as VS Code, GitHub, JavaScript, Node.js, MySQL,
                  MongoDB and React.js as well as coaching concepts such as
                  algorithms, MVC architecture, object-oriented programming,
                  code design and version control while maintaining above a
                  4.8/5.0 student feedback rating for all metrics.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={harvard}
                    alt="Harvard University"
                    className="imgStyle"
                  />
                }
                idNum={"Two"}
              >
                <strong>Full-Stack Web Developer</strong>
                <p><i>March 2019 - September 2019</i></p>
                <li>
                  Completed a six-month full-stack coding bootcamp implementing
                  web development tools and practices such as VS Code, GitHub,
                  Postman, React, MySQL and MongoDB as well as version control
                  and code reviews for both independent and team-based projects.
                </li>
              </Collapse>
              <Collapse
                image={<img src={glytec} alt="Glytec" className="imgStyle" />}
                idNum={"Three"}
              >
                <strong>Solution Architect</strong>
                <p><i>March 2019 - September 2019</i></p>
                <li>
                  Project managed the technical delivery of five (5) hospital
                  implementations for interface types such as ADFS SSO, SMART on
                  FHIR, ADT, and ORU through collaboration with clinical,
                  engineering, networking and business teams.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img src={athena} alt="athenahealth" className="imgStyle"  />
                }
                idNum={"Four"}
              >
                <strong>Network Connectivity Consultant</strong>
                <p><i>January 2018 - March 2019</i></p>
                <li>
                  Guaranteed client SLAs and Go-Live adherence metrics of
                  Integration Project Engineers by providing Tier II network
                  connectivity consulting to partner systems on over 60
                  escalated connectivity, cron job and system networking issues.{" "}
                </li>
                <li>
                  Addressed Single Sign-On and Connectivity product and process
                  gaps by implementing a mixed methods Scrum & Kanban framework
                  in JIRA resulting in the completion of 115 user stories
                  executed across 18 sprints in 2018.
                </li>
                <li>
                  Lowered integration connectivity and Single Sign-On costs by
                  building a knowledge base of offerings, system settings,
                  troubleshooting best practices, and available diagnostic tools
                  such as packet captures, http traces, ping, traceroute,
                  access-list, debug and config outputs.
                </li>
                <br />
                <strong>Integration Project Engineer</strong>
                <p><i>June 2016 - December 2017</i></p>
                <li>
                  Built over 150 integrations involving solutions scoping,
                  message format analysis, interface engine build, product
                  enhancements, connectivity troubleshooting, unit testing,
                  Production deployment and Go-Live coordination.
                </li>
                <li>
                  Managed the business operations of a team of 18 Offshore
                  Partner Integration Engineers through process creation,
                  feedback cycles, escalation management, technical mentorship,
                  training, and product documentation.
                </li>
                <li>
                  Operationalized the delivery of the highest cost integration
                  offerings such as alpha/beta, non-HL7, report-based and custom
                  interfaces through research, documentation and partnering with
                  Product, Infrastructure and DevOps teams.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usds}
                    alt="US Department of State"
                    className="imgStyle"
                  />
                }
                imageTwo={
                  <img
                    src={usds2}
                    alt="US Department of State"
                    className="imgStyle"
                  />
                }
                idNum={"Five"}
              >
                <strong>Fulbright Teaching Assistant</strong>
                <p><i>August 2014 - December 2015</i></p>
                <li>
                  Project managed the creation of the Instituto de Empresa (IE)
                  language department’s student registration processes, internal
                  policies, language testing tools, reporting metrics and
                  interdepartmental workflows by collaborating with 28 language
                  professors and registrar staff to manage over 1500 students.
                </li>
                <li>
                  Lectured the Fall 2015 Academic Writing course for seven
                  undergraduate student groups totaling 193 students.
                </li>
                <li>
                  Strengthened faculty and staff Business English skills by
                  lecturing nightly workshops, case studies, and mock projects.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={scheck}
                    alt="Scheck Hillel Community School"
                    className="imgStyle"
                  />
                }
                idNum={"Six"}
              >
                <strong>Standardized Test Instructor</strong>
                <p><i>October 2012 - June 2013</i></p>
                <li>
                  Supported the ACT and SAT exam preparation for over 167
                  students by conducting lectures with class sizes of up to 17
                  students as well as providing college application readiness
                  and tutoring services.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usc}
                    alt="University of Southern California"
                    className="imgStyle"
                  />
                }
                idNum={"Seven"}
              >
                <strong>Pullias Research Assistant</strong>
                <p><i>May 2011 - March 2012</i></p>
                <li>
                  Catalogued 23 research studies by reviewing and summarizing
                  details such as the literature review theoretical framework,
                  sample, methods, hypothesis, and results.
                </li>
                <li>
                  Created visualizations of math policy structures and
                  standardized test policies for the LACCD school district.
                </li>
                <br />
                <strong>McNair Research Fellow</strong>
                <p><i>January 2010 - August 2010</i></p>
                <li>
                  Conducted a comparative cost-benefit study of economic policy
                  responses to recessions in Peru and Colombia.
                </li>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCV;
