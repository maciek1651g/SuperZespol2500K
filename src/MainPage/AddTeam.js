import stylesMainPage from "./stylesMainPage.module.css";
import NewGroup from "./NewGroup";
import stylesGroupView from "./stylesGroupView.module.css";
import React from "react";
import $ from "./getElement";
import publicAPI from "../publicFunctions/PublicFunctionsAPI";

const AddTeam = (props) => {
    const closeNewGroupModal = props.closeNewGroupModal;
    const refreshGroupsArray = props.refreshGroupsArray;
    const groupsArray = props.groupsArray;
    const [selectedGroup, setSelectedGroup] = React.useState(groupsArray[props.groupNumber].id)

    function createCourse(e){
        e.preventDefault();
        let teamName = $("teamName").value;
        let groupID = $("groupID").value;

        publicAPI.createTeams([teamName], groupID, (res)=>{
            if(res!==null)
            {
                getGroups()
            }
            closeNewGroupModal();
        },(err)=>{
            props.setErrorMessage(err.errorMessageForUser);
        })

    }

    const getGroups = () => {
        refreshGroupsArray();
    }

    const changeGroup = (event) => {
        setSelectedGroup(event.target.value);
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
                <h2 style={{ margin: "30px 5%" }}>Dodaj nowy zespół</h2>
                <form onSubmit={createCourse}>
                    <div className={stylesMainPage.groupInfo}>
                        <p style={{ fontWeight: "bold", width: "50%" }}>Rocznik/grupa</p>
                        <select value={selectedGroup} onChange={changeGroup} style={{
                            fontWeight: "500",
                            color: "black",
                            width: "50%",
                            textAlign: "center",
                        }} id="groupID">
                            {
                                groupsArray.map((value,key)=>
                                    <option key={key+1} value={value.id}>{value.name}</option>)
                            }
                        </select>

                    </div>

                    <NewGroup id="teamName" text1="Nazwa zespołu" text2="Grupa ćwiczeniowa 1" />
                    <button
                        className={stylesGroupView.messageButton}
                        style={{ margin: "30px 5%" }}
                        onClick={createCourse}>
                        DODAJ ZESPÓŁ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddTeam