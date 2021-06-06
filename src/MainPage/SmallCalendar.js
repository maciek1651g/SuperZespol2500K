import stylesCalendar from "./styleCalendar.module.css";
import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import Icons from "../img/iconsSVG";
import React from "react";
import * as Icon from "react-feather";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import $ from "./getElement";
import MakeSchedule from "./MakeSchedule";



const numberOfDaysInMonth = (month, year) => {
  switch (month) {
    case 0:
      return 31;
    case 1:
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29;
      return 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
      return 31;
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      console.log("Wrong number of month!");
  }
};

const nameOfMonth = (month) => {
  switch (month) {
    case 0:
      return "Styczeń";
    case 1:
      return "Luty";
    case 2:
      return "Marzec";
    case 3:
      return "Kwiecień";
    case 4:
      return "Maj";
    case 5:
      return "Czerwiec";
    case 6:
      return "Lipiec";
    case 7:
      return "Sierpień";
    case 8:
      return "Wrzesień";
    case 9:
      return "Październik";
    case 10:
      return "Listopad";
    case 11:
      return "Grudzień";
    default:
      console.log("Wrong number of month!");
  }
};
const DayBox = (props) => {
  return (
    <div className={props.class} onClick={() => props.openCurrentDayModal(props.fullDate)}>
      <p style={{ margin: "10px 0" }}>{props.day}</p>
      {props.notInfo !== null && props.notInfo !== 0 ? (
        <div className={stylesCalendar.notBox}>{props.notInfo}</div>
      ) : null}
    </div>
  );
};
const CheckCalendar = (props) => {
  return (
    <>
      <div
        className={stylesMainPage.groupInfo}
        style={{ justifyContent: "space-between" }}
      >
        <p style={{ fontWeight: "bold", width: "30%", textAlign: "left" }}>
          {props.text1}
        </p>
        <p
          style={{
            fontWeight: "500",
            color: "#979797",
            width: "20%",
          }}
        >
          {props.text2}
        </p>
        <p style={{ color: "#979797", width: "20%" }}>{props.text3}</p>
        <p style={{ color: "#979797", width: "20%" }}>{props.text4}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon.Edit3
            width="20"
            height="20"
            color="#979797"
            className={stylesGroupView.svgButton}
          />
        </div>
      </div>
    </>
  );
};
const AddEvent = (props) => {
  return (
    <>
      <div
        className={stylesMainPage.groupInfo}
        style={{ justifyContent: "space-between" }}
      >
        <p style={{ fontWeight: "bold", width: "50%", textAlign: "left" }}>
          {props.text1}
        </p>
        {props.text2==="calendar"?
            <input id={props.id} type="date"
                   style={{
                     fontWeight: "500",
                     color: "#979797",
                     width: "50%",
                     textAlign: "center",
                   }}
            />: props.text2==="6"?
                <input id={props.id} type="number"
                       style={{
                         fontWeight: "500",
                         color: "#979797",
                         width: "50%",
                         textAlign: "center",
                       }}
                       placeholder={props.text2}
                />:
                <input id={props.id} type="text"
                       style={{
                         fontWeight: "500",
                         color: "#979797",
                         width: "50%",
                         textAlign: "center",
                       }}
                       placeholder={props.text2}
                />
        }

      </div>
    </>
  );
}

let clickedDay=1;

const SmallCalendar = ( { date, setDate, ...props }) => {
  const [currentDayEvent, setCurrentDayEvent] = React.useState(false);
  const [addEventProps, setAddEventProps] = React.useState(false);

  const addAssigment =()=>{

    const assigmentName = $("assigmentName").value;
    const assigmentDescription = $("assigmentDescription").value;
    const endDate = $("assigmentDeadLine").value;
    const semester = $("assigmentSemester").value;

    PublicApi.addAssigmentToTeam(props.group.id, props.team.name, null, assigmentName, assigmentDescription,
        semester, endDate, (res)=>{
          if(res){
            props.refreshData();
          }
        }, (err)=>{
          props.setErrorMessage(err.errorMessageForUser)
        });



    closeAddEventModal()
  }

  function openCurrentDayModal(cDay) {
    cDay.setDate(cDay.getDate() - 1)
    clickedDay=cDay
    setCurrentDayEvent(true);
  }

  function closeCurrentDayModal() {
    setCurrentDayEvent(false)
  }
  function openAddEventModal() {
    setAddEventProps(true);
  }

  function closeAddEventModal() {
    setAddEventProps(false);
  }

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  let tmpDate = new Date(year, month, 1);
  let firstDayInMonth = tmpDate.getDay();
  if (firstDayInMonth === 0) firstDayInMonth = 6;
  else firstDayInMonth -= 1;
  let countOfDays = numberOfDaysInMonth(
    tmpDate.getMonth(),
    tmpDate.getFullYear()
  );
  let lastDayInMonth =
    6 -
    new Date(tmpDate.setDate(tmpDate.getDate() + (countOfDays - 2))).getDay();
  //if(lastDayInMonth===6) lastDayInMonth=0; else lastDayInMonth+=1;
  let htmlDays = [];
  const days = firstDayInMonth + countOfDays + lastDayInMonth;
  tmpDate = new Date(year, month, 1);
  tmpDate = new Date(tmpDate.setDate(tmpDate.getDate() - firstDayInMonth));

  for (let i = 0; i < days; i++) {
    let notInfo = null;

    if (tmpDate.getMonth() === month) {
      if (
        tmpDate.getDate() === currentDay &&
        tmpDate.getFullYear() === currentYear &&
        tmpDate.getMonth() === currentMonth
      ) {
        htmlDays.push(
          <DayBox
            key={i}
            day={tmpDate.getDate()}
            fullDate={tmpDate}
            class={stylesCalendar.dayBox + " " + stylesCalendar.currentDay}
            notInfo={notInfo}
            openCurrentDayModal={openCurrentDayModal}
          />
        );
      } else {
        htmlDays.push(
          <DayBox
            key={i}
            day={tmpDate.getDate()}
            fullDate={tmpDate}
            class={stylesCalendar.dayBox}
            notInfo={notInfo}
            openCurrentDayModal={openCurrentDayModal}
          />
        );
      }
    } else {
      htmlDays.push(
        <DayBox
          key={i}
          day={tmpDate.getDate()}
          fullDate={tmpDate}
          class={stylesCalendar.dayBoxGray}
          notInfo={notInfo}
          openCurrentDayModal={openCurrentDayModal}
        />
      );
    }
    tmpDate = new Date(tmpDate.setDate(tmpDate.getDate() + 1));
  }

  //console.log(props.group)

  return (
    <>
      {currentDayEvent?
      <div id="modalCurrentDay" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeCurrentDayModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>
            {clickedDay.getDate()} {nameOfMonth(clickedDay.getMonth())} {clickedDay.getFullYear()}
          </h2>

          <CheckCalendar
            text1="Kolokwium Całki"
            text2="12:00-14:00"
            text3="Aula II bud. 34"
            text4="LINK"
          />
          <CheckCalendar
            text1="Kolokwium Całki"
            text2="12:00-14:00"
            text3="Aula II bud. 34"
            text4="LINK"
          />
          <CheckCalendar
            text1="Kolokwium Całki"
            text2="12:00-14:00"
            text3="Aula II bud. 34"
            text4="LINK"
          />
          <CheckCalendar
            text1="Kolokwium Całki"
            text2="12:00-14:00"
            text3="Aula II bud. 34"
            text4="LINK"
          />
          <CheckCalendar
            text1="Kolokwium Całki"
            text2="12:00-14:00"
            text3="Aula II bud. 34"
            text4="LINK"
          />
          <button
            className={stylesGroupView.messageButton}
            style={{ marginLeft: "3%", marginTop: "20px" }}
            onClick={() => {
              closeCurrentDayModal();
              openAddEventModal();
            }}
          >
            <p>DODAJ WYDARZENIE</p>
          </button>
        </div>
      </div>: null}

      {addEventProps?
      <div id="modalAddEvent" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeAddEventModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>Dodaj Nowe Wydarzenie</h2>

          <AddEvent group={props.group} setErrorMessage={props.setErrorMessage}
                    refreshData={props.refreshData} text1="Nazwa Wydarzenia" text2="Kolokwium Całki" id="assigmentName"/>
          <AddEvent group={props.group} setErrorMessage={props.setErrorMessage}
                    refreshData={props.refreshData} text1="Opis wydarzenia" text2="12:00-14:00 Aula IV bud. 34" id="assigmentDescription"/>
          <AddEvent group={props.group} setErrorMessage={props.setErrorMessage}
                    refreshData={props.refreshData} text1="Termin końcowy" text2="calendar" id="assigmentDeadLine"/>
          <AddEvent group={props.group} setErrorMessage={props.setErrorMessage}
                    refreshData={props.refreshData} text1="Semestr" text2="6" id="assigmentSemester"/>

          <button
            onClick={() => addAssigment()}
            className={stylesGroupView.messageButton}
            style={{ marginLeft: "3%", marginTop: "20px" }}
          >
            <p>DODAJ WYDARZENIE</p>
          </button>
        </div>
      </div>:null}

      <div
        className={stylesCalendar.calendar}
        style={{ alignItems: "stretch" }}
      >
        <div
          className={stylesCalendar.contentCalendar}
          style={{ height: "95%" }}
        >
          <div className={stylesCalendar.dateBar}>
            <div style={{ padding: "0 20px" }}>
              <p>
                {nameOfMonth(date.getMonth())} - {date.getFullYear()}
              </p>
            </div>
            <div style={{ padding: "0 20px" }}>
              <button className={styles.arrowButton} onClick={prevMonth}>
                {Icons.arrowLeft}
              </button>
              <button className={styles.arrowButton} onClick={nextMonth}>
                {Icons.arrowRight}
              </button>
            </div>
          </div>
          <div className={stylesCalendar.calendarPage}>
            <div className={stylesCalendar.dayName}>
              <div>Pon</div>
              <div>Wto</div>
              <div>Śro</div>
              <div>Czw</div>
              <div>Pią</div>
              <div>Sob</div>
              <div>Nie</div>
            </div>
            {htmlDays}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCalendar;
