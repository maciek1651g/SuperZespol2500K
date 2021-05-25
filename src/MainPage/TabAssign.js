import TestBox from "./TestBox";
import React from "react";

const TabAssing = (props) => {
    let table = props.table
    let tasig=[];

    if(table["assignments"]){
        for(let i=0;i<table["assignments"].length;i++){
            let datatime=table["assignments"][i]["day"] +" "+table["assignments"][i]["hours"]
            tasig[i]=<TestBox key={i} title={table["assignments"][i]["title"]} testName={table["assignments"][i]["testName"]} date={datatime} />
        }
    }

    if(tasig.length===0)
    {
        tasig = <p style={{textAlign: "center", fontSize: "25px", color: "#979797"}}>W najbliższym czasie nie masz zaliczeń</p>
    }

    return tasig
}

export default TabAssing