import styles from "./loginStyle.module.css";
import React from "react";


const SingleIco = (props) => {

    const onChange = () => {
        props.set(!props.open)
    }

    return (
        <label className={styles.buttonMenu} style={{margin:"0"}}>
            <input type="checkbox" className={styles.offInput} onChange={onChange} checked={props.open}/>
            <span className={styles.iconNotification} onClick={props.onClick}>
                {props.icon}
            </span>
        </label>
    )
}

export default SingleIco