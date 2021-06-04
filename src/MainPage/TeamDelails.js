import stylesMainPage from "./stylesMainPage.module.css";
import React, { Component } from "react";
import Posts from "./Posts";
import TopMainPage from "./TopMainPage";
import AddUserButton from "./AddUserButton";
import stylesGroupView from "./stylesGroupView.module.css";
import ListElement from "./ListElement";
import GroupViewIcons from "./GroupViewIcons";
import NewUser from "./NewUser";
import * as Icon from "react-feather";
import $ from "./getElement";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import {useHistory} from "react-router-dom";
import AddUserToTeam from "./AddUserToTeam";
import GroupView from "./GroupView";
import MakeSchedule from "./MakeSchedule";

const isAdmin = (admins, email) => {
    for(let i=0;i<admins.length; i++)
    {
        if(admins[i].email===email)
            return true;
    }

    return false;
}

const TeamDetail = (props) => {
    const history = useHistory();
    const [numView, setNumView] = React.useState(0);
    const [editMode, setEditMode] = React.useState(false);
    const groupDetail = props.groupDetails;
    const teamDetails = groupDetail!==null?groupDetail.teams[1]:null;
    const [teamName, setTeamName] = React.useState(teamDetails!==null?teamDetails.name:"Nazwa grupy");

    React.useEffect(()=>{
        setTeamName(teamDetails!==null?teamDetails.name:"Nazwa grupy")
    }, [teamDetails])

    const changeView = (num) => {
        setNumView(num)
    }

    const teamNameChange = (event) => {
        setTeamName(event.target.value);
    }

    const deleteTeam = () => {
        PublicApi.deleteTeam(groupDetail.id, teamDetails.name, (res)=>{
            if(res){
                history.push("/groups");
                props.refreshData();
                //props.returnToMainPage();
            }
        }, (err)=>{
            props.setErrorMessage(err.errorMessageForUser)
        });
    }

    const edit = () => {
        if(!editMode)
        {
            setEditMode(true)
        }
        else
        {
            let value = $("teamName").value;
            PublicApi.editTeamName(groupDetail.id, teamDetails.name, value, (res)=>{
                setEditMode(false)
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser)
            });
        }
    }

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage />
            <AddUserToTeam group={groupDetail} team={teamDetails}
                           refreshData={props.refreshData} setErrorMessage={props.setErrorMessage}/>
            <p
                style={{
                    fontSize: "2em",
                    margin: "0",
                    display: "inline-block",
                }}
            >
                {teamDetails!==null?teamDetails.name:"Nazwa grupy"}
            </p>
            <div className={stylesGroupView.dot}>
                <ListElement color="#ec524b" />
            </div>
            <p className={stylesGroupView.groupNumber}>
                &nbsp;
            </p>

            <div className={stylesGroupView.iconSet}>
                <div className={numView===0? stylesGroupView.iconBoxActive : stylesGroupView.iconBox} onClick={numView!==0?() => changeView(0):null}>
                    <Icon.Paperclip width="30" height="30" color={numView===0?"#4cd5df":"#979797"} />
                </div>
                <div className={numView===1? stylesGroupView.iconBoxActive : stylesGroupView.iconBox} onClick={numView!==1?() => changeView(1):null}>
                    <Icon.User width="30" height="30" color={numView===1?"#4cd5df":"#979797"} />
                </div>
                <div className={numView===2? stylesGroupView.iconBoxActive : stylesGroupView.iconBox} onClick={numView!==2?() => changeView(2):null}>
                    <Icon.Tag width="30" height="30" color={numView===2?"#4cd5df":"#979797"} />
                </div>
                <div className={numView===3? stylesGroupView.iconBoxActive : stylesGroupView.iconBox} onClick={numView!==3?() => changeView(3):null}>
                    <Icon.Calendar width="30" height="30" color={numView===3?"#4cd5df":"#979797"} />
                </div>
            </div>

            {numView===0?
                <>
                    <p>&nbsp;</p>
                    <div className={stylesGroupView.postsContainer + " "+stylesGroupView.postsContainer2}>
                        <div>Nazwa: </div>
                        <input id="teamName" value={teamName} onChange={teamNameChange} disabled={!editMode}/>
                        <button className={stylesGroupView.messageButton} onClick={edit}>
                            {editMode?<p>ZAPISZ</p>:<p>EDYTUJ</p>}
                        </button>
                        <button className={stylesGroupView.messageButton} onClick={deleteTeam}>
                            <p>USUŃ ZESPÓŁ</p>
                        </button>
                    </div>
                </>:null}

            {numView===1?
                <>
                    <p>Członkowie Zespołu</p>
                    <div className={stylesGroupView.postsContainer}>
                        {groupDetail!==null? groupDetail.students.map((value, key)=>
                            <NewUser key={key} text1={value.firstName+" "+value.lastName}
                                     text2={isAdmin(groupDetail.administrators,value.email)?
                                         "Administrator": "Student"} email={value.email}
                                     groupID={groupDetail.id} refreshData={props.refreshData}
                                     setErrorMessage={props.setErrorMessage} teamName={teamDetails.name}
                                        />): null}
                    </div>
                </>:null}

            {numView===2?
                <>
                    <p>&nbsp;</p>
                    <div className={stylesGroupView.postsContainer + " "+stylesGroupView.postsContainer2}>
                        <MakeSchedule group={groupDetail} team={teamDetails} setErrorMessage={props.setErrorMessage}
                                        refreshData={props.refreshData}/>
                    </div>
                </>
                :null}

        </div>
    )
};

export default TeamDetail