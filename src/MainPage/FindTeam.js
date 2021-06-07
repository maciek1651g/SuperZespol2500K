import stylesMainPage from "./stylesMainPage.module.css";
import * as Icon from "react-feather";
import SearchGroup from "./SearchGroup";
import React from "react";


const FindTeam = (props) => {
    const closeSearchGroupModal = props.closeSearchGroupModal;
    const groupsArray = props.groupsArray;

    return (
        <div id="modalSearchGroup" className={stylesMainPage.modal}>
            <div className={stylesMainPage.modalContent}>
          <span
              onClick={() => closeSearchGroupModal()}
              className={stylesMainPage.close}
          >
            &times;
          </span>
                <h2 style={{ margin: "30px 5%" }}>Znajdź zespół</h2>
                <div className={stylesMainPage.writeGroupName}>
                    <Icon.Search width="20" height="20" color="#4cd5df" />
                    <small style={{ color: "#979797", marginLeft: "10px" }}>
                        Wpisz nazwę zespołu...
                    </small>
                </div>
                {
                    groupsArray.map((group)=>
                            group.teams.map((team,key)=><SearchGroup key={key} group={team.name}/>))
                }
            </div>
        </div>
    )
}

export default FindTeam