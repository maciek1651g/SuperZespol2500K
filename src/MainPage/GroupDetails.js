import stylesMainPage from "./stylesMainPage.module.css";
import React from "react";
import Posts from "./Posts";
import TopMainPage from "./TopMainPage";
import AddUserButton from "./AddUserButton";
import stylesGroupView from "./stylesGroupView.module.css";
import ListElement from "./ListElement";
import GroupViewIcons from "./GroupViewIcons";
import NewUser from "./NewUser";

const isAdmin = (admins, email) => {
    for(let i=0;i<admins.length; i++)
    {
        if(admins[i].email===email)
            return true;
    }

    return false;
}

const GroupDetails = (props) => {
    const groupDetails = props.groupsDetails.length>0?props.groupsDetails[0]:null;

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage />
            <AddUserButton />
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

            <p>Członkowie Grupy</p>
            <div className={stylesGroupView.postsContainer}>
                {groupDetails!==null? groupDetails.students.map((value, key)=>
                    <NewUser key={key} text1={value.firstName+" "+value.lastName}
                             text2={isAdmin(groupDetails.administrators,value.email)?
                                 "Administrator": "Student"} email={value.email}
                            groupID={groupDetails.id}/>): null}
            </div>

        </div>
    )
}

export default GroupDetails