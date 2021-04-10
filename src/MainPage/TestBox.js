import React from "react";
import stylesMainPage from './stylesMainPage.module.css';
import styles from "../LoginPage/loginStyle.module.css";


const TestBox = (props) => {

    const menuIcon = <svg className={styles.svgIcon} viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    const starIco = <svg className={styles.svgIcon} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

    return (
        <div className={stylesMainPage.testBox}>
            <div style={{width: "90%", height: "40%", display: "flex", alignItems: "center", position: "relative"}}>
                <div style={{fontSize: "18px", fontWeight: "bold", width: "80%"}}><p>{props.title}</p></div>
                <div style={{position: "absolute", right: "5px", top: "15px", color: "#979797", height: "30px", cursor: "pointer"}}>{menuIcon}</div>
            </div>
            <div style={{width: "90%", height: "60%", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative"}}>
                <div style={{fontSize: "15px", fontWeight: "bold", width: "80%", color: "#979797"}}><p style={{margin: "0"}}>{props.testName}</p></div>
                <div style={{fontSize: "18px", fontWeight: "bold", width: "80%", color: "#43D7E2", margin:"0 0 15px 0"}}><p style={{margin: "0"}}>{props.date}</p></div>
                <div style={{position: "absolute", right: "5px", bottom: "15px", color: "#979797", height: "30px", cursor: "pointer"}}>{starIco}</div>
            </div>
        </div>
    )
}

export default TestBox