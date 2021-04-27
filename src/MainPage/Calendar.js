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

    const tmpDate = new Date(date.getFullYear(),date.getMonth(),1);
    let firstDayInMonth = tmpDate.getDay();
    if(firstDayInMonth===0)firstDayInMonth=7;
    let countOfDays = numberOfDaysInMonth(tmpDate.getMonth(), tmpDate.getFullYear())
    let lastDayInMonth = 7-(new Date(tmpDate.getFullYear(),tmpDate.getMonth(),countOfDays)).getDay();
    if(lastDayInMonth===7)lastDayInMonth=0;
    let htmlDays=[];
    let j=1;


    for(let i=1;i<firstDayInMonth;i++)
    {
        htmlDays.push(<div key={j} className={stylesCalendar.dayBoxGray}>31</div>);
        j+=1;
    }
    for(let i=1;i<=countOfDays;i++)
    {
        htmlDays.push(<div key={j} className={stylesCalendar.dayBox}>{i}</div>);
        j+=1;
    }
    for(let i=1;i<=lastDayInMonth;i++)
    {
        htmlDays.push(<div key={j} className={stylesCalendar.dayBoxGray}>{i}</div>);
        j+=1;
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