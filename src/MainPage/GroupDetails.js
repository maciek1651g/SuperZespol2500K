import stylesMainPage from "./stylesMainPage.module.css";
import React from "react";
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

const isAdmin = (admins, email) => {
    for(let i=0;i<admins.length; i++)
    {
        if(admins[i].email===email)
            return true;
    }

    return false;
}

const GroupDetails = (props) => {
    const history = useHistory();
    const [numView, setNumView] = React.useState(0);
    const [editMode, setEditMode] = React.useState(false);
    const groupDetails = props.groupsDetails.length>0?props.groupsDetails[0]:null;
    const [groupName, setGroupName] = React.useState(groupDetails!==null?groupDetails.name:"Nazwa grupy");

    React.useEffect(()=>{
        setGroupName(groupDetails!==null?groupDetails.name:"Nazwa grupy")
    }, [groupDetails])

    const changeView = (num) => {
        setNumView(num)
    }

    const groupNameChange = (event) => {
        setGroupName(event.target.value);
    }

    const deleteGroup = () => {
        PublicApi.deleteGroup(groupDetails.id, (res)=>{
            if(res){
                history.push("/groups");
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
            let value = $("groupName").value;
            PublicApi.editGroupName(groupDetails.id, value, (res)=>{
                setEditMode(false)
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser)
            });
        }
    }

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage />
            <AddUserButton groupID={groupDetails!==null?groupDetails.id:null}
                            refreshData={props.refreshData} setErrorMessage={props.setErrorMessage}/>
            <p
                style={{
                    fontSize: "2em",
                    margin: "0",
                    display: "inline-block",
                }}
            >
                {props.name}
            </p>
            <div className={stylesGroupView.dot}>
                <ListElement color="#ec524b" />
            </div>
            <p className={stylesGroupView.groupNumber}>
                &nbsp;
            </p>

            <div className={stylesGroupView.iconSet}>
                {numView===0?
                <div className={stylesGroupView.iconBoxActive}>
                    <Icon.Paperclip width="30" height="30" color="#4cd5df" />
                </div>:
                <div className={stylesGroupView.iconBox} onClick={() => changeView(0)}>
                    <Icon.Paperclip width="30" height="30" color="#979797" />
                </div>}

                {numView===1?
                <div className={stylesGroupView.iconBoxActive}>
                    <Icon.User width="30" height="30" color="#4cd5df" />
                </div>:
                <div className={stylesGroupView.iconBox} onClick={() => changeView(1)}>
                    <Icon.User width="30" height="30" color="#979797" />
                </div>}

            </div>

            {numView===0?
                <>
                    <p>&nbsp;</p>
                    <div className={stylesGroupView.postsContainer + " "+stylesGroupView.postsContainer2}>
                        <div>Nazwa: </div>
                        <input id="groupName" value={groupName} onChange={groupNameChange} disabled={!editMode}/>
                        <button className={stylesGroupView.messageButton} onClick={edit}>
                            {editMode?<p>ZAPISZ</p>:<p>EDYTUJ</p>}
                        </button>
                        <button className={stylesGroupView.messageButton} onClick={deleteGroup}>
                            <p>USUŃ GRUPĘ</p>
                        </button>
                    </div>
                </>:null}

            {numView===1?
                <>
                    <p>Członkowie Grupy</p>
                    <div className={stylesGroupView.postsContainer}>
                        {groupDetails!==null? groupDetails.students.map((value, key)=>
                            <NewUser key={key} text1={value.firstName+" "+value.lastName}
                                     text2={isAdmin(groupDetails.administrators,value.email)?
                                         "Administrator": "Student"} email={value.email}
                                    groupID={groupDetails.id} refreshData={props.refreshData}
                                    setErrorMessage={props.setErrorMessage}/>): null}
                    </div>
                </>:null}

        </div>
    )
};

export default GroupDetails