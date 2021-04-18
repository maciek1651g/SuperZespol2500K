import styles from './loginStyle.module.css';
import React from "react";
import Icons from "../img/iconsSVG";

const DialogBox = (props) => {
    const closeWindow = () => {
        props.close(0);
    }

    return (
            <div className={styles.dialogBox}>
                <button className={styles.exitButton} onClick={closeWindow}>
                    {Icons.crossIco}
                </button>
                <div style={{width: "100%"}}>
                    <p style={{fontSize: "40px", fontWeight: "bold", margin: "20px 0", color: "#444"}}>{props.title}</p>
                    <div style={{color: "#979797"}}>
                        {props.children}
                    </div>
                </div>
            </div>
    )
}

export default DialogBox;