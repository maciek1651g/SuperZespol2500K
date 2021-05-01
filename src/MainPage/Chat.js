import React, { Component } from "react";
import stylesGroupView from "./stylesGroupView.module.css";
import GroupViewIcons from "./GroupViewIcons";
import TopMainPage from "./TopMainPage";
import ListElement from "./ListElement";
import Message from "./Message";
import * as Icon from "react-feather";
export default class Chat extends Component {
  render() {
    return (
      <>
        <TopMainPage />

        <p
          style={{
            fontSize: "30px",
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
          active="2"
        />
        <p>Czat Grupowy</p>
        <div
          className={stylesGroupView.postsContainer}
          style={{ height: "45%" }}
        >
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo"
          />
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione quisquam ducimus necessitatibus sed autem dolores
            "
          />
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            "
          />
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione quisquam ducimus necessitatibus sed autem dolores,
            "
          />
        </div>
        <div className={stylesGroupView.sendMessageBox}>
          <div className={stylesGroupView.sendMessage}>
            <Icon.MessageCircle width="25" height="25" color="#4cd5df" />
            <p>Napisz swoją wiadomość ...</p>
          </div>
          <button className={stylesGroupView.messageButton}>
            <Icon.Send width="20" height="20" color="#fff" />
            <p>Wyślij</p>
          </button>
        </div>
      </>
    );
  }
}
