import stylesMainPage from "./stylesMainPage.module.css";
import { Badge } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import $ from "./getElement";
import AddCourses from "./AddCourses";
import FindTeam from "./FindTeam";
import AddGroup from "./AddGroup";
import AddTeam from "./AddTeam";


const GroupButton = (props) => {
  function openNewGroupModal() {
    const choose = parseInt(props.viewNum);
    switch (choose)
    {
      case 0:
        setAddCourses(0);
        break;
      case 1:
        setAddCourses(1);
        break;
      case 2:
        setAddCourses(2);
        break;
      default:
        setAddCourses(-1);
    }
  }
  function openSearchGroupModal() {
    setFindTeam(true);
  }
  function closeNewGroupModal() {
    setAddCourses(-1);
  }
  function closeSearchGroupModal() {
    setFindTeam(false);
  }


  const groupsArray = props.groupsArray;
  const refreshGroupsArray = props.refreshGroupsArray;

  function toogleMenu() {
    let dropdownDisplay = $("myDropdown").style.display;
    if (dropdownDisplay === "block") {
      $("myDropdown").style.display = "none";
    } else {
      $("myDropdown").style.display = "block";
    }
  }

  const [addCourses, setAddCourses] = React.useState(-1);
  const [findTeam, setFindTeam] = React.useState(false);

  return (
    <>
      {addCourses===0? <AddGroup closeNewGroupModal={closeNewGroupModal} refreshGroupsArray={refreshGroupsArray}
                                   groupsArray={groupsArray} setErrorMessage={props.setErrorMessage} />: null}
      {addCourses===1? <AddTeam closeNewGroupModal={closeNewGroupModal} refreshGroupsArray={refreshGroupsArray}
                                groupsArray={groupsArray} setErrorMessage={props.setErrorMessage}
                                groupNumber={props.groupNumber}/>: null}
      {addCourses===2? <AddCourses closeNewGroupModal={closeNewGroupModal} refreshGroupsArray={refreshGroupsArray}
                                   groupsArray={groupsArray} setErrorMessage={props.setErrorMessage}
                                   groupNumber={props.groupNumber}/>: null}
      {findTeam? <FindTeam closeSearchGroupModal={closeSearchGroupModal} groupsArray={groupsArray}/> : null }


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
}

export default GroupButton;
