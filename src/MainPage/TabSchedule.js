import ListElement from "./ListElement";
import React from "react";
import User from "./../User/User"

const TabSchedule = (props) => {
    let table = props.table;
    let tname = [];
    const currentDate = props.day;
    const currentDay = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayofweek = days[currentDay];


    let userTeams = null
    let maxSemester = 0;
    let timeTable = [];

    if(typeof table.students !== "undefined")
    {
        for(let i=0;i<table.students.length;i++)
        {
            if(User.email===table.students[i].email)
            {
                userTeams=table.students[i].teams;
                break;
            }
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
                    if(table.teams[i].schedules.length>0)
                    {
                        let indexMax=0;
                        let max=0;
                        for(let k=0;k<table.teams[i].schedules.length;k++)
                        {
                            if(table.teams[i].schedules[k].semester>max)
                            {
                                max=table.teams[i].schedules[k].semester;
                                indexMax = k;
                            }
                        }

                        if(maxSemester<max)
                        {
                            maxSemester=max;
                            timeTable = [...table.teams[i].schedules[indexMax].scheduledCourses];
                        }
                        else if(maxSemester===max)
                        {
                            timeTable = [...timeTable, ...table.teams[i].schedules[indexMax].scheduledCourses];
                        }
                    }
                }
            }
        }
    }


    timeTable.sort((a,b)=>{
        if(a.startTime>b.startTime)
            return 1;
        else if(a==b)
            return 0;
        else return -1;
    })


    for (let i = 0; i < timeTable.length; i++)
    {
        if(timeTable[i].dayOfTheWeek===dayofweek)
        {
            let time = timeTable[i].startTime+"-"+timeTable[i].endTime;
            tname.push(<ListElement key={i} text={timeTable[i].course.name} time={time} />)
        }
    }

    if(tname.length===0)
    {
        tname = <p style={{textAlign: "center", fontSize: "20px", color: "#979797"}}>Mam dobre wieści, dziś nie masz zajęć</p>
    }

    return tname
}

export default TabSchedule