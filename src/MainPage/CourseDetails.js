import stylesMainPage from "./stylesMainPage.module.css";
import React from "react";
import TopMainPage from "./TopMainPage";
import AddUserButton from "./AddUserButton";
import stylesGroupView from "./stylesGroupView.module.css";
import ListElement from "./ListElement";
import NewUser from "./NewUser";
import * as Icon from "react-feather";
import $ from "./getElement";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";
import {useHistory} from "react-router-dom";

const isAdmin = (admins, email) => {
    for(let i=0;i<admins.length; i++)
    {
        if(admins[i].email===email)
            return true;
    }

    return false;
}

const CourseDetails = (props) => {
    const history = useHistory();
    const [numView, setNumView] = React.useState(0);
    const [editMode, setEditMode] = React.useState(false);
    const groupDetails = props.groupDetails;
    const courseDetails = groupDetails!==null && groupDetails.courses.length>0?groupDetails.courses[props.numOfCourse]:null;
    const [courseName, setCourseName] = React.useState(courseDetails!==null?courseDetails.name:"Nazwa grupy");
    const [courseLecturer, setCourseLecturer] = React.useState(courseDetails!==null?courseDetails.lecturer:"Prowadzący");
    const [courseStreet, setCourseStreet] = React.useState(courseDetails!==null?courseDetails.location.address.streetName:"Ulica");
    const [courseNumBuilding, setCourseNumBuilding] = React.useState(courseDetails!==null?courseDetails.location.address.buildingNumber:"Numer budynku");
    const [courseCity, setCourseCity] = React.useState(courseDetails!==null?courseDetails.location.address.city:"Miasto");
    const [courseLink, setCourseLink] = React.useState(courseDetails!==null?courseDetails.location.link:"Link");
    const [courseRoom, setCourseRoom] = React.useState(courseDetails!==null?courseDetails.location.room:"Pokój");
    const [courseSemester, setCourseSemester] = React.useState(courseDetails!==null?courseDetails.semester:"Semestr");

    React.useEffect(()=>{
        setCourseName(courseDetails!==null?courseDetails.name:"Nazwa grupy")
        setCourseLecturer(courseDetails!==null?courseDetails.lecturer:"Prowadzący");
        setCourseStreet(courseDetails!==null?courseDetails.location.address.streetName:"Ulica");
        setCourseNumBuilding(courseDetails!==null?courseDetails.location.address.buildingNumber:"Numer budynku");
        setCourseCity(courseDetails!==null?courseDetails.location.address.city:"Miasto");
        setCourseLink(courseDetails!==null?courseDetails.location.link:"Link");
        setCourseRoom(courseDetails!==null?courseDetails.location.room:"Pokój");
        setCourseSemester(courseDetails!==null?courseDetails.semester:"Semestr");
    }, [groupDetails])

    const changeView = (num) => {
        setNumView(num)
    }

    const courseNameChange = (event) => {
        setCourseName(event.target.value);
    }

    const deleteCourse = () => {
        PublicApi.deleteCourse(groupDetails.id, courseDetails.id,(res)=>{
            if(res){
                props.refreshData();
                props.returnToMainPage();
            }
        }, (err)=>{
            props.setErrorMessage(err.errorMessageForUser)
        });
    }

    const edit = () => {
        if(!editMode)
        {
            setEditMode(true)
        }
        else
        {
            PublicApi.editCourse(groupDetails.id, courseDetails.id, courseName, courseLecturer, courseStreet, courseNumBuilding,
                courseCity, courseLink, courseRoom, courseSemester,
            (res)=>{
                setEditMode(false)
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser)
            });
        }
    }

    return (
        <>
            <TopMainPage />

            <p
                style={{
                    fontSize: "2em",
                    margin: "0",
                    display: "inline-block",
                }}
            >
                {courseDetails!==null?courseDetails.name:"Nazwa grupy"}
            </p>
            <div className={stylesGroupView.dot}>
                <ListElement color="#ec524b" />
            </div>
            <p className={stylesGroupView.groupNumber}>
                {courseDetails!==null?courseDetails.lecturer:"Prowadzący"}
            </p>

            <div className={stylesGroupView.iconSet}>
                <div className={numView===0? stylesGroupView.iconBoxActive : stylesGroupView.iconBox} onClick={numView!==0?() => changeView(0):null}>
                    <Icon.Paperclip width="30" height="30" color={numView===0?"#4cd5df":"#979797"} />
                </div>
            </div>

            {numView===0?
                <>
                    <p>&nbsp;</p>
                    <div className={stylesGroupView.postsContainer + " "+stylesGroupView.postsContainer2}>

                        <div>
                            <label>Nazwa przdmiotu: </label>
                            <input id="courseName" value={courseName} onChange={courseNameChange} disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Prowadzący: </label>
                            <input id="courseLecturer" value={courseLecturer}
                                   onChange={(event)=>setCourseLecturer(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Ulica: </label>
                            <input id="courseStreet" value={courseStreet}
                                   onChange={(event)=>setCourseStreet(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Numer budynku: </label>
                            <input id="courseNumBuilding" value={courseNumBuilding}
                                   onChange={(event)=>setCourseNumBuilding(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Miasto: </label>
                            <input id="courseCity" value={courseCity}
                                   onChange={(event)=>setCourseCity(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Numer sali: </label>
                            <input id="courseRoom" value={courseRoom}
                                   onChange={(event)=>setCourseName(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Link: </label>
                            <input id="courseLink" value={courseLink}
                                   onChange={(event)=>setCourseLink(event.target.value)}
                                   disabled={!editMode}/>
                        </div>
                        <div>
                            <label>Semestr: </label>
                            <input id="courseSemester" value={courseSemester}
                                   onChange={(event)=>setCourseSemester(event.target.value)}
                                   disabled={!editMode}/>
                        </div>



                        <button className={stylesGroupView.messageButton} onClick={edit}>
                            {editMode?<p>ZAPISZ</p>:<p>EDYTUJ</p>}
                        </button>
                        <button className={stylesGroupView.messageButton} onClick={deleteCourse}>
                            <p>usuń przedmiot</p>
                        </button>
                    </div>
                </>:null}
        </>
    )
};

export default CourseDetails