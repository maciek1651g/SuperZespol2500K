import styles from "./loginStyle.module.css";
import React from "react";


const LoadingScreen = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default LoadingScreen