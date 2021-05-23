import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import { Badge } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import * as Icon from "react-feather";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function openAddUserModal() {
  document.getElementById("modalAddNewUser").style.display = "block";
}

function closeAddUserModal() {
  document.getElementById("modalAddNewUser").style.display = "none";
}
const AddNewUserToGroup = (props) => {
  return (
    <>
      <div
        className={stylesMainPage.groupInfo}
        style={{ justifyContent: "space-between" }}
      >
        <p style={{ fontWeight: "bold", width: "20%", textAlign: "left" }}>
          {props.text1}
        </p>
        <p
          style={{
            fontWeight: "500",
            color: "#979797",
            width: "30%",
          }}
          className={stylesMainPage.center}
        >
          {props.text2}
        </p>
        <button className={stylesGroupView.messageButton}>
          <p>DODAJ</p>
        </button>
      </div>
    </>
  );
};

const AddUserButton = () => {
  function toogleMenu() {
    let dropdownDisplay = document.getElementById("myDropdown").style.display;
    if (dropdownDisplay === "block") {
      document.getElementById("myDropdown").style.display = "none";
    } else {
      document.getElementById("myDropdown").style.display = "block";
    }
  }

  return (
    <>
      <div id="modalAddNewUser" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeAddUserModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>Dodaj Członka Do Grupy</h2>
          <div
            className={stylesMainPage.writeGroupName}
            style={{
              width: "40%",
              display: "inline-block",
            }}
          >
            <Icon.Search
              width="20"
              height="20"
              color="#4cd5df"
              style={{ verticalAlign: "middle" }}
            />
            <small
              style={{
                color: "#979797",
                marginLeft: "10px",
                verticalAlign: "middle",
              }}
            >
              Wyszukaj użytkownika po jego imieniu oraz nazwisku...
            </small>
          </div>
          <div
            className={stylesMainPage.writeGroupName}
            style={{
              width: "40% ",
              display: "inline-block",
            }}
          >
            <Icon.Settings
              width="20"
              height="20"
              color="#4cd5df"
              style={{ verticalAlign: "middle" }}
            />
            <small
              style={{
                color: "#979797",
                marginLeft: "10px",
                verticalAlign: "middle",
              }}
            >
              Wybierz rolę dla danego użytkownika...
              <Icon.ChevronDown
                width="20"
                height="20"
                color="#4cd5df"
                style={{
                  verticalAlign: "middle",
                  float: "right",
                }}
              />
            </small>
          </div>
          <AddNewUserToGroup text1="Zygmunt Mucha" text2="zygmuch@gmail.com" />
          <AddNewUserToGroup text1="Michał Szef" text2="michałszef@gmail.com" />
          <AddNewUserToGroup text1="Monika Jazda" text2="monjazda@gmail.com" />
          <AddNewUserToGroup text1="Anna Kropka" text2="aniadot@gmail.com" />
          <AddNewUserToGroup
            text1="Bolesław Śmiały"
            text2="bolekilolek@gmail.com"
          />
        </div>
      </div>

      <div
        className={stylesMainPage.dotsDropdown}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Badge className={stylesMainPage.threeDotsBox}>
          <div
            className={stylesMainPage.threeDotsButton}
            onClick={() => toogleMenu()}
          >
            <MoreVertIcon
              className={stylesMainPage.threeDots}
              style={{ paddingBottom: "0px" }}
            />
          </div>

          <div className={stylesMainPage.dropdownContext} id="myDropdown">
            <Badge className={stylesMainPage.threeDotsBoxOpen}>
              <EditIcon className={stylesMainPage.threeDots} />
              <PersonAddOutlinedIcon
                id="addUserButton"
                onClick={() => openAddUserModal()}
                className={stylesMainPage.threeDots}
              />
              <ExitToAppIcon className={stylesMainPage.threeDots} />
            </Badge>
          </div>
        </Badge>
      </div>
    </>
  );
};

export default AddUserButton;
