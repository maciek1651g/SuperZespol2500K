import stylesCalendar from "./styleCalendar.module.css";
import React from "react";


const DayBox = (props) => {
    return (
        <div className={props.class}>
            <p style={{margin: "10px 0"}}>{props.day}</p>
            {props.notInfo!==null && props.notInfo!==0?
                <div className={stylesCalendar.notBox}>{props.notInfo}</div>
                :null}
        </div>
    )
}

export default DayBox