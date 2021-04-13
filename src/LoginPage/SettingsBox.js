import CheckBox from "./CheckBox";
import DialogBox from "./DialogBox";
import React from "react";


const SettingsBox = (props) => {
    return (
        <DialogBox title="Ustawienia" close={props.close}>
            <CheckBox text="Tryb ciemny"/>
            <CheckBox text="Wysyłaj powiadomienia push"/>
        </DialogBox>
    )
}

export default SettingsBox