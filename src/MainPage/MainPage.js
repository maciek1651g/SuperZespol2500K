import styles from './../LoginPage/loginStyle.module.css';
import stylesMainPage from './stylesMainPage.module.css';
import IconMenu from './../LoginPage/IconMenu.js';
import React, { useState } from "react";
import InfoBox from "../LoginPage/InfoBox";
import SettingsBox from "../LoginPage/SettingsBox";
import MainBox from "./MainBox";
import Icons from "./../img/iconsSVG.js";
import CalendarBox from "./CalendarBox";
import BoxBox from "./BoxBox";
import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import GroupView from "./GroupView";
import PublicApi from "./../publicFunctions/PublicFunctionsAPI"
import LoadingScreen from "../LoginPage/LoadingScreen";
import ErrorMessage from "../LoginPage/ErrorMessage";
import User from "./../User/User"

const changeOptionMenu = (id) => {

    switch (id) {
        case "groups":
            return 2;
        case "calendar":
            return 3;
        case "box":
            return 4;
        default:
            return 1;
    }
}

const MainPage = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();

    const [showDialogBoxes, setDialogBoxes] = React.useState(0);
    const [optionMenu, setOptionMenu] = React.useState(changeOptionMenu(id));
    const [groupsArray, setGroupsArray] = React.useState([]);
    const [table,setTable]=useState([]);
    const [showLoading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [chooseGroup, setChooseGroup] = React.useState(0);

    React.useEffect(() => {
        loadData();
    }, []);

    const changeGroup = (boolIncrement) => {
        let tmp = chooseGroup;
        if(boolIncrement)
        {
            tmp+=1;
            tmp=tmp%groupsArray.length;
        }
        else
        {
            tmp-=1;
            if(tmp<0) tmp=groupsArray.length-1;
        }

        setChooseGroup(tmp);
        setTable(groupsArray[tmp]);
    }

    const loadData = () => {
        setLoading(true);
        PublicApi.getAllGroupsAttended((res) => {
            setLoading(false);
            if(res!==null){
                if(res.length>0){
                    setTable(res[0]);
                    setGroupsArray(res);
                }
            } else {
                PublicApi.logout();
                history.push("/");
            }
        }, (err)=>{
            setErrorMessage(err.errorMessageForUser);
        })
    }
    React.useEffect(() => {
        if (typeof (id) !== "undefined") {
            switch (id) {
                case "groups":
                    if (optionMenu !== 2) {
                        setOptionMenu(2);
                    }
                    break;
                case "calendar":
                    if (optionMenu !== 3) {
                        setOptionMenu(3);
                    }
                    break;
                case "box":
                    if (optionMenu !== 4) {
                        setOptionMenu(4);
                    }
                    break;
                default:
                    history.replace("/");
            }
        }
        else {
            if (optionMenu !== 1) {
                setOptionMenu(1);
            }
        }

    }, [location]);

    React.useEffect(() => {
        switch (optionMenu) {
            case 1:
                if (typeof (id) !== "undefined") {
                    history.push("/");
                }
                break;
            case 2:
                if (typeof (id) === "undefined" || id !== "groups") {
                    history.push("/groups");
                }
                break;
            case 3:
                if (typeof (id) === "undefined" || id !== "calendar") {
                    history.push("/calendar");
                }
                break;
            case 4:
                if (typeof (id) === "undefined" || id !== "box") {
                    history.push("/box");
                }
                break;
            default:
                console.error("Wrong optionMenu number!");
        }
    }, [optionMenu]);

    return (
        <div id="app" className={stylesMainPage.app}>
            {showDialogBoxes === 1 ? <SettingsBox close={setDialogBoxes} /> : null}
            {showDialogBoxes === 2 ? <InfoBox close={setDialogBoxes} /> : null}
            {showLoading ? <LoadingScreen /> : null}
            {errorMessage!==null ? <ErrorMessage message={errorMessage} setMessage={setErrorMessage}/> : null}

            <div className={stylesMainPage.leftColumn}>
                <div id="leftTop" className={styles.leftTop}>
                    <h2 style={{ marginTop: "40px" }}>Lorem</h2>
                    <IconMenu name="navMenu" icoSVG={Icons.homeIco} optionMenu={1}
                        actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes} />
                    <IconMenu name="navMenu" icoSVG={Icons.groupIco} optionMenu={2} id="groupButton"
                        actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes} />
                    <IconMenu name="navMenu" icoSVG={Icons.calendarIco} optionMenu={3}
                        actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes} />
                    <IconMenu name="navMenu" icoSVG={Icons.boxIco} optionMenu={4}
                        actualOptionMenu={optionMenu} setOptionMenu={setOptionMenu} setOpenDialogBox={setDialogBoxes} />
                </div>
                <div id="leftBottom" className={styles.leftBottom}>
                    <IconMenu name="infoMenu" icoSVG={Icons.settingsIco} idMyDialogBox={1}
                        actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes} />
                    <IconMenu name="infoMenu" icoSVG={Icons.infoIco} idMyDialogBox={2}
                        actualIdDialogBox={showDialogBoxes} setOpenDialogBox={setDialogBoxes} />
                </div>
            </div>
            <div className={stylesMainPage.rightColumn}>
                
                {optionMenu === 1 ? <MainBox ptable={table} groupsArray={groupsArray} setErrorMessage={setErrorMessage}
                                             setChooseGroup={setChooseGroup} chooseGroup={chooseGroup} changeGroup={changeGroup}/> : null}
                {optionMenu === 2 ? <GroupView gtable={groupsArray} refreshGTable={loadData} setErrorMessage={setErrorMessage}/> : null}
                {optionMenu === 3 ? <CalendarBox  setErrorMessage={setErrorMessage} /> : null}
                {optionMenu === 4 ? <BoxBox />: null}
            </div>
        </div>
    )
}


export default MainPage;
