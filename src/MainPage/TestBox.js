import React from "react";
import stylesMainPage from './stylesMainPage.module.css';
import Icons from "./../img/iconsSVG.js";


const TestBox = (props) => {


    return (
        <div className={stylesMainPage.testBox}>
            <div style={{width: "90%", height: "40%", display: "flex", alignItems: "center", position: "relative"}}>
                <div style={{fontSize: "18px", fontWeight: "bold", width: "80%"}}><p>{props.title}</p></div>
                <div style={{position: "absolute", right: "5px", top: "15px", color: "#979797", height: "30px", cursor: "pointer"}}>{Icons.menuIcon}</div>
            </div>
            <div style={{width: "90%", height: "60%", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative"}}>
                <div style={{fontSize: "15px", fontWeight: "bold", width: "80%", color: "#979797"}}><p style={{margin: "0"}}>{props.testName}</p></div>
                <div style={{fontSize: "18px", fontWeight: "bold", width: "80%", color: "#43D7E2", margin:"0 0 15px 0"}}><p style={{margin: "0"}}>{props.date}</p></div>
                <div style={{position: "absolute", right: "5px", bottom: "15px", color: "#979797", height: "30px", cursor: "pointer"}}>{Icons.starIco}</div>
            </div>
        </div>
    )
}

export default TestBox