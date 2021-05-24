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
    let tcard = [];
    table = this.props.gtable;
    let size = 0;
    if (table) {
      size = table.length;

      for (let i = 0; i < size; i++) {
        tcard[i] = (
            <Card
              openPosts={this.openPosts.bind(this)}
              lesson={table[i]["name"]}
              group="II"
              color="#ec524b"

            />
        )
      }

    }
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
            <GroupButton />
            <p
              style={{
                fontSize: "30px",
                margin: "0",
              }}
            >
              Twoje Grupy
            </p>
            <div className={stylesGroupView.groupContainer}>
              <p>{tcard}</p>

            </div>
          </>
        ) : null}
      </div>
    );
  }
}
