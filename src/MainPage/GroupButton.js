import stylesMainPage from "./stylesMainPage.module.css";
import { Badge } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import SearchGroup from "./SearchGroup";
import * as Icon from "react-feather";
import $ from "./getElement";
import AddCourses from "./AddCourses";
import FindTeam from "./FindTeam";

function openNewGroupModal() {
  $("modalNewGroup").style.display = "block";
}
function openSearchGroupModal() {
  $("modalSearchGroup").style.display = "block";
}
function closeNewGroupModal() {
  $("modalNewGroup").style.display = "none";
}
function closeSearchGroupModal() {
  $("modalSearchGroup").style.display = "none";
}
const GroupButton = (props) => {
  const groupsArray = props.groupsArray;
  const setGroupsArray = props.setGroupsArray;

  function toogleMenu() {
    let dropdownDisplay = $("myDropdown").style.display;
    if (dropdownDisplay === "block") {
      $("myDropdown").style.display = "none";
    } else {
      $("myDropdown").style.display = "block";
    }
  }



  return (
    <>
      <AddCourses closeNewGroupModal={closeNewGroupModal} setGroupsArray={setGroupsArray}
                  groupsArray={groupsArray}/>
     <FindTeam closeSearchGroupModal={closeSearchGroupModal} groupsArray={groupsArray}/>
      <div
        className={stylesMainPage.dotsDropdown}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Badge className={stylesMainPage.threeDotsBox}>
          <div
            className={stylesMainPage.threeDotsButton}
            onClick={() => toogleMenu()}
          >
            <MoreVertIcon
              className={stylesMainPage.threeDots}
              style={{ paddingBottom: "0px" }}
            />
          </div>

          <div className={stylesMainPage.dropdownContext} id="myDropdown">
            <Badge className={stylesMainPage.threeDotsBoxOpen}>
              <AddBoxOutlinedIcon
                id="addGroupButton"
                onClick={() => openNewGroupModal()}
                className={stylesMainPage.threeDots}
              />
              <SearchIcon
                id="searchGroupButton"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => openSearchGroupModal()}
                className={stylesMainPage.threeDots}
              />
            </Badge>
          </div>
        </Badge>
      </div>
    </>
  );
};

export default GroupButton;
