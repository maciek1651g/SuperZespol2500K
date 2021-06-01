import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import React from "react";
import Icons from "./../img/iconsSVG.js";
import TopMainPage from "./TopMainPage";
import TabAssign from "./TabAssign";
import TabSchedule from "./TabSchedule";
import User from "../User/User"
import GroupCard from "./GroupCard";


const MainBox = (props) => {
    const [chooseGroup, setChooseGroup] = React.useState(0);
    let table = props.ptable;

    const changeGroup = (boolIncrement) => {
        let tmp = chooseGroup;
        if(boolIncrement)
        {
            tmp+=1;
            tmp=tmp%props.groupsArray.length;
        }
        else
        {
            tmp-=1;
            if(tmp<0) tmp=props.groupsArray.length-1;
        }

        setChooseGroup(tmp);
    }

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage name={User.firstName} />
            <div className={stylesMainPage.rightMiddle}>
                <p style={{ fontSize: "40px", margin: "0", height: "10%" }}>Twoje Grupy</p>
                <div className={stylesMainPage.rightMiddleBottom}>
                    <GroupCard changeGroup={changeGroup} group={props.groupsArray.length>0?props.groupsArray[chooseGroup]:null}/>
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