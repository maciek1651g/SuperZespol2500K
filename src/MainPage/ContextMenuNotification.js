import stylesMainPage from "./stylesMainPage.module.css";
import ContextMenu from "./ContexMenu";
import React from "react";


const ContextMenuNotification = (props) => {
    return (
        <ContextMenu>
            <div className={stylesMainPage.contextMenuElement}>
                <p>Powiadomienie o braku powiadomień</p>
            </div>
        </ContextMenu>
    )
}

export default ContextMenuNotification