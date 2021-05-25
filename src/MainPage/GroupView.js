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

export default class GroupView extends Component {
  state = {
    isPostsOpen: false,
    isInfoOpen: false,
    isChatOpen: false,
    isUsersOpen: false,
    coursesOrTeams: true,
    selectedGroup: 0,
    subpage: 0,
    lesson: "",
    groupNumber: 0,
  };
  openPosts(lesson, groupNumber) {
    this.setState({
      subpage: 1,
      // isPostsOpen: !this.state.isPostsOpen,
      lesson: lesson,
      groupNumber: groupNumber,
    });
  }
  changeSubpage(number) {
    this.setState({
      subpage: number,
    });
  }
  changeGroup() {
    this.setState({
      selectedGroup: $("group").value,
    });
  }
  changeCoursesOrGroup(){
    this.setState({
      coursesOrTeams: !this.state.coursesOrTeams,
    });
  }
  render() {
    let table = [];
    if(this.props.gtable.length>0)
    {
      if(this.state.coursesOrTeams){
        table = this.props.gtable[this.state.selectedGroup]["courses"];
      } else {
        table = this.props.gtable[this.state.selectedGroup]["teams"];
      }
    }
    const groupsArray = this.props.gtable;
    const setGroupsTable = this.props.setGTable;
    let { isPostsOpen, lesson, groupNumber, subpage } = this.state;
    return (
      <div className={stylesMainPage.rightContent}>
        {subpage === 1 ? (
          <Posts
            lesson={lesson}
            groupNumber={groupNumber}
            changeSubpage={this.changeSubpage.bind(this)}
          />
        ) : null}
        {subpage === 2 ? (
          <Chat
            lesson={lesson}
            groupNumber={groupNumber}
            changeSubpage={this.changeSubpage.bind(this)}
          />
        ) : null}
        {subpage === 3 ? (
          <Users
            lesson={lesson}
            groupNumber={groupNumber}
            changeSubpage={this.changeSubpage.bind(this)}
          />
        ) : null}
        {subpage === 4 ? (
          <Info
            lesson={lesson}
            groupNumber={groupNumber}
            changeSubpage={this.changeSubpage.bind(this)}
            mtable={table}
          />
        ) : null}
        {subpage === 5 ? (
          <GroupCalendar
            lesson={lesson}
            groupNumber={groupNumber}
            changeSubpage={this.changeSubpage.bind(this)}
          />
        ) : null}

        {subpage === 0 ? (
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
                <div style={{marginRight: "20px"}}>
                  <label htmlFor="group">Wybierz grupę: </label>
                  <select id="group" onChange={this.changeGroup.bind(this)}>
                    {
                      groupsArray.map((value,key)=><option key={key+1} value={key}>{value.name}</option>)
                    }
                  </select>
                </div>
                <div>
                  <CheckBox text="Przełącz widok" changeFunction={this.changeCoursesOrGroup.bind(this)}/>
                </div>
              </div>
              <div className={stylesGroupView.groupContainer}>
                <TabCard gtable={table} openPosts={this.openPosts.bind(this)}/>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
