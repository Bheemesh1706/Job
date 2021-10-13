import React, { createContext, useContext ,useState} from "react";

export const JobContext = createContext();

export const JobProvider = (props) => {

  const [jobDetails, setJobDettails] = useState([]);


  return (
    <JobContext.Provider value={[jobDetails,setJobDettails]}>
      {props.children}
    </JobContext.Provider>
  );
};

export const useDetails = () => useContext(JobContext);