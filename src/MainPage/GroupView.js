import TopMainPage from "./TopMainPage";
import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import Posts from "./Posts.js";
import Card from "./Card";
import Users from "./Users";
import Chat from "./Chat";
import Info from "./Info";
import GroupCalendar from "./GroupCalendar";
import React, { Component } from "react";
import GroupButton from "./GroupButton";
import TabCard from "./TabCard";
import $ from "./getElement";
import CheckBox from "../LoginPage/CheckBox";

const GroupView = (props) =>  {
  const [isPostsOpen, setPostsOpen] = React.useState(false);
  const [isInfoOpen, setInfoOpen] = React.useState(false);
  const [isChatOpen, setChatOpen] = React.useState(false);
  const [isUsersOpen, setUsersOpen] = React.useState(false);
  const [coursesOrTeams, setCoursesOrTeams] = React.useState(true);
  const [selectedGroup, setSelectedGroup] = React.useState(0);
  const [subpage, setSubpage] = React.useState(0);
  const [lesson, setLesson] = React.useState("");
  const [groupNumber, setGroupNumber] = React.useState(0);
  const [viewChoose, setViewChoose] = React.useState("0");
  const [groupArrayState, setGroupArrayState] = React.useState(props.gtable);
  const [table, setTable] = React.useState(props.gtable);


  const openPosts = (lesson, groupNumber) => {
    setSubpage(1);
    setLesson(lesson);
    setGroupNumber(groupNumber);
  }
  const changeSubpage = (number) => {
    setSubpage(number);
  }
  const changeGroup=() => {
    setSelectedGroup($("group").value);
  }
  const changeViewChoose = () => {
    setViewChoose($("view").value);
  }
  const changeCoursesOrGroup=()=>{
    setCoursesOrTeams(!coursesOrTeams)
  }

  const changeView = () => {
    switch (viewChoose)
    {
      case "0":
        setTable(groupArrayState)
        break;
      case "1":
        setTable(groupArrayState[selectedGroup]["teams"]);
        break;
      case "2":
        setTable(groupArrayState[selectedGroup]["courses"]);
        break;

    }
  }

  React.useEffect(() => {
    changeView();
  }, [viewChoose, selectedGroup, groupArrayState]);

  if(props.gtable!==groupArrayState)
  {
    setGroupArrayState(props.gtable);
  }

  const groupsArray = props.gtable;
  const setGroupsTable = props.setGTable;

  return (
    <div className={stylesMainPage.rightContent}>
      {subpage === 1 ? (
        <Posts
          lesson={lesson}
          groupNumber={groupNumber}
          changeSubpage={changeSubpage}
        />
      ) : null}
      {subpage === 2 ? (
        <Chat
          lesson={lesson}
          groupNumber={groupNumber}
          changeSubpage={changeSubpage}
        />
      ) : null}
      {subpage === 3 ? (
        <Users
          lesson={lesson}
          groupNumber={groupNumber}
          changeSubpage={changeSubpage}
        />
      ) : null}
      {subpage === 4 ? (
        <Info
          lesson={lesson}
          groupNumber={groupNumber}
          changeSubpage={changeSubpage}
          mtable={table}
        />
      ) : null}
      {subpage === 5 ? (
        <GroupCalendar
          lesson={lesson}
          groupNumber={groupNumber}
          changeSubpage={changeSubpage}
        />
      ) : null}

      {subpage === 0 ?
        <>
          <TopMainPage />
          <GroupButton groupsArray={groupsArray} setGroupsArray={setGroupsTable}/>
          <p
            style={{
              fontSize: "2em",
              margin: "0",
            }}
          >
            Twoje Grupy
          </p>
          <div className={stylesGroupView.topContainer}>




            <div style={{display: "flex", flexDirection: "row", marginBottom: "20px",
              width: "60%", justifyContent: "space-between"}}>

              <div>
                <label htmlFor="view">Wybierz widok: </label>
                <select id="view" onChange={changeViewChoose}>
                  <option value={0}>Grupy/Roczniki</option>
                  <option value={1}>Zespoły</option>
                  <option value={2}>Przedmioty</option>
                </select>
              </div>

              <div style={{marginRight: "20px"}}>
                <label htmlFor="group">Wybierz grupę: </label>
                <select id="group" onChange={changeGroup} disabled={viewChoose==="0"}>
                  {
                    groupsArray.map((value,key)=><option key={key+1} value={key}>{value.name}</option>)
                  }
                </select>
              </div>

            </div>





            <div className={stylesGroupView.groupContainer}>

              <TabCard gtable={table} openPosts={openPosts}/>

            </div>
          </div>
        </>
       : null}
    </div>
  );
}

export default GroupView