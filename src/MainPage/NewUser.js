import React from "react";
import * as Icon from "react-feather";
import stylesGroupView from "./stylesGroupView.module.css";
import PublicApi from "../publicFunctions/PublicFunctionsAPI";



const NewUser = (props) => {

  function deleteUserFromGroup()
  {
    PublicApi.deleteUserFromGroup([props.email], props.groupID, (res)=>{
      if(res) {
        props.refreshData();
      }
    }, (err)=>{
      props.setErrorMessage(err.errorMessageForUser)
    })
  }

  function deleteUserFromTeam()
  {
    PublicApi.deleteUsersFromTeam(props.groupID, props.teamName, [props.email], (res)=>{
      if(res) {
        props.refreshData();
      }
    }, (err)=>{
      props.setErrorMessage(err.errorMessageForUser)
    })
  }


  const isSetTeamName = props.teamName!==null;

    return (
      <>
        <div className={stylesGroupView.userBox}>
          <div className={stylesGroupView.width33}>
            <div className={stylesGroupView.avatar}>{props.text1.charAt(0).toUpperCase()}</div>
            <p style={{ margin: "0px", marginLeft: "20px" }}>
              {props.text1}
            </p>
          </div>

          <p
            className={stylesGroupView.width33}
            style={{
              color: "#979797",
              fontSize: "0.8rem",
              justifyContent: "center",
            }}
          >
            <span style={{ margin: "0px", marginRight: "20px" }}>
              {props.text2}
            </span>

            <Icon.Star
              width="30"
              height="30"
              color="#979797"
              className={stylesGroupView.svgButton}
            />
          </p>
          <div
            className={stylesGroupView.width33}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ margin: "0 15px" }} onClick={isSetTeamName? deleteUserFromTeam :deleteUserFromGroup}>
              <Icon.UserX
                width="30"
                height="30"
                color="#979797"
                className={stylesGroupView.svgButton}
              />
            </div>
            <div style={{ margin: "0 5px" }}>
              <Icon.Edit3
                width="30"
                height="30"
                color="#979797"
                className={stylesGroupView.svgButton}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default NewUser
