import TestBox from "./TestBox";
import React from "react";
import User from "../User/User";

Date.prototype.ddmmyyy = function() {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();

    return [(dd>9 ? '' : '0') + dd,"-",
        (mm>9 ? '' : '0') + mm,"-",
        this.getFullYear()
    ].join('');
};

const TabAssing = (props) => {
    let table = props.table
    let tasig=[];
    const currentDate = new Date();
    const weekBefore = new Date(currentDate.setDate(currentDate.getDate()-7));
    let userTeams = null
    let assigments = [];

    for(let j=0;j<User.groups.length;j++)
    {
        if(User.groups[j].id===table.id)
        {
            userTeams = User.groups[j].userTeams;
        }
    }

    if(typeof table.teams !== "undefined" && userTeams!==null)
    {
        for(let i=0;i<table.teams.length;i++)
        {
            for(let j=0;j<userTeams.length;j++)
            {
                if(userTeams[j]===table.teams[i].name)
                {
                    assigments = [...assigments, ...table.teams[i].assignments];
                }
            }
        }
    }

    assigments.sort((a,b)=>{
        if(a.deadline>b.deadline)
            return 1
        else if(a.deadline===b.deadline)
            return 0
        else return -1;
    })

    for(let i=0;i<assigments.length;i++)
    {
        let datatime=new Date(assigments[i].deadline);
        if(datatime>weekBefore)
        {
            tasig.push(<TestBox key={i} title={assigments[i].name} testName={assigments[i].description} date={datatime.ddmmyyy()} />);
        }
    }


    if(tasig.length===0)
    {
        tasig = <p style={{textAlign: "center", fontSize: "25px", color: "#979797"}}>W najbliższym czasie nie masz zaliczeń</p>
    }

    return tasig
}

export default TabAssing