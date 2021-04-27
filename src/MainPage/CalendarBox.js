import TopMainPage from "./TopMainPage";
import stylesMainPage from "./stylesMainPage.module.css";
import stylesCalendar from "./styleCalendar.module.css";
import React from "react";
import SingleIco from "../LoginPage/SingleIco";
import Icons from "../img/iconsSVG";
import ContextMenu from "./ContexMenu";
import Calendar from "./Calendar";


const CalendarBox = () => {
    const [openSettings, setOpenSettings] = React.useState(false);
    const [showContextMenu, setContextMenu] = React.useState(0);
    const [date, setDate] = React.useState(new Date());

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage />
            <div className={stylesCalendar.calendarRightMiddle}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", position: "relative"}}>
                    <p style={{fontSize: "40px", margin: "0"}}>Kalendarz</p>
                    <SingleIco icon={Icons.settingsIco} open={openSettings} set={setOpenSettings}
                               onClick={()=>{showContextMenu===1?setContextMenu(0):setContextMenu(1)}}/>
                    {showContextMenu===1 ?
                        <ContextMenu onClose={setContextMenu}>
                            <div className={stylesMainPage.contextMenuElement}>
                                <p>Ustawienie 1</p>
                            </div>
                            <div className={stylesMainPage.contextMenuElement}>
                                <p>Ustawienie 2</p>
                            </div>
                        </ContextMenu> :null}
                </div>
                <Calendar date={date} setDate={setDate}/>
            </div>
        </div>
    )
}

export default CalendarBox;