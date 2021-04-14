import stylesMainPage from "./stylesMainPage.module.css";
import {Avatar, Badge} from "@material-ui/core";
import SingleIco from "../LoginPage/SingleIco";
import styles from "../LoginPage/loginStyle.module.css";
import ListElement from "./ListElement";
import TestBox from "./TestBox";
import React from "react";
import Svg from "../LoginPage/Svg";


const MainBox = () => {

    const bellIco = <Svg class={styles.svgIcon}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></Svg>
    const arrowleft = <Svg class={styles.svgIcon}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></Svg>
    const arrowright = <Svg class={styles.svgIcon}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></Svg>

    const [showNotyfication, setNotyfication] = React.useState(false);

    return (
        <div className={stylesMainPage.rightContent}>
            <div className={stylesMainPage.rightTop}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%"}}>
                    <p style={{fontSize: "30px", margin: "0", color: "#979797"}}>Hej <span style={{color: "#43D7E2"}}>Mariusz</span>!</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Avatar variant="rounded" style={{width:"50px", height:"50px", margin:"0 20px", borderRadius: "10px"}}>H</Avatar>
                    <Badge badgeContent=" " color="primary" invisible={false}>
                        <SingleIco icon={bellIco} open={showNotyfication} set={setNotyfication}/>
                    </Badge>
                </div>
            </div>
            <div className={stylesMainPage.rightMiddle}>
                <p style={{fontSize: "40px", margin: "0", height: "10%"}}>Twoje Grupy</p>
                <div style={{width: "100%", height: "90%", display: "flex", flexDirection: "row"}}>
                    <div className={stylesMainPage.middleContent}>
                        <div className={stylesMainPage.middleContentLeft}>
                            <div style={{width: "90%", height: "60%"}}>
                                <p style={{fontSize: "36px", margin: "0"}}>Podstawy Informatyki Kwantowej</p>
                                <p style={{color: "#979797"}}>Grupa II</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",width: "90%", height: "20%"}}>
                                <div><button className={styles.errorButton + ' ' + styles.buttonStyle}>PRZEJDŹ DO GRUPY</button></div>
                                <div>
                                    <button className={styles.arrowButton}>{arrowleft}</button>
                                    <button className={styles.arrowButton}>{arrowright}</button>
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