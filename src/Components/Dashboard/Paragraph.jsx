import React from 'react'
import { useDetails } from "../../Context/JobContext";

export default function Paragraph() {

  const [jobDetails] = useDetails();

  const data1 = jobDetails.jd;
  

    return (
      <div>
        <div
          className="paragraph-container"
          dangerouslySetInnerHTML={{ __html: data1 }}
        ></div>
      </div>
    );
}
