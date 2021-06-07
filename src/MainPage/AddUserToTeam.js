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
import User from "./../User/User"

const AddNewUserToTeam = (props) => {

    const [isVisible, setVisible] = React.useState(true);

    const addUserToTeam = () => {
        PublicApi.addUsersToTeam(props.groupID, props.teamName, [props.email], (res)=>{
            if(res){
                if(props.email===User.email)
                {
                    for(let j=0;j<User.groups.length;j++)
                    {
                        if(User.groups[j].id===props.groupID)
                        {
                           User.groups[j].userTeams = [...User.groups[j].userTeams, props.teamName];
                        }
                    }
                }
                setVisible(false);
            }
        }, (err)=>{
            props.setErrorMessage(err.errorMessageForUser)
        })
    }

    return (
        <>
            {isVisible?
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
                <button className={stylesGroupView.messageButton} onClick={addUserToTeam}>
                    <p>DODAJ</p>
                </button>
            </div>:null}
        </>
    )
}

const AddUserToTeam = (props) => {

    function openAddUserModal() {
        setShowAddUser(true);
    }

    function closeAddUserModal() {
        setShowAddUser(false);
        setUsers(null)
        props.refreshData();
        toogleMenu();
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
    const [users, setUsers] = React.useState(props.group!==null?props.group.students:null);
    const [usersToDisplay, setUsersToDisplay] = React.useState([]);

    React.useEffect(()=>{setUsers(props.group!==null?props.group.students:null)},[props.group])


    const updateUserToDisplay = () =>{
        let userToDIsplay=[]

        if(users!==null)
        {
            for(let i=0;i<users.length;i++)
            {
                let flaga=true;
                for(let j=0;j<users[i].teams.length;j++)
                {
                    if(users[i].teams[j]===props.team.name)
                    {
                        flaga=false;
                        break;
                    }
                }
                if(flaga)
                {
                    let value = users[i];
                    userToDIsplay.push(<AddNewUserToTeam key={i} text1={value.firstName+" "+value.lastName}
                                                         groupID={props.group.id} email={value.email}
                                                         teamName={props.team.name}
                                                         setErrorMessage={props.setErrorMessage}/>);
                }
            }
        }

        setUsersToDisplay(userToDIsplay);
    }

    React.useEffect(()=>{
        updateUserToDisplay()
    },[users])

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
                        <h2 style={{ margin: "30px 5%" }}>Dodaj Członka Do Zespołu</h2>
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
                            </div>
                        </div>
                        <div>
                            {usersToDisplay}
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

export default AddUserToTeam;
