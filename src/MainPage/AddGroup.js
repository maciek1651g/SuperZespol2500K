import stylesMainPage from "./stylesMainPage.module.css";
import NewGroup from "./NewGroup";
import stylesGroupView from "./stylesGroupView.module.css";
import React from "react";
import $ from "./getElement";
import publicAPI from "../publicFunctions/PublicFunctionsAPI";

const AddGroup = (props) => {
    const closeNewGroupModal = props.closeNewGroupModal;
    const refreshGroupsArray = props.refreshGroupsArray;

    function createCourse(e){
        e.preventDefault();
        let groupName = $("groupName").value;

        publicAPI.createGroup(groupName, (res)=>{
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

    return (
        <div id="modalNewGroup" className={stylesMainPage.modal}>
            <div className={stylesMainPage.modalContent}>
          <span
              onClick={() => closeNewGroupModal()}
              className={stylesMainPage.close}
          >
            &times;
          </span>
                <h2 style={{ margin: "30px 5%" }}>Dodaj Nową Grupę</h2>
                <form onSubmit={createCourse}>
                    <NewGroup id="groupName" text1="Nazwa grupy/rocznika" text2="Rocznik 2018/2021" />
                    <button
                        className={stylesGroupView.messageButton}
                        style={{ margin: "30px 5%" }}
                        onClick={createCourse}>
                        DODAJ GRUPĘ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddGroup