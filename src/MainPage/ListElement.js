import React from "react";
import stylesMainPage from './stylesMainPage.module.css';

const ListElement = (props) => {
    const color = props.color;
    const dotIco = <svg height="14" width="14" fill="currentColor"><circle cx="7" cy="7" r="7" /></svg>
    return (
        <li className={stylesMainPage.listElement}>
            <div style={{display:"flex", flexDirection:"row", width: "80%"}}>
                <div style={{color: color, display: "flex", alignItems: "center", margin: "0 40px 0 0"}}>
                    {dotIco}
                </div>
                <p style={{margin: "0"}}>
                    {props.text}
                </p>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", width:"20%"}}><p style={{margin: "0 10px 0 0"}}>{props.time}</p></div>
        </li>
    )
}

export default ListElement