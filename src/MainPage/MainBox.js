import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import ListElement from "./ListElement";
import TestBox from "./TestBox";
import React from "react";
import Icons from "./../img/iconsSVG.js";
import TopMainPage from "./TopMainPage";


const MainBox = () => {



    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage name="Mariusz"/>
            <div className={stylesMainPage.rightMiddle}>
                <p style={{fontSize: "40px", margin: "0", height: "10%"}}>Twoje Grupy</p>
                <div className={stylesMainPage.rightMiddleBottom}>
                    <div className={stylesMainPage.middleContent}>
                        <div className={stylesMainPage.middleContentLeft}>
                            <div className={stylesMainPage.middleContentLeftTitle}>
                                <p style={{fontSize: "36px", margin: "0"}}>Podstawy Informatyki Kwantowej</p>
                                <p style={{color: "#979797"}}>Grupa II</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",width: "90%", height: "20%"}}>
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
                            <p style={{fontSize: "20px"}}>Dzisiejsze zajęcia</p>
                            <ul className={stylesMainPage.scrollBar}>
                                <ListElement text="Bezpieczeństwo Informacji - wykład" time="8:30 - 10:00" color="#78E0E8"/>
                                <ListElement text="Architektura Komputerów - wykład" time="10:15 - 11:45" />
                                <ListElement text="Technmologie Baz Danych" time="12:00 - 13:30" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylesMainPage.rightBottom}>
                <p style={{fontSize: "20px", margin: "0", height: "10%"}}>Zbliżające się terminy zaliczenia</p>
                <div style={{width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className={stylesMainPage.scrollBar + " " + stylesMainPage.mainBottomList}>
                        <TestBox title="Sieci Komputerowe" testName="Kolokwium 1" date="Wtorek 14:00"/>
                        <TestBox title="Technologie baz danych" testName="Egzamin" date="Poniedziałek 12:00"/>
                        <TestBox title="Analiza matematyczna" testName="Kolokwium nr 1" date="Poniedziałek 16:00"/>
                        <TestBox title="Systemy przetwarzania danych" testName="Kolokwium nr 1" date="Czwartek 16:00"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBox