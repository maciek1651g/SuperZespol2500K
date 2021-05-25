import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import React from "react";
import Icons from "./../img/iconsSVG.js";
import TopMainPage from "./TopMainPage";
import TabAssign from "./TabAssign";
import TabSchedule from "./TabSchedule";


const MainBox = (props) => {
    let table = props.ptable;

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
                                <TabSchedule table={table}/>
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