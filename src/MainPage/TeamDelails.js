import React from "react";
import TopMainPage from "./TopMainPage";
import stylesGroupView from "./stylesGroupView.module.css";
import ListElement from "./ListElement";
import NewUser from "./NewUser";
import * as Icon from "react-feather";
import $ from "./getElement";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import {useHistory} from "react-router-dom";
import AddUserToTeam from "./AddUserToTeam";
import MakeSchedule from "./MakeSchedule";
import SmallCalendar from "./SmallCalendar";
import stylesCalendar from "./styleCalendar.module.css";

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
    const teamDetails = groupDetail!==null && groupDetail.teams.length>0?groupDetail.teams[props.numOfTeam]:null;
    const [teamName, setTeamName] = React.useState(teamDetails!==null && typeof teamDetails!=="undefined"?teamDetails.name:"Nazwa grupy");
    const [date, setDate] = React.useState(new Date(new Date().setDate(1)));


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
                props.returnToMainPage();
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

    let users=[];

    if(groupDetail!==null)
    {
        for(let i=0;i<groupDetail.students.length;i++)
        {
            for(let j=0;j<groupDetail.students[i].teams.length;j++)
            {
                if(groupDetail.students[i].teams[j]===teamDetails.name)
                {
                    let value = groupDetail.students[i];
                    users.push(<NewUser key={i} text1={value.firstName+" "+value.lastName}
                                        text2={isAdmin(groupDetail.administrators,value.email)?
                                            "Administrator": "Student"} email={value.email}
                                        groupID={groupDetail.id} refreshData={props.refreshData}
                                        setErrorMessage={props.setErrorMessage} teamName={teamDetails.name}
                    />);
                    break;
                }
            }
        }
    }


    return (
        <>
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
                        {users}
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

            {numView===3?
                <>
                    <p>&nbsp;</p>
                    <div
                        className={stylesCalendar.calendarRightMiddle}
                        style={{ height: "60%" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <SmallCalendar date={date} setDate={setDate} group={groupDetail}
                                           team={teamDetails} setErrorMessage={props.setErrorMessage}
                                           refreshData={props.refreshData}/>
                        </div>
                    </div>
                </>
                :null}

        </>
    )
};

export default TeamDetail