import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import stylesGroupView from "./stylesGroupView.module.css";
import React, { Component } from "react";
import $ from "./getElement";


const MakeSchedule = (props) => {

    const [schedul, setSchedul] = React.useState(props.team.schedules[0].scheduledCourses);

    React.useEffect(()=>{
        setSchedul(props.team.schedules[0].scheduledCourses)
    },[props.team])

    const setNewSchedule = () =>{
        const day = $("dayOfWeek").value
        const startTime = $("startTime").value
        const endTime = $("endTime").value
        const subject = $("subject").value
        const semester = $("semester").value

        const newObject = {
            DaysOfTheWeek: day,
            StartTime: startTime+":00",
            EndTime: endTime+":00",
            Course: {
                Id: subject
            }
        }
        if(schedul && schedul.length>0)
        {
            let newTab = [];
            newTab.push(newObject);

            for(let i=0;i<schedul.length;i++)
            {
                let object ={
                        DaysOfTheWeek: schedul[i].dayOfTheWeek,
                    StartTime: schedul[i].startTime,
                    EndTime: schedul[i].endTime,
                    Course: {
                    Id: schedul[i].course.id
                    }
                }

                newTab.push(object);
            }

            PublicApi.editScheduleForGroupAndTeam(props.group.id, props.team.name, semester, newTab, (res)=>{
                if(res)
                {
                    props.refreshData();
                }
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser)
            });
        }
        else
        {
            let newTab = [newObject];

            PublicApi.createScheduleForGroupAndTeam(props.group.id, props.team.name, semester, newTab, (res)=>{
                if(res)
                {
                    props.refreshData();
                }
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser)
            });
        }
    }

  /*  <table border={1}>
        <tr>
            <th>Poniedziałek</th>
            <th>Wtorek</th>
            <th>Środa</th>
            <th>Czwartek</th>
            <th>Piątek</th>
            <th>Sobota</th>
            <th>Niedziela</th>
        </tr>
        <tr>

        </tr>
    </table>*/




    return (
        <div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <label>Dzień</label>
                    <select id="dayOfWeek">
                        <option value={0}>Poniedziałek</option>
                        <option value={1}>Wtorek</option>
                        <option value={2}>Środa</option>
                        <option value={3}>Czwartek</option>
                        <option value={4}>Piątek</option>
                        <option value={5}>Sobota</option>
                        <option value={6}>Niedziela</option>
                    </select>
                </div>
                <div>
                    <label>Początek</label>
                    <input type="time" id="startTime"/>
                </div>
                <div>
                    <label>Koniec</label>
                    <input type="time" id="endTime"/>
                </div>
                <div>
                    <label>Semestr</label>
                    <input type="number" id="semester"/>
                </div>
                <div>
                    <label>Przedmiot</label>
                    <select id="subject">
                        {props.group.courses.map((value, key)=><option value={value.id} key={key}>{value.name}</option>)}
                    </select>
                </div>
                <button className={stylesGroupView.messageButton} onClick={setNewSchedule}>Dodaj</button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    schedul.map((value, key)=>
                        <div key={key} style={{minWidth: "400px", border: "1px solid black"}}>
                            <p>Przedmiot: {value.course.name}</p>
                            <p>Prowadzący: {value.course.lecturer}</p>
                            <p>Dzień: {value.dayOfTheWeek}</p>
                            <p>Start: {value.startTime}</p>
                            <p>Koniec: {value.endTime}</p>
                        </div>)
                }

            </div>
        </div>

    )
}

export default MakeSchedule