import React, { useEffect } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Social from "./Social";
import { getJobDetails } from "../../Backend/services";
import { useDetails} from "../../Context/JobContext";

export default function Dashboard() {

  const [jobDetails, setJobDettails] = useDetails();

  useEffect(() => {
    getJobDetails().then((e) => {
      console.log(e[0]);
      setJobDettails(e[0]);
    });
  },[]);

  return (
    <div className="Description-Container">
      <Header />
      <Paragraph />
      <Social />
    </div>
  );
}
