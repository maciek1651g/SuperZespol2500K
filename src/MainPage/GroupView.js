import TopMainPage from "./TopMainPage";
import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import React from "react";
import GroupButton from "./GroupButton";
import TabCard from "./TabCard";
import $ from "./getElement";
import GroupDetails from "./GroupDetails";
import TeamDelails from "./TeamDelails";
import CourseDetails from "./CourseDetails";

const GroupView = (props) =>  {
  const [selectedGroup, setSelectedGroup] = React.useState(0);
  const [selectedTeam, setSelectedTeam] = React.useState(0);
  const [selectedCours, setSelectedCours] = React.useState(0);
  const [subpage, setSubpage] = React.useState(0);
  const [viewChoose, setViewChoose] = React.useState("0");
  const [groupArrayState, setGroupArrayState] = React.useState(props.gtable);
  const [table, setTable] = React.useState(props.gtable);


  const openGroups = (groupNum) => {
    setSelectedGroup(groupNum);
    setSubpage(1);
  }
  const openTeams = (teamNum) => {
    setSelectedTeam(teamNum)
    setSubpage(2);
  }
  const openCours = (courseNum) => {
    setSelectedCours(courseNum)
    setSubpage(3);
  }

  const changeGroup=() => {
    setSelectedGroup($("group").value);
  }
  const changeViewChoose = () => {
    setViewChoose($("view").value);
  }

  const changeView = () => {
    switch (viewChoose)
    {
      case "0":
        setTable(groupArrayState);
        break;
      case "1":
        setTable(groupArrayState[selectedGroup]["teams"]);
        break;
      case "2":
        setTable(groupArrayState[selectedGroup]["courses"]);
        break;
      default:
        setTable(groupArrayState);
    }
  }

  React.useEffect(() => {
    changeView();
  }, [viewChoose, selectedGroup, groupArrayState]);

  React.useEffect(()=>{
    $("groupButton").addEventListener("click", returnToMainPage);

    return function cleanupListener() {
      const groupButton = $("groupButton");
      if(groupButton!==null && typeof groupButton !== "undefined")
      {
        groupButton.removeEventListener("click", returnToMainPage);
      }
    }
  },[])

  const returnToMainPage = () => {
    setSubpage(0);
  }

  if(props.gtable!==groupArrayState)
  {
    setGroupArrayState(props.gtable);
  }

  const groupsArray = props.gtable;
  const refreshGTable = props.refreshGTable;

  return (
    <div className={stylesMainPage.rightContent}>
      {subpage === 3? <CourseDetails refreshData={props.refreshGTable}
                                    setErrorMessage={props.setErrorMessage}
                                    groupDetails={groupsArray[selectedGroup]}
                                    numOfCourse={selectedCours}
                                    returnToMainPage={returnToMainPage}
      /> : null}


      {subpage === 2? <TeamDelails  groupDetails={groupsArray[selectedGroup]}
                                    refreshData={props.refreshGTable}
                                    setErrorMessage={props.setErrorMessage}
                                    numOfTeam={selectedTeam}
                                    returnToMainPage={returnToMainPage}
      />  : null}

      {subpage === 1? <GroupDetails refreshData={props.refreshGTable}
                                    setErrorMessage={props.setErrorMessage}
                                    groupDetails={groupsArray[selectedGroup]}
                                    returnToMainPage={returnToMainPage}
      /> : null}

      {subpage === 0 ?
        <>
          <TopMainPage />
          <GroupButton groupsArray={groupsArray} refreshGroupsArray={refreshGTable}
                        viewNum={viewChoose} setErrorMessage={props.setErrorMessage}
                       groupNumber={selectedGroup}/>
          <p
            style={{
              fontSize: "2em",
              margin: "0",
            }}
          >
            Twoje Grupy
          </p>
          <div className={stylesGroupView.topContainer}>




            <div style={{display: "flex", flexDirection: "row", marginBottom: "20px",
              width: "60%", justifyContent: "space-between"}}>

              <div>
                <label htmlFor="view">Wybierz widok: </label>
                <select value={viewChoose} id="view" onChange={changeViewChoose}>
                  <option value={"0"}>Grupy/Roczniki</option>
                  <option value={"1"}>Zespoły</option>
                  <option value={"2"}>Przedmioty</option>
                </select>
              </div>

              <div style={{marginRight: "20px"}}>
                <label htmlFor="group">Wybierz grupę: </label>
                <select value={selectedGroup} id="group" onChange={changeGroup} disabled={viewChoose==="0"} >
                  {
                    groupsArray.map((value,key)=><option key={key+1} value={key}>{value.name}</option>)
                  }
                </select>
              </div>

            </div>





            <div className={stylesGroupView.groupContainer}>

              {viewChoose==="0"?
                  <TabCard gtable={table} openPosts={openGroups}/>
                  :viewChoose==="1"?
                  <TabCard gtable={table} openPosts={openTeams}/>
                  :viewChoose==="2"?
                  <TabCard gtable={table} openPosts={openCours}/>
                  :null
              }


            </div>
          </div>
        </>
       : null}
    </div>
  );
}

export default GroupView