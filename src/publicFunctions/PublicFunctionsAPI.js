import ClientAPI from "../clientAPI/ClientAPI";
import User from "../User/User"

function createAPI(callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;

    return api;
}


function login(login, password, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        api.setBearerToken(res.token);
        User.setUser(res.user);
        if(callback!==null)
        {
            callback(res);
        }
    };
    api.onErrorFunctionHandler = errorCallback;
    api.logIn(login,password);
}

function register(username, email, password, firstName, lastName, role, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.register(username,email,password,firstName,lastName,role);
}

function logout()
{
    const api = new ClientAPI();
    localStorage.removeItem("User");
    api.logout();
}

function createGroup(name, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.createGroup(name);
}

function createTeams(arrayTeams, groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.createTeams(arrayTeams, groupID);
}

function createCourses(arrayCourses, groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.createCourses(arrayCourses, groupID);
}

function createOneCourse(courseName, lecturerName, locationStreetName, locationBuildingNumber,
                       locationCity, locationLink, locationRoomNumber, semester,
                       groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    const location = {address:{streetName: locationStreetName, buildingNumber: locationBuildingNumber,
            city: locationCity}, link: locationLink, room: locationRoomNumber};
    const course = [{name: courseName, lecturer: lecturerName,
        location: location,  semester: semester}]
    api.createCourses(course, groupID);
}

function addUsersToGroup(emailsArray, groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.addUsersToGroup(emailsArray, groupID);
}

function getAllGroupsAttended(callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.getAllGroupsAttended();
}

function createScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.createScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray);
}

function getGroupsPartial(callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.getGroupsPartial();
}

function deleteUserFromGroup(arrayEmails, groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.deleteUserFromGroup(arrayEmails, groupID);
}

function getSomeUsers(groupID, partEmail, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.getSomeUsers(groupID, partEmail);
}

function editGroupName(groupID, newGroupName, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.editGroupName(groupID, newGroupName);
}

function deleteGroup(groupID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.deleteGroup(groupID);
}

function editTeamName(groupID, teamName, newTeamName, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.editTeamName(groupID, teamName, newTeamName);
}

function deleteTeam(groupID, teamName, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.deleteTeam(groupID, teamName);
}

function addUsersToTeam(groupID, teamName, emailsArray, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.addUsersToTeam(groupID, teamName, emailsArray);
}

function deleteUsersFromTeam(groupID, teamName, emailsArray, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.deleteUserFromTeam(groupID, teamName, emailsArray);
}

function editScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray, callback, errorCallback=null) {
    const api = createAPI(callback, errorCallback);
    api.editScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray);
}

function addAssigmentToTeam(groupID, teamName, courseID, assigmentName, assigmentDescription, semester, deadline, callback, errorCallback=null) {
    const api = createAPI(callback, errorCallback);
    api.addAssignmentToTeam(groupID,teamName,courseID,assigmentName,assigmentDescription,semester,deadline);
}

function deleteAssigmentFromTeam(groupID, teamName, assigmentID, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.deleteAssigmentFromTeam(groupID, assigmentID, teamName);
}

function editTeamAssigment(groupID, assigmentID, teamName, courseID, assigmentName, assigmentDescription, semester, deadline, callback, errorCallback=null)
{
    const api = createAPI(callback, errorCallback);
    api.editTeamAssigment(groupID, assigmentID,teamName,courseID,assigmentName,assigmentDescription,semester,deadline);
}

const exp = {login, register, logout, createGroup, createTeams, createCourses, addUsersToGroup,
            getAllGroupsAttended, createScheduleForGroupAndTeam, getGroupsPartial, createOneCourse,
            deleteUserFromGroup, getSomeUsers, editGroupName, deleteGroup, editTeamName,
            deleteTeam, addUsersToTeam, deleteUsersFromTeam, editScheduleForGroupAndTeam,
            addAssigmentToTeam, deleteAssigmentFromTeam, editTeamAssigment};
export default exp;