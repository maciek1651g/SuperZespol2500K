import stylesMainPage from "./stylesMainPage.module.css";
import ContextMenu from "./ContexMenu";
import React from "react";
import ClientAPI from "../clientAPI/ClientAPI";
import {useHistory} from "react-router-dom";


const ContextMenuProfile = (props) => {
    const history = useHistory();

    const logout = () => {
        const api = new ClientAPI();
        api.logout();
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