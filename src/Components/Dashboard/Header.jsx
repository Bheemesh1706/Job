import React from "react";
import heart from "../../asserts/icons/icons/heart.png";
import google from "../../asserts/icons/icons/google.png";
import map from "../../asserts/icons/icons/map-pin.png";
import briefcase from "../../asserts/icons/icons/briefcase.png";
import clock from "../../asserts/icons/icons/clock.png";
import dollar from "../../asserts/icons/icons/dollar-sign.png";
import people from "../../asserts/icons/icons/users.png";
import Badge from "./Badge";
import Social from "./Social";
import { useDetails } from "../../Context/JobContext";

export default function Header() {
  const [jobDetails] = useDetails();

  const companydetails = [
    [jobDetails? jobDetails.location : "Santa Clara,CA", map],
    [jobDetails? jobDetails.jobtype : "Full Time", briefcase],
    [jobDetails && jobDetails.experience > "a"? jobDetails.experience : "4-5 years", clock],
    ["250-10000 Employee", people],
  ];
  
  console.log(jobDetails.title);

  return (
    <div className="header-container">
      <section className="quote">
        <p className="circle"></p>
        <p>
          Tell me information about yourself I can help you to find a dreamjob
        </p>
      </section>
      <section className="header">
        <div className="title">
          <p>{jobDetails? jobDetails.title : "Google Inc"}</p>
          <span>
            <img src={heart} height="15rem" width="15rem" />
          </span>
        </div>
        <div className="title-sub">
          <div className="title-sub-1">
            <span>
              <img src={google} height="30rem" width="30rem" />
            </span>
            <p>{jobDetails.company}</p>
            <p style={{ color: "silver", fontWeight: "lighter" }}>4.5</p>
          </div>
          <div className="title-sub-2">
            <div className="money">
              <span>
                <img src={dollar} height="10rem" width="10rem" />
              </span>
              <p>200k-280k</p>
            </div>
            <sub style={{ color: "silver", fontWeight: "lighter" }}>/year</sub>
          </div>
        </div>

        <div className="company-card">
          {companydetails.map((detail, index) => (
            <React.Fragment className="company-card" key={index}>
              <Badge text={detail[0]} img={detail[1]} />
            </React.Fragment>
          ))}
        </div>

        <div className="apply1">
          <h3>Apply In</h3>
        </div>

        <Social />
      </section>
      {/* <section className="header-footer">
        <div className="apply">
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            About Vacancy
          </p>
        </div>
        <div className="apply-body">
          <p>
            {
              jobDetails ? jobDetails.summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omniscommodi exercitationem sunt! Commodi expedita consectetur distincti amet officiis, minima natus praesentium corrupti recusandae doloribus quos rerum laborum fugit? Magni, inventore?"
            
            }
          </p>
        </div>
      </section> */}
    </div>
  );
}
