import ClientAPI from "../clientAPI/ClientAPI";

function login(login, password, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        api.setBearerToken(res);
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

function addUsersToGroup(emailsArray, groupID, callback, errorCallback=null)
{
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = callback;
    api.onErrorFunctionHandler = errorCallback;
    api.addUsersToGroup(emailsArray, groupID);
}

const exp = {login, register, logout, createGroup, createTeams, createCourses, addUsersToGroup};
export default exp;