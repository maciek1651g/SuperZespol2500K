import styles from "./loginStyle.module.css";
import DialogBox from "./DialogBox";
import React from "react";

const InfoBox = (props) =>
{
    return (
        <DialogBox title="O aplikacji" close={props.close}>
            <p>
                Aplikacja stworzona przez SUPER ZESPÓŁ 2500K.
                Służy ona do komunikacji oraz upraszczania organizowania planu i nauki dla studentów i uczniów.
                W przypadku problemów prosimy o kontakt mailowy.
            </p>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <button className={styles.errorButton + ' ' + styles.buttonStyle}>ZGŁOŚ BŁĄD</button>
            </div>
        </DialogBox>

    )
}

export  default  InfoBox