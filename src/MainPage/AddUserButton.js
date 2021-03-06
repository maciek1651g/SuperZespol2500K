import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import { Badge } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import * as Icon from "react-feather";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import $ from "./getElement";
const AddNewUserToGroup = (props) => {

    const addUserToGroup = () => {
        PublicApi.addUsersToGroup([props.email], props.groupID, (res)=>{
            if(res){
                props.refreshUsers();
            }
        }, (err)=>{
            props.setErrorMessage(err.errorMessageForUser)
        })
    }

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
          {props.email}
        </p>
        <button className={stylesGroupView.messageButton} onClick={addUserToGroup}>
          <p>DODAJ</p>
        </button>
      </div>
    </>
  );
};

const AddUserButton = (props) => {

    const inputUserEmail = (event) => {
        let value = event.target.value;
        searchUser(value);
    }

    const searchUser = (email=null) => {
        email = $("partEmail").value;
        if(email.length>=3)
        {
            PublicApi.getSomeUsers(props.groupID, email, (res)=>{
                if(res!==null)
                {
                    setUsers(res);
                }
            })
        }
    }

    function openAddUserModal() {
        setShowAddUser(true);
    }

    function closeAddUserModal() {
        setShowAddUser(false);
        setUsers(null)
        toogleMenu();
        props.refreshData();
    }

  function toogleMenu() {
    let dropdownDisplay = document.getElementById("myDropdown").style.display;
    if (dropdownDisplay === "block") {
      document.getElementById("myDropdown").style.display = "none";
    } else {
      document.getElementById("myDropdown").style.display = "block";
    }
  }

    const [showAddUser, setShowAddUser] = React.useState(false);
    const [users, setUsers] = React.useState(null);

  return (
    <>
        {showAddUser?
      <div id="modalAddNewUser" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeAddUserModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>Dodaj Cz??onka Do Grupy</h2>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div
            className={stylesMainPage.writeGroupName}
            style={{
              width: "50%",
              display: "inline-block",
            }}
          >
            <Icon.Search
              width="20"
              height="20"
              color="#4cd5df"
              style={{ verticalAlign: "middle" }}
            />
            <input onChange={inputUserEmail} id="partEmail" style={{
                height: "30px",
                marginLeft: "20px",
                width: "250px"
            }} placeholder=" Wyszukaj u??ytkownika po jego meilu..."/>

          </div>

          <div
            className={stylesMainPage.writeGroupName}
            style={{
              width: "50% ",
              display: "inline-block",
            }}
          >
            <Icon.Settings
              width="20"
              height="20"
              color="#4cd5df"
              style={{ verticalAlign: "middle" }}
            />
            <select id="userMode" disabled={true} style={{
                height: "30px",
                marginLeft: "20px",
                width: "250px"
            }}>
                <option value={0}>Student</option>
                <option value={1}>Administrator</option>
            </select>
          </div>
            </div>
            <div>
                {users===null? <p>Tutaj b??d?? wy??wietlani wyszukiwani u??ytkownicy</p>:
                users.length===0? <p>Nie znaleziono u??ytkownik??w o takiej nazwie</p>:
                users.map((value, key)=><AddNewUserToGroup key={key} text1={value.firstName+" "+value.lastName}
                                                           groupID={props.groupID} email={value.email}
                                                            refreshUsers={searchUser} setErrorMessage={props.setErrorMessage}/>)
                }

            </div>

        </div>
      </div>
        :null}

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
