import styles from "./loginStyle.module.css";
import Icons from "../img/iconsSVG";
import React from "react";

let closeHandler = null;

const ErrorMessage = (props) => {

    const close = () => {
        props.setMessage(null);
    }
    if(props.message!==null)
    {
        if(closeHandler!=null)
            clearTimeout(closeHandler);
        closeHandler = setTimeout(close, 3000);
    }

    return (
        <div className={styles.errorMessage}>
            <div style={{display: "flex", alignItems: "center", color: "white", fontWeight: "500", margin: "0"}}>
                <p style={{margin: "0 40px 0 20px"}}>{props.message}</p>
            </div>
            <div onClick={close} className={styles.closeButton} style={{color: "#444", width:"30px", height:"30px", position: "absolute", top: "5px", right: "5px"}}>
                {Icons.crossIco}
            </div>
        </div>

    )
}

export default ErrorMessage;