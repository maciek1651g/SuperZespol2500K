import styles from './../LoginPage/loginStyle.module.css';
import stylesMainPage from './stylesMainPage.module.css';
import IconMenu from './../LoginPage/IconMenu.js';
import DialogBox from './../LoginPage/DialogBox.js';
import CheckBox from './../LoginPage/CheckBox.js';
import React from "react";
import {Avatar, Badge} from "@material-ui/core";

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
    const bellIco = <Svg class={styles.svgIcon}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></Svg>

    const [showInfoDialogBox, setShowInfoDialogBox] = React.useState(false);
    const [showSettingsDialogBox, setshowSettingsDialogBox] = React.useState(false);
    const tabDialogBox = [setShowInfoDialogBox, setshowSettingsDialogBox];

    return (
        <div id="app" className={stylesMainPage.app}>
            {showInfoDialogBox ?
                <DialogBox title="O aplikacji" close={setShowInfoDialogBox}>
                    <p>
                        Aplikacja stworzona przez SUPER ZESPÓŁ 2500K.
                        Służy ona do komunikacji oraz upraszczania organizowania planu i nauki dla studentów i uczniów.
                        W przypadku problemów prosimy o kontakt mailowy.
                    </p>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <button className={styles.errorButton + ' ' + styles.buttonStyle}>ZGŁOŚ BŁĄD</button>
                    </div>
                </DialogBox> : null}

            {showSettingsDialogBox ?
                <DialogBox title="Ustawienia" close={setshowSettingsDialogBox}>
                    <CheckBox text="Tryb ciemny"/>
                    <CheckBox text="Wysyłaj powiadomienia push"/>
                </DialogBox> : null}


            <div className={stylesMainPage.leftColumn}>
                <div id="leftTop" className={styles.leftTop}>
                    <h2 style={{marginTop: "40px"}}>Lorem</h2>
                    <IconMenu name="navMenu" icoSVG={homeIco} tabDialogBox={tabDialogBox}  isChecked={true}/>
                    <IconMenu name="navMenu" icoSVG={groupIco} tabDialogBox={tabDialogBox}  isChecked={false}/>
                    <IconMenu name="navMenu" icoSVG={calendarIco} tabDialogBox={tabDialogBox}  isChecked={false}/>
                    <IconMenu name="navMenu" icoSVG={boxIco} tabDialogBox={tabDialogBox}  isChecked={false}/>
                </div>
                <div id="leftBottom" className={styles.leftBottom}>
                    <IconMenu name="infoMenu" icoSVG={settingsIco} tabDialogBox={tabDialogBox} isOpen={showSettingsDialogBox} open={setshowSettingsDialogBox}/>
                    <IconMenu name="infoMenu" icoSVG={infoIco} tabDialogBox={tabDialogBox} isOpen={showInfoDialogBox} open={setShowInfoDialogBox}/>
                </div>
            </div>
            <div className={stylesMainPage.rightColumn}>
                <div className={stylesMainPage.rightContent}>
                    <div className={stylesMainPage.rightTop}>
                        <div style={{fontWeight: "bold", display: "flex", flexDirection: "column", alignContent: "flex-end"}}>
                            <p style={{fontSize: "30px", margin: "14px 0", color: "#979797"}}>Hej <span style={{color: "#43D7E2"}}>Mariusz</span>!</p>
                            <p style={{fontSize: "40px", margin: "0"}}>Twoje Grupy</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <Avatar variant="rounded" style={{width:"50px", height:"50px", margin:"0 20px"}}>H</Avatar>
                            <Badge badgeContent=" " color="primary" invisible={false}>
                                <label className={styles.buttonMenu} style={{margin:"0"}}>
                                    <input type="checkbox" className={styles.offInput}/>
                                    <span className={styles.icon}>
                                        {bellIco}
                                    </span>
                                </label>
                            </Badge>
                        </div>
                    </div>
                    <div className={stylesMainPage.rightMiddle}>

                    </div>
                    <div className={stylesMainPage.rightBottom}>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainPage;
