import stylesMainPage from "./stylesMainPage.module.css";
import { Avatar, Badge } from "@material-ui/core";
import SingleIco from "../LoginPage/SingleIco";
import Icons from "../img/iconsSVG";
import React from "react";
import ContextMenuProfile from "./ContextMenuProfile";
import ContextMenuNotification from "./ContextMenuNotification";
import User from "../User/User";

const TopMainPage = (props) => {
  const [showNotification, setNotification] = React.useState(false);
  const [showContextMenu, setContextMenu] = React.useState(0);
  const name = User.firstName;

  const helloText = (
    <p style={{ fontSize: "30px", margin: "0", color: "#979797" }}>
      Hej <span style={{ color: "#43D7E2", textTransform: "capitalize"}}>{name}</span>!
    </p>
  );

  return (
    <>
      <div className={stylesMainPage.rightTop}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          {typeof name === "string" ? helloText : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            onClick={() => {
              showContextMenu === 1 ? setContextMenu(0) : setContextMenu(1);
            }}
            style={{
              width: "50px",
              height: "50px",
              margin: "0 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
              {name.charAt(0).toUpperCase()}
          </Avatar>

          {showContextMenu === 1 ? (
            <ContextMenuProfile onClose={setContextMenu} />
          ) : null}
          {showContextMenu === 2 ? (
            <ContextMenuNotification onClose={setContextMenu} />
          ) : null}

          <Badge
            badgeContent=" "
            color="primary"
            invisible={!showNotification}
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <SingleIco
              icon={Icons.bellIco}
              open={showNotification}
              set={setNotification}
              onClick={() => {
                showContextMenu === 2 ? setContextMenu(0) : setContextMenu(2);
              }}
            />
          </Badge>
        </div>
      </div>
    </>
  );
};

export default TopMainPage;
