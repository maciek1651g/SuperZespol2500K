import stylesCalendar from "./styleCalendar.module.css";
import styles from "../LoginPage/loginStyle.module.css";
import DayBox from "./DayBox";
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
    let tmpDate = new Date(year,month,1);
    let firstDayInMonth = tmpDate.getDay();
    if(firstDayInMonth===0) firstDayInMonth=6; else firstDayInMonth-=1;
    let countOfDays = numberOfDaysInMonth(tmpDate.getMonth(), tmpDate.getFullYear())
    let lastDayInMonth = 6-(new Date(tmpDate.setDate(tmpDate.getDate()+(countOfDays-2)))).getDay();
    //if(lastDayInMonth===6) lastDayInMonth=0; else lastDayInMonth+=1;
    let htmlDays=[];
    const days = firstDayInMonth+countOfDays+lastDayInMonth;
    tmpDate = new Date(year,month,1);
    tmpDate = new Date(tmpDate.setDate(tmpDate.getDate()-firstDayInMonth));

    for(let i=0;i<days;i++)
    {
        let notInfo = null;

        if(tmpDate.getMonth()===month)
        {
            if(tmpDate.getDate()===currentDay && tmpDate.getFullYear()===currentYear && tmpDate.getMonth()===currentMonth)
            {
                htmlDays.push(<DayBox key={i} day={tmpDate.getDate()} class={stylesCalendar.dayBox+' '+stylesCalendar.currentDay} notInfo={notInfo}/>)
            }
            else
            {
                htmlDays.push(<DayBox key={i} day={tmpDate.getDate()} class={stylesCalendar.dayBox} notInfo={notInfo}/>)
            }
        }
        else
        {
            htmlDays.push(<DayBox key={i} day={tmpDate.getDate()} class={stylesCalendar.dayBoxGray} notInfo={notInfo}/>)
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