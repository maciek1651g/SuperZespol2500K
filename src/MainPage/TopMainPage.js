import stylesMainPage from "./stylesMainPage.module.css";
import {Avatar, Badge} from "@material-ui/core";
import SingleIco from "../LoginPage/SingleIco";
import Icons from "../img/iconsSVG";
import React from "react";


const TopMainPage = (props) => {

    const [showNotyfication, setNotyfication] = React.useState(false);
    const helloText = <p style={{fontSize: "30px", margin: "0", color: "#979797"}}>Hej <span style={{color: "#43D7E2"}}>{props.name}</span>!</p>

    return (
        <div className={stylesMainPage.rightTop}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%"}}>
                {typeof(props.name)==="string" ? helloText: <p></p>}
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Avatar variant="rounded" style={{width:"50px", height:"50px", margin:"0 20px", borderRadius: "10px"}}>H</Avatar>
                <Badge badgeContent=" " color="primary" invisible={!showNotyfication}>
                    <SingleIco icon={Icons.bellIco} open={showNotyfication} set={setNotyfication}/>
                </Badge>
            </div>
        </div>
    )
}

export default TopMainPage