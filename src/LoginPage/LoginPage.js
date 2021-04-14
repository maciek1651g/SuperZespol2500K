import styles from './loginStyle.module.css';
import IconMenu from './IconMenu.js';
import React from "react";
import LoginBox from "./LoginBox";
import Icons from "./../img/iconsSVG.js";
import InfoBox from "./InfoBox";
import SettingsBox from "./SettingsBox";
import RegisterBox from "./RegisterBox";



const LoginPage = () => {

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
                        <IconMenu name="navMenu" icoSVG={Icons.userIco} optionMenu={1}
                                  actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                        <IconMenu name="navMenu" icoSVG={Icons.addUserIco} optionMenu={2}
                                  actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    </div>
                    <div id="leftBottom" className={styles.leftBottom}>
                        <IconMenu name="infoMenu" icoSVG={Icons.settingsIco} idMyDialogBox={1} actualIdDialogBox={showDialogBoxes}
                                  setOpenDialogBox={setDialogBoxes}/>
                        <IconMenu name="infoMenu" icoSVG={Icons.infoIco}  idMyDialogBox={2} actualIdDialogBox={showDialogBoxes}
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
