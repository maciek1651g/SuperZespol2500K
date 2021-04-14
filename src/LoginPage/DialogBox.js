import styles from './loginStyle.module.css';
import React from "react";

const DialogBox = (props) => {
    const closeWindow = () => {
        props.close(0);
    }

    return (
            <div className={styles.dialogBox}>
                <button className={styles.exitButton} onClick={closeWindow}>
                    <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
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