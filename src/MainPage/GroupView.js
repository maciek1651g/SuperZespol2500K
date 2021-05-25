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

export default class GroupView extends Component {
  state = {
    isPostsOpen: false,
    isInfoOpen: false,
    isChatOpen: false,
    isUsersOpen: false,
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
  render() {
    let table = [];
    if(this.props.gtable.length>0)
    {
      table = this.props.gtable[0]["courses"];
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
            <div className={stylesGroupView.groupContainer}>
              <TabCard gtable={table} openPosts={this.openPosts.bind(this)}/>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
