import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import React from "react";
import Icons from "./../img/iconsSVG.js";
import TopMainPage from "./TopMainPage";
import TabAssign from "./TabAssign";
import TabSchedule from "./TabSchedule";
import User from "../User/User"
import GroupCard from "./GroupCard";


const MainBox = (props) => {
    let table = props.ptable;
    const [timeTableDay, setTimetableDay]= React.useState(new Date());
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    const changeTimeTableDay = (incrementDay) => {
        let tmpDay = new Date(timeTableDay.setDate(timeTableDay.getDate()+incrementDay));
        setTimetableDay(tmpDay);
    }

    const changeGroup = (parameters) => {
        setTimetableDay(new Date());
        props.changeGroup(parameters);
    }

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage name={User.firstName} />
            <div className={stylesMainPage.rightMiddle}>
                <p style={{ fontSize: "40px", margin: "0", height: "10%" }}>Twoje Grupy</p>
                <div className={stylesMainPage.rightMiddleBottom}>

                    <GroupCard changeGroup={changeGroup} group={props.groupsArray.length>0?props.groupsArray[props.chooseGroup]:null}/>

                    <div className={stylesMainPage.middleContent}>
                        <div className={stylesMainPage.middleContentRight}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <button className={styles.arrowButton} onClick={()=>changeTimeTableDay(-1)}>{Icons.arrowLeft}</button>
                                <p style={{ fontSize: "20px" }}>({days[timeTableDay.getDay()]}) {timeTableDay.ddmmyyy()}</p>
                                <button className={styles.arrowButton} onClick={()=>changeTimeTableDay(1)}>{Icons.arrowRight}</button>
                            </div>

                            <ul className={stylesMainPage.scrollBar}>

                                <TabSchedule table={table} day={timeTableDay}/>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className={stylesMainPage.rightBottom}>
                <p style={{ fontSize: "20px", margin: "0", height: "10%" }}>Zbliżające się terminy zaliczenia</p>
                <div style={{ width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className={stylesMainPage.scrollBar + " " + stylesMainPage.mainBottomList}>

                        <TabAssign table={table} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBox