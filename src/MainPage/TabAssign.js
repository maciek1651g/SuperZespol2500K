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

    return tasig
}

export default TabAssing