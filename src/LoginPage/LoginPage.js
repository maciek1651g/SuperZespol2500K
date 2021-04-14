import styles from './loginStyle.module.css';
import IconMenu from './IconMenu.js';
import React from "react";
import LoginBox from "./LoginBox";
import Svg from "./Svg";
import InfoBox from "./InfoBox";
import SettingsBox from "./SettingsBox";
import RegisterBox from "./RegisterBox";
//import { useHistory } from "react-router-dom";



const LoginPage = () => {
    //const history = useHistory();

    const userIco = <Svg class={styles.svgIcon}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></Svg>
    const groupIco = <Svg class={styles.svgIcon}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Svg>
    const settingsIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></Svg>
    const infoIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></Svg>

    const [showDialogBoxes, setDialogBoxes] = React.useState(0);
    const [optionMenu, setOptionMenu] = React.useState(1);

    return (
        <div id="app" className={styles.app}>
            {showDialogBoxes===1 ? <InfoBox close={setDialogBoxes} />: null}
            {showDialogBoxes===2 ? <SettingsBox close={setDialogBoxes} />: null}
            
                
            <div id="main" className={styles.main}>
                <div id="leftColumn" className={styles.leftColumn}>
                    <div id="leftTop" className={styles.leftTop}>
                        <h2 style={{marginTop: "40px"}}>Lorem</h2>
                        <IconMenu name="navMenu" icoSVG={userIco} optionMenu={1}
                                  actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                        <IconMenu name="navMenu" icoSVG={groupIco}optionMenu={2}
                                  actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    </div>
                    <div id="leftBottom" className={styles.leftBottom}>
                        <IconMenu name="infoMenu" icoSVG={settingsIco} idMyDialogBox={1} actualIdDialogBox={showDialogBoxes}
                                  setOpenDialogBox={setDialogBoxes}/>
                        <IconMenu name="infoMenu" icoSVG={infoIco}  idMyDialogBox={2} actualIdDialogBox={showDialogBoxes}
                                  setOpenDialogBox={setDialogBoxes}/>
                    </div>
                </div>
                <div id="rightColumn" className={styles.rightColumn}>
                    {optionMenu===1 ? <LoginBox /> : null}
                    {optionMenu===2 ? <RegisterBox setOptionMenu={setOptionMenu} /> : null}
                </div>
            </div>
        </div>
    )
}


export default LoginPage;
