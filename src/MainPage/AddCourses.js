import stylesMainPage from "./stylesMainPage.module.css";
import NewGroup from "./NewGroup";
import stylesGroupView from "./stylesGroupView.module.css";
import React from "react";
import $ from "./getElement";
import publicAPI from "../publicFunctions/PublicFunctionsAPI";

const AddCourses = (props) => {
    const closeNewGroupModal = props.closeNewGroupModal;
    const refreshGroupsArray = props.refreshGroupsArray;
    const groupsArray = props.groupsArray;

    function createCourse(e){
        e.preventDefault();
        let courseName = $("courseName").value;
        let lecturerName = $("lecturerName").value;
        let locationStreetName = $("locationStreetName").value;
        let locationBuildingNumber = $("locationBuildingNumber").value;
        let locationCity = $("locationCity").value;
        let locationLink = $("locationLink").value;
        let locationRoomNumber = $("locationRoomNumber").value;
        let semester = $("semester").value;
        let groupID = $("groupID").value;

        publicAPI.createOneCourse(courseName, lecturerName, locationStreetName, locationBuildingNumber,
            locationCity, locationLink, locationRoomNumber, semester, groupID, (res)=>{
                if(res!==null)
                {
                    getGroups()
                }
                closeNewGroupModal();
            }, (err)=>{
                props.setErrorMessage(err.errorMessageForUser);
            })
    }

    const getGroups = () => {
        refreshGroupsArray();
    }

    return (
        <div id="modalNewGroup" className={stylesMainPage.modal}>
            <div className={stylesMainPage.modalContent}>
          <span
              onClick={() => closeNewGroupModal()}
              className={stylesMainPage.close}
          >
            &times;
          </span>
                <h2 style={{ margin: "30px 5%" }}>Dodaj nowy przedmiot</h2>
                <form onSubmit={createCourse}>
                    <div className={stylesMainPage.groupInfo}>
                        <p style={{ fontWeight: "bold", width: "50%" }}>Rocznik/grupa</p>
                        <select  style={{
                            fontWeight: "500",
                            color: "black",
                            width: "50%",
                            textAlign: "center",
                        }} id="groupID">
                            {
                                groupsArray.map((value,key)=>
                                    <option key={key+1} value={value.id}
                                            selected={parseInt(props.groupNumber)===key}>{value.name}</option>)
                            }
                        </select>

                    </div>

                    <NewGroup id="courseName" text1="Przedmiot" text2="Algebra liniowa" />
                    <NewGroup id="lecturerName" text1="Prowadzący" text2="Jan Kowal" />
                    <NewGroup id="locationStreetName" text1="Ulica" text2="Nowoursynowska" />
                    <NewGroup id="locationBuildingNumber" text1="Numer budynku" text2="34" />
                    <NewGroup id="locationCity" text1="Miasto" text2="Warszawa" />
                    <NewGroup id="locationLink" text1="Link do zespołu" text2="wzim.sggw.pl" />
                    <NewGroup id="locationRoomNumber" text1="Numer sali" text2="10a" />
                    <NewGroup id="semester" text1="Semestr" text2="3" />
                    <button
                        className={stylesGroupView.messageButton}
                        style={{ margin: "30px 5%" }}
                        onClick={createCourse}>
                        DODAJ PRZEDMIOT
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourses