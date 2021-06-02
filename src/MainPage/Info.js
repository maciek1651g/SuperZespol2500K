import React, { Component } from "react";
import stylesGroupView from "./stylesGroupView.module.css";
import GroupViewIcons from "./GroupViewIcons";
import TopMainPage from "./TopMainPage";
import ListElement from "./ListElement";
import NewInfo from "./NewInfo";
import AddUserButton from "./AddUserButton";

export default class Info extends Component {
  render() {
    let table = [];
    let tinfo = [];
    table = this.props.mtable;
    let size = 0;
    if (table) {
      size = table.length;
      for (let i = 0; i < size; i++) {
        if (table[i]["name"] === this.props.lesson) {
          tinfo[0] =
            <NewInfo key={1} text1="Prowadzący" text2={table[i]["lecturer"]} />;
          tinfo[1] =
            <NewInfo key={2} text1="Link do zespołu" text2={table[i]["lecturer"]} />;
          tinfo[2] =
            <NewInfo key={3} text1="Numer sali" text2={table[i]["location"]["room"]} />;
          tinfo[3] =
            <NewInfo key={4} text1="Pokój prowadzącego" text2={table[i]["location"]["room"]} />;
          tinfo[4] =
            <NewInfo key={5} text1="Termin konsultacji" text2="Wtorki 10:00-11:30" />;
        }
      }

    }
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
          active="4"
        />
        <p>Najważniejsze Informacje</p>
        <div className={stylesGroupView.postsContainer}>
          {tinfo}
        </div>
      </>
    );
  }
}
