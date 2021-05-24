import React, { Component } from "react";
import stylesGroupView from "./stylesGroupView.module.css";
import GroupViewIcons from "./GroupViewIcons";
import TopMainPage from "./TopMainPage";
import ListElement from "./ListElement";
import NewUser from "./NewUser";
import AddUserButton from "./AddUserButton";
export default class Users extends Component {
  render() {
    return (
      <>
        <TopMainPage />
        <AddUserButton />
        <p
          style={{
            fontSize: "2em",
            margin: "0",
            display: "inline-block",
          }}
        >
          {this.props.lesson}
        </p>
        <div className={stylesGroupView.dot}>
          <ListElement color="#ec524b" />
        </div>
        <p className={stylesGroupView.groupNumber}>
          Grupa {this.props.groupNumber}
        </p>
        <GroupViewIcons
          changeSubpage={this.props.changeSubpage.bind(this)}
          active="3"
        />
        <p>Członkowie Grupy</p>
        <div className={stylesGroupView.postsContainer}>
          <NewUser text1="Janusz Kowalski" text2="Starosta" />
          <NewUser text1="Aleksander Kwaśniewski" text2="Administrator" />
          <NewUser text1="Marcin Chleb" text2="Student" />
          <NewUser text1="Janusz Kowalski" text2="Starosta" />
          <NewUser text1="Janusz Kowalski" text2="Starosta" />
          <NewUser text1="Janusz Kowalski" text2="Starosta" />
        </div>
      </>
    );
  }
}
