import axi from "axios";


export const getJobDetails = async() =>{
    try{
    const response = await axi.get(
      "https://staging.mapout.com/mapout-node/joblist/monster-jobs?keyword=developer&location =india"
    );
    console.log(response.data.jobs);
    return response.data.jobs;
}
    catch(e){
        console.log(e);
    }
}