import stylesMainPage from "./stylesMainPage.module.css";
import TopMainPage from "./TopMainPage";
import stylesGroupView from "./stylesGroupView.module.css";
import React from "react";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI"
import $ from "./getElement";


const BoxBox = (props) => {
    const groupsArray = props.groupsArray;
    const setGroupArray = props.setGroupsArray;

    const addGroup = (e) => {
        e.preventDefault();
        const gName = $("groupName").value;
        publicAPI.createGroup(gName, (res)=>{
            if(res!==null){
                getGroups();
            }
        })
    }

    const addTeam = (e) => {
        e.preventDefault();
        const tName = $("teamName").value;
        const groupID = $("groupID").value;
        publicAPI.createTeams([tName], groupID, (res) => {
            if(res!==null){
                getGroups()
            }
        })
    }

    const getGroups = () => {
        publicAPI.getAllGroupsAttended((res)=>{
            if(res!==null){
                setGroupArray(res);
            }
        })
    }

    return (
        <div className={stylesMainPage.rightContent}>
            <TopMainPage />
            <div className={stylesGroupView.groupContainer}>
                <div style={{width: "100%", height: "80%", display: "flex", flexDirection: "row", justifyContent: "center"}}>


                    <div style={{border: "1px solid black"}}>
                        <form onSubmit={addGroup}>
                            <input id="groupName" type="text" placeholder="Nazwa Rocznika/Grupy"/>
                            <button onClick={addGroup}>Dodaj Rocznik</button>
                        </form>
                        <div>
                            <p>Grupy: </p>
                            <div>
                                {
                                    (groupsArray.length!==0)?
                                    groupsArray.map((value,key)=><p key={key+1}>{key+1}. {value.name}</p>):
                                        <p>Brak grup</p>
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{border: "1px solid black"}}>
                        <form onSubmit={addTeam}>
                            <input id="teamName" type="text" placeholder="Nazwa zespołu"/>
                            <select id="groupID">
                                {
                                    groupsArray.map((value,key)=><option key={key+1} value={value.id}>{value.name}</option>)
                                }
                            </select>
                            <button onClick={addTeam}>Dodaj zespół</button>
                        </form>
                        <div>
                            <p>Grupy z zespołami: </p>
                            <div>
                                <ul>
                                    {
                                        groupsArray.map((group,key)=>
                                        <>
                                            <li key={key+1}>{group.name}</li>
                                            <ul>
                                                {group.teams.map((team,key2)=><li key={((key+1)*100)+key2}>{team.name}</li>)}
                                            </ul>
                                        </>)
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BoxBox