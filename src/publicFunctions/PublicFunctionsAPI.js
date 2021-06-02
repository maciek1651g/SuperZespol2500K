import ClientAPI from "../clientAPI/ClientAPI";
import User from "../User/User"

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
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
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
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.createGroup(name);
}

function createTeams(arrayTeams, groupID, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.createTeams(arrayTeams, groupID);
}

function createCourses(arrayCourses, groupID, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.createCourses(arrayCourses, groupID);
}

function createOneCourse(courseName, lecturerName, locationStreetName, locationBuildingNumber,
                       locationCity, locationLink, locationRoomNumber, semester,
                       groupID, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    const location = {address:{streetName: locationStreetName, buildingNumber: locationBuildingNumber,
            city: locationCity}, link: locationLink, room: locationRoomNumber};
    const course = [{name: courseName, lecturer: lecturerName,
        location: location,  semester: semester}]
    api.createCourses(course, groupID);
}

function addUsersToGroup(emailsArray, groupID, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.addUsersToGroup(emailsArray, groupID);
}

function getAllGroupsAttended(callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.getAllGroupsAttended();
}

function createScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.createScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray);
}

function getGroupsPartial(callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.getGroupsPartial();
}

function deleteUserFromGroup(arrayEmails, groupID, callback, errorCallback)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.deleteUserFromGroup(arrayEmails, groupID);
}

const exp = {login, register, logout, createGroup, createTeams, createCourses, addUsersToGroup,
            getAllGroupsAttended, createScheduleForGroupAndTeam, getGroupsPartial, createOneCourse,
            deleteUserFromGroup};
export default exp;