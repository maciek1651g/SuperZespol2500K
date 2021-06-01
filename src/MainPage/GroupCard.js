import stylesMainPage from "./stylesMainPage.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import Icons from "../img/iconsSVG";
import React from "react";

const GroupCard = (props) => {



    return (
        <div className={stylesMainPage.middleContent}>
            <div className={stylesMainPage.middleContentLeft}>
                {props.group!==null?
                    <>
                        <div className={stylesMainPage.middleContentLeftTitle}>
                            <p style={{ fontSize: "36px", margin: "0", textTransform: "capitalize" }}>{props.group.name}</p>
                            <p style={{ color: "#979797" }}>&nbsp;</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", height: "20%" }}>
                            <div><button className={styles.errorButton + ' ' + styles.buttonStyle}>PRZEJDŹ DO GRUPY</button></div>
                            <div>
                                <button className={styles.arrowButton} onClick={()=>props.changeGroup(false)}>{Icons.arrowLeft}</button>
                                <button className={styles.arrowButton} onClick={()=>props.changeGroup(true)}>{Icons.arrowRight}</button>
                            </div>
                        </div>
                    </>
                    :
                    <div className={stylesMainPage.middleContentLeftTitle}>
                        <p style={{ fontSize: "36px", margin: "0", textAlign: "center" }}>
                            Nie należysz do żadnych grup
                        </p>
                    </div>
                }

            </div>
        </div>
    )
}

export default GroupCard