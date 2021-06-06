import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import stylesGroupView from "./stylesGroupView.module.css";
import React, { Component } from "react";
import $ from "./getElement";


const MakeSchedule = (props) => {
    const [schedul, setSchedul] = React.useState(props.team.schedules.length>0? props.team.schedules[0].scheduledCourses:[]);
    const [semester, setSemester] = React.useState(-1);


    React.useEffect(()=>{
        //let tmp = props.team.schedules.sort((a,b)=>);

        let indexOfSemester=0;
        for(let i=0;i<props.team.schedules.length;i++)
        {
            if(props.team.schedules[i].semester===parseInt(semester))
            {
                indexOfSemester=i;
                break;
            }
        }


        let tmpSchedul = props.team.schedules.length>0? props.team.schedules[indexOfSemester].scheduledCourses:[];

        tmpSchedul.sort((a,b)=>{
            if(a.startTime>b.startTime)
                return 1
            else if(a.startTime===b.startTime)
                return 0
            else
                return -1
        });


        setSchedul(tmpSchedul)


    },[props.team, semester])


    const setNewSchedule = () =>{
        const day = parseInt($("dayOfWeek").value);
        const startTime = $("startTime").value
        const endTime = $("endTime").value
        const subject = $("subject").value
        const semester = parseInt($("semester").value);

        const newObject = {
            DayOfTheWeek: day,
            StartTime: startTime+":00",
            EndTime: endTime+":00",
            Course: {
                Id: subject
            }
        }

        let flag=false;

        for(let i=0;i<schedul.length; i++)
        {
            if(schedul[i].semester===semester){
                flag=true;
                break;
            }
        }

        if((flag || typeof schedul!=="object"))
        {
            let newTab = [];
            newTab.push(newObject);

            for(let i=0;i<schedul.length;i++)
            {
                let object ={
                    DayOfTheWeek: schedul[i].dayOfTheWeek,
                    StartTime: schedul[i].startTime,
                    EndTime: schedul[i].endTime,
                    Course: {
                        Id: schedul[i].course.id
                    }
                }

                newTab.push(object);
            }

            updateSchedul(semester, newTab);
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

    const updateSchedul = (semester, newTab) => {
        PublicApi.editScheduleForGroupAndTeam(props.group.id, props.team.name, semester, newTab, (res)=>{
            if(res)
            {
                props.refreshData();
            }
        }, (err)=>{
            props.setErrorMessage(err.errorMessageForUser)
        });
    }

    const deleteSchedul = (indexSchedul) => {
        const semester = schedul[0].course.semester;
        let newTab = [...schedul];
        newTab.splice(indexSchedul, 1);
        updateSchedul(semester,newTab);
    }


    const changeSemester = (event) => {
        setSemester(event.target.value);
    }



    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <label>Semestr: </label>
                <select value={semester} onChange={changeSemester}>
                    {
                        props.team.schedules.map((value, key)=><option key={key} value={value.semester}>{value.semester}</option>)
                    }
                </select>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: "30px"}}>
                <div>
                    <label>Dzień</label>
                    <select id="dayOfWeek">
                        <option value={1}>Poniedziałek</option>
                        <option value={2}>Wtorek</option>
                        <option value={3}>Środa</option>
                        <option value={4}>Czwartek</option>
                        <option value={5}>Piątek</option>
                        <option value={6}>Sobota</option>
                        <option value={7}>Niedziela</option>
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
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", paddingTop: "30px"}}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Poniedziałek</th>
                            <th>Wtorek</th>
                            <th>Środa</th>
                            <th>Czwartek</th>
                            <th>Piątek</th>
                            <th>Sobota</th>
                            <th>Niedziela</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Monday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Tuesday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Wednesday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Thursday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Friday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Saturday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                            <td>
                                {
                                    schedul.map((value, key) => value.dayOfTheWeek === "Sunday" ?
                                        <div className={stylesGroupView.schedulContainer} key={key}>
                                            <p>Przedmiot: {value.course.name}</p>
                                            <p>Prowadzący: {value.course.lecturer}</p>
                                            <p>Start: {value.startTime}</p>
                                            <p>Koniec: {value.endTime}</p>
                                            <button className={stylesGroupView.messageButton}
                                                    onClick={() => deleteSchedul(key)}>usuń
                                            </button>
                                        </div> : null)
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default MakeSchedule