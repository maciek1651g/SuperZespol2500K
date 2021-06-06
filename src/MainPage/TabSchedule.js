import ListElement from "./ListElement";
import React from "react";

const TabSchedule = (props) => {
    let table = props.table;
    let tname = [];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const dayofweek = days[currentDay];

    let licznik = 0;
    console.log(table)
    if (table["teams"] && table["teams"].schedules) {
        for (let i = 0; i < table["teams"].length; i++) {
            let startTime = '';
            let endTime = '';
            let pom = [];
            for (let j = 0; j < table["teams"][i]["schedules"][0]["scheduledCourses"].length; j++) {
                pom[j] = table["teams"][i]["schedules"][0]["scheduledCourses"][j];

                if (pom[j]["dayOfTheWeek"] === dayofweek) {
                    startTime = pom[j]["startTime"];
                    endTime = pom[j]["endTime"];
                    break;
                }
            }
            if (startTime !== '' && endTime !== '') {
                let time=startTime +"-"+endTime;
                tname[licznik] =
                    <ListElement key={i} text={table["teams"][i]["name"]} time={time} />;
                licznik += 1;
            }

        }
    }

    if(tname.length===0)
    {
        tname = <p style={{textAlign: "center", fontSize: "20px", color: "#979797"}}>Mam dobre wieści, dziś nie masz zajęć</p>
    }

    return tname
}

export default TabSchedule