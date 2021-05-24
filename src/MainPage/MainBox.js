import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import ListElement from "./ListElement";
import TestBox from "./TestBox";
import React from "react";
import Icons from "./../img/iconsSVG.js";
import TopMainPage from "./TopMainPage";


const MainBox = (props) => {
    let table = [];
    let tname = [];
    let tasig=[];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const dayofweek = days[currentDay];
    table = props.ptable;
    let licznik = 0;
    if (table["teams"]) {
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
                    <ListElement text={table["teams"][i]["name"]} time={time} />;
                licznik += 1;
            }

        }
    }
    if(table["assignments"]){
        for(let i=0;i<table["assignments"].length;i++){
            let datatime=table["assignments"][i]["day"] +" "+table["assignments"][i]["hours"]
            tasig[i]=<TestBox title={table["assignments"][i]["title"]} testName={table["assignments"][i]["testName"]} date={datatime} />
        }
    }
    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage name="Mariusz" />
            <div className={stylesMainPage.rightMiddle}>
                <p style={{ fontSize: "40px", margin: "0", height: "10%" }}>Twoje Grupy</p>
                <div className={stylesMainPage.rightMiddleBottom}>
                    <div className={stylesMainPage.middleContent}>
                        <div className={stylesMainPage.middleContentLeft}>
                            <div className={stylesMainPage.middleContentLeftTitle}>
                                <p style={{ fontSize: "36px", margin: "0" }}>Podstawy Informatyki Kwantowej</p>
                                <p style={{ color: "#979797" }}>Grupa II</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", height: "20%" }}>
                                <div><button className={styles.errorButton + ' ' + styles.buttonStyle}>PRZEJDŹ DO GRUPY</button></div>
                                <div>
                                    <button className={styles.arrowButton}>{Icons.arrowLeft}</button>
                                    <button className={styles.arrowButton}>{Icons.arrowRight}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={stylesMainPage.middleContent}>
                        <div className={stylesMainPage.middleContentRight}>
                            <p style={{ fontSize: "20px" }}>Dzisiejsze zajęcia</p>
                            <ul className={stylesMainPage.scrollBar}>
                                {tname}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylesMainPage.rightBottom}>
                <p style={{ fontSize: "20px", margin: "0", height: "10%" }}>Zbliżające się terminy zaliczenia</p>
                <div style={{ width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className={stylesMainPage.scrollBar + " " + stylesMainPage.mainBottomList}>
                        {tasig}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBox