import stylesMainPage from "./stylesMainPage.module.css";
import React from "react";


const ContextMenu = (props) => {
    return (
        <div className={stylesMainPage.contextMenu}>
            {props.children}
        </div>
    )
}

export default ContextMenu