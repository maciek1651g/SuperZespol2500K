import styles from './../LoginPage/loginStyle.module.css';
import stylesMainPage from './stylesMainPage.module.css';
import IconMenu from './../LoginPage/IconMenu.js';
import React from "react";
import InfoBox from "../LoginPage/InfoBox";
import SettingsBox from "../LoginPage/SettingsBox";
import MainBox from "./MainBox";

const Svg = (props) => {
    return (
        <svg className={props.class} viewBox="0 0 24 24">{props.children}</svg>
    )
}

const MainPage = () => {

    const homeIco = <Svg class={styles.svgIcon}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></Svg>
    const groupIco = <Svg class={styles.svgIcon}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Svg>
    const settingsIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></Svg>
    const infoIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></Svg>
    const calendarIco = <Svg class={styles.svgIcon}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></Svg>
    const boxIco = <Svg class={styles.svgIcon}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></Svg>

    const [showDialogBoxes, setDialogBoxes] = React.useState(0);
    const [optionMenu, setOptionMenu] = React.useState(1);


    return (
        <div id="app" className={stylesMainPage.app}>
            {showDialogBoxes===1 ? <InfoBox close={setDialogBoxes} />: null}
            {showDialogBoxes===2 ? <SettingsBox close={setDialogBoxes} />: null}


            <div className={stylesMainPage.leftColumn}>
                <div id="leftTop" className={styles.leftTop}>
                    <h2 style={{marginTop: "40px"}}>Lorem</h2>
                    <IconMenu name="navMenu" icoSVG={homeIco} optionMenu={1}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={groupIco} optionMenu={2}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={calendarIco} optionMenu={3}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={boxIco} optionMenu={4}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                </div>
                <div id="leftBottom" className={styles.leftBottom}>
                    <IconMenu name="infoMenu" icoSVG={settingsIco} idMyDialogBox={1}
                              actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="infoMenu" icoSVG={infoIco} idMyDialogBox={2}
                              actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes}/>
                </div>
            </div>
            <div className={stylesMainPage.rightColumn}>
                {optionMenu===1 ? <MainBox /> : null}
            </div>
        </div>
    )
}


export default MainPage;
