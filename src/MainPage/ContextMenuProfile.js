import stylesMainPage from "./stylesMainPage.module.css";
import ContextMenu from "./ContexMenu";
import React from "react";
import {useHistory} from "react-router-dom";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js";


const ContextMenuProfile = (props) => {
    const history = useHistory();

    const logout = () => {
        publicAPI.logout();
        props.onClose(0);
        history.push("/login/");
    }

    return (
        <ContextMenu>
            <div className={stylesMainPage.contextMenuElement} onClick={logout}>
                <p>Wyloguj</p>
            </div>
        </ContextMenu>
    )
}

export default ContextMenuProfile