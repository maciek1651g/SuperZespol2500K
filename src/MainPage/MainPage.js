import styles from './../LoginPage/loginStyle.module.css';
import stylesMainPage from './stylesMainPage.module.css';
import IconMenu from './../LoginPage/IconMenu.js';
import React from "react";
import InfoBox from "../LoginPage/InfoBox";
import SettingsBox from "../LoginPage/SettingsBox";
import MainBox from "./MainBox";
import Icons from "./../img/iconsSVG.js";
import CalendarBox from "./CalendarBox";
import GroupBox from "./GroupBox";
import BoxBox from "./BoxBox";
import {useHistory, useParams} from "react-router-dom";
import {useLocation} from "react-router";

const MainPage = () => {
    const history = useHistory();
    const location = useLocation();
    const {id} = useParams();

    const [showDialogBoxes, setDialogBoxes] = React.useState(0);
    const [optionMenu, setOptionMenu] = React.useState(1);


    React.useEffect(() => {
        if(typeof(id)!=="undefined")
        {
            switch (id)
            {
                case "groups":
                    if(optionMenu!==2)
                    {
                        setOptionMenu(2);
                    }
                    break;
                case "calendar":
                    if(optionMenu!==3)
                    {
                        setOptionMenu(3);
                    }
                    break;
                case "box":
                    if(optionMenu!==4)
                    {
                        setOptionMenu(4);
                    }
                    break;
                default:
                    history.replace("/");
            }
        }
        else
        {
            if(optionMenu!==1)
            {
                setOptionMenu(1);
            }
        }

    }, [location]);

    React.useEffect(() => {
        switch (optionMenu)
        {
            case 1:
                if(typeof(id)!=="undefined")
                {
                    history.push("/");
                }
                break;
            case 2:
                if(typeof(id)==="undefined" || id!=="groups")
                {
                    history.push("/groups");
                }
                break;
            case 3:
                if(typeof(id)==="undefined" || id!=="calendar")
                {
                    history.push("/calendar");
                }
                break;
            case 4:
                if(typeof(id)==="undefined" || id!=="box")
                {
                    history.push("/box");
                }
                break;
            default:
                console.error("Wrong optionMenu number!");
        }
    }, [optionMenu]);

    return (
        <div id="app" className={stylesMainPage.app}>
            {showDialogBoxes===1 ? <SettingsBox close={setDialogBoxes} />: null}
            {showDialogBoxes===2 ? <InfoBox close={setDialogBoxes} />: null}

            <div className={stylesMainPage.leftColumn}>
                <div id="leftTop" className={styles.leftTop}>
                    <h2 style={{marginTop: "40px"}}>Lorem</h2>
                    <IconMenu name="navMenu" icoSVG={Icons.homeIco} optionMenu={1}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={Icons.groupIco} optionMenu={2}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={Icons.calendarIco} optionMenu={3}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="navMenu" icoSVG={Icons.boxIco} optionMenu={4}
                              actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes}/>
                </div>
                <div id="leftBottom" className={styles.leftBottom}>
                    <IconMenu name="infoMenu" icoSVG={Icons.settingsIco} idMyDialogBox={1}
                              actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes}/>
                    <IconMenu name="infoMenu" icoSVG={Icons.infoIco} idMyDialogBox={2}
                              actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes}/>
                </div>
            </div>
            <div className={stylesMainPage.rightColumn}>
                {optionMenu===1 ? <MainBox /> : null}
                {optionMenu===2 ? <GroupBox /> : null}
                {optionMenu===3 ? <CalendarBox /> : null}
                {optionMenu===4 ? <BoxBox /> : null}
            </div>
        </div>
    )
}


export default MainPage;
