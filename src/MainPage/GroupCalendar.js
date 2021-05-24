import TopMainPage from "./TopMainPage";
import stylesGroupView from "./stylesGroupView.module.css";
import React, { Component } from "react";
import AddUserButton from "./AddUserButton";
import ListElement from "./ListElement";
import GroupViewIcons from "./GroupViewIcons";
import stylesCalendar from "./styleCalendar.module.css";
import SmallCalendar from "./SmallCalendar";

const GroupCalendar = (props) => {
  const [date, setDate] = React.useState(new Date(new Date().setDate(1)));

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
        {props.lesson}
      </p>
      <div className={stylesGroupView.dot}>
        <ListElement color="#ec524b" />
      </div>
      <p className={stylesGroupView.groupNumber}>Grupa {props.groupNumber}</p>
      <GroupViewIcons
        changeSubpage={props.changeSubpage.bind(this)}
        active="5"
      />
      <p>Kalendarz</p>

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
          <SmallCalendar date={date} setDate={setDate} />
        </div>
      </div>
    </>
  );
};

export default GroupCalendar;
