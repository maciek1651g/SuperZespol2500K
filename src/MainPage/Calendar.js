import stylesCalendar from "./styleCalendar.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import Icons from "../img/iconsSVG";
import React from "react";

const numberOfDaysInMonth = (month, year) => {
    switch (month)
    {
        case 0:
            return 31;
        case 1:
            if((year%4===0 && year%100!==0) || year%400===0)
                return 29;
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
            console.log("Wrong number of month!")
    }
}

const nameOfMonth = (month) => {
    switch (month)
    {
        case 0:
            return "Styczeń";
        case 1:
            return "Luty"
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
            console.log("Wrong number of month!")
    }
}

const Calendar = ({date, setDate}) => {

    const nextMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth()+1)))
    }

    const prevMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth()-1)))
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()
    const year = date.getFullYear();
    const month = date.getMonth();
    let tmpDate = new Date(year,month,0);
    let firstDayInMonth = tmpDate.getDay();
    let countOfDays = numberOfDaysInMonth(tmpDate.getMonth(), tmpDate.getFullYear())
    let lastDayInMonth = 6-(new Date(tmpDate.setDate(tmpDate.getDate()+countOfDays))).getDay();
    let htmlDays=[];
    const days = firstDayInMonth+countOfDays+lastDayInMonth+1;
    tmpDate = new Date(year,month,1);
    tmpDate = new Date(tmpDate.setDate(tmpDate.getDate()-firstDayInMonth));

    for(let i=0;i<days;i++)
    {
        if(tmpDate.getMonth()===month)
        {
            if(tmpDate.getDate()===currentDay && tmpDate.getFullYear()===currentYear && tmpDate.getMonth()===currentMonth)
            {
                htmlDays.push(<div key={i} style={{backgroundColor: "#43D7E2"}} className={stylesCalendar.dayBox}>{tmpDate.getDate()}</div>);
            }
            else
            {
                htmlDays.push(<div key={i} className={stylesCalendar.dayBox}>{tmpDate.getDate()}</div>);
            }
        }
        else
        {
            htmlDays.push(<div key={i} className={stylesCalendar.dayBoxGray}>{tmpDate.getDate()}</div>);
        }
        tmpDate = new Date(tmpDate.setDate(tmpDate.getDate()+1));
    }


    return (
        <div className={stylesCalendar.calendar}>
            <div className={stylesCalendar.contentCalendar}>
                <div className={stylesCalendar.dateBar}>
                    <div style={{padding: "0 20px"}}><p>{nameOfMonth(date.getMonth())} - {date.getFullYear()}</p></div>
                    <div style={{padding: "0 20px"}}>
                        <button className={styles.arrowButton} onClick={prevMonth}>{Icons.arrowLeft}</button>
                        <button className={styles.arrowButton} onClick={nextMonth}>{Icons.arrowRight}</button>
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
    )
}

export default Calendar