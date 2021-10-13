import React from 'react';
import indeed from "../../asserts/icons/icons/cib_indeed.png";
import linkdln from "../../asserts/icons/icons/bx_bxl-linkedin.png";
import mapout from "../../asserts/icons/icons/mapout.png";
import freelance from "../../asserts/icons/icons/freelance.png";
import Badge from './Badge';

export default function Social() {
const socialprofile = [
         ["Indeed", indeed],
         ["Linkdln", linkdln],
         ["Freelance", freelance],
         ["Mapout", mapout],
       ];
    return (
        <div className="social-container">
          <div className="company-card">
            {socialprofile.map((detail, index) => (
              <React.Fragment key={index}>
                <Badge text={detail[0]} img={detail[1]} />
              </React.Fragment>
            ))}
          </div>

          <button>Download cover letter</button>
        </div>
    )
}
