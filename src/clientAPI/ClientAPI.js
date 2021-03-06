import ErrorClass from "./ErrorClass";

class ClientAPI {
  static baseUrl = "http://localhost:3000";
  static nameCookie = "Lorem_value";
  static bearer = null;
  onErrorFunctionHandler = null;
  onSuccessFunctionHandler = null;

  sendMessage(method, url, jsonData = null, headers = {}) {
    let xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), ClientAPI.baseUrl + url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.timeout = 30000;

    if (ClientAPI.bearer !== null) {
      xhr.setRequestHeader("Authorization", "Bearer " + ClientAPI.bearer);
    }

    let response = null;
    let error = null;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (parseInt(xhr.status / 100) === 2) {
          response = xhr.responseText;

          if (response !== "") {
            response = this.jsonToData(response);
          } else {
            response = true;
          }
        } else {
          if (xhr.status !== 0) {
            let regExp = new RegExp("\\{.*\\}", "s");
            let errorObject = xhr.responseText.match(regExp);
            let textError = null;
            if (errorObject !== null) {
              errorObject = errorObject[0];
              textError = this.jsonToData(errorObject);
            } else {
              textError = "Niezidentyfikowany błąd.";
            }
            error = new ErrorClass(
              xhr.status,
              textError.Message,
              xhr.responseText
            );
          }

          response = null;
        }
        this.onSuccess(response);
        if (error !== null) {
          this.onError(error);
        }
      }
    };
    xhr.ontimeout = (e) => {
      this.onError(
        new ErrorClass(
          404,
          "Zbyt długi czas oczekiwania na odpoweidź.",
          "Timeout"
        )
      );
    };
    xhr.onabort = (e) => {
      this.onError(
        new ErrorClass(
          404,
          "Zatrzymano zapytanie z nieznanych przyczyn.",
          "Abort request"
        )
      );
    };
    xhr.onerror = (e) => {
      this.onError(
        new ErrorClass(
          404,
          "Błąd połączenia z Internetem.",
          "Error during request"
        )
      );
    };

    let headersKeys = Object.keys(headers);
    for (let i = 0; i < headersKeys.length; i++) {
      let key = headersKeys[i];
      xhr.setRequestHeader(key + "", headers[key] + "");
    }

    xhr.send(jsonData);
  }

  checkIfLoggedIn() {
    if (ClientAPI.bearer === null) {
      ClientAPI.bearer = this.getCookie(ClientAPI.nameCookie);
      if (ClientAPI.bearer === null) {
        return false;
      }
    }

    return true;
  }

  setBearerToken(token) {
    if (token !== null && typeof token["value"] !== undefined) {
      ClientAPI.bearer = token["value"];
      document.cookie =
        ClientAPI.nameCookie +
        "=" +
        token["value"] +
        "; expires=" +
        new Date(token["expires"]) +
        "; SameSite=Lax; path=/;";
    }
  }

  logout() {
    document.cookie =
      ClientAPI.nameCookie +
      "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    ClientAPI.bearer = null;
  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  onSuccess(response) {
    if (
      this.onSuccessFunctionHandler !== null &&
      typeof this.onSuccessFunctionHandler !== "undefined"
    ) {
      this.onSuccessFunctionHandler(response);
    }
  }

  onError(errorInfo) {
    //console.log(errorInfo);
    if (
      this.onErrorFunctionHandler !== null &&
      typeof this.onErrorFunctionHandler !== "undefined"
    ) {
      this.onErrorFunctionHandler(errorInfo);
    }
  }

  dataToJson(data) {
    try {
      return JSON.stringify(data);
    } catch (error) {
      this.onError(
        new ErrorClass(404, "Błąd konwersji danych do typu JSON", error.message)
      );
    }
  }

  jsonToData(jsonData) {
    try {
      return JSON.parse(jsonData);
    } catch (error) {
      this.onError(
        new ErrorClass(404, "Błąd konwersji typu JSON na dane", error.message)
      );
    }
  }

  logIn(login, password) {
    let data = { email: login, password: password };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/Users/login", data);
  }

  register(username, email, password, firstName, lastName, role = 0) {
    let data = {
      role: role,
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/Users/register", data);
  }

  createGroup(name) {
    let data = { name: name };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/Groups", data);
  }

  getAllGroups() {
    this.sendMessage("GET", "/Groups");
  }

  createTeams(teamsArray, groupID) {
    let data = { teamNames: teamsArray };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/groups/" + groupID + "/Teams", data);
  }

  createCourses(courserArray, groupID) {
    let data = { courses: courserArray };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/groups/" + groupID + "/Courses", data);
  }

  deleteCourse(groupID, courseID) {
    this.sendMessage("DELETE", "/groups/"+groupID+"/Courses/"+courseID);
  }

  editCourse(groupID, courseID, courseName, courseLecturer, courseStreet, courseNumBuilding, courseCity, courseLink, courseRoom, courseSemester)
  {
    let data =
        {
          course:  {
            name: courseName,
            lecturer: courseLecturer,
            location: {
              address:{
                streetName: courseStreet,
                buildingNumber: courseNumBuilding,
                city: courseCity
              },
              link: courseLink,
              room: courseRoom
            },
            semester: courseSemester
          }
        };
    data = this.dataToJson(data);
    this.sendMessage("PUT", "/groups/"+groupID+"/Courses/"+courseID, data);
  }

  addUsersToGroup(emailsArray, groupID) {
    let data = { emails: emailsArray };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/Groups/" + groupID + "/users", data);
  }

  getAllGroupsAttended() {
    this.sendMessage("GET", "/Groups/attended/full");
  }

  createScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray) {
    let data = {
      schedule: { scheduledCourses: scheduledCursesArray, semester: semester },
    };
    data = this.dataToJson(data);
    this.sendMessage("POST", "/groups/" + groupID + "/Teams/" + teamName + "/schedules", data);
  }

  editScheduleForGroupAndTeam(groupID, teamName, semester, scheduledCursesArray) {
    let data = {
      schedule: { scheduledCourses: scheduledCursesArray, semester: semester },
    };
    data = this.dataToJson(data);
    this.sendMessage("PUT", "/groups/" + groupID + "/Teams/" + teamName + "/schedules", data);
  }

  getGroupsPartial()
  {
    this.sendMessage("GET", "/Groups/attended/partial");
  }

  deleteUserFromGroup(arrayEmails, groupID)
  {
    let data = {emails: arrayEmails};
    data = this.dataToJson(data);
    this.sendMessage("DELETE", "/groups/" + groupID + "/users", data);
  }

  getSomeUsers(groupID, partEmail)
  {
    this.sendMessage("GET", "/groups/" + groupID + "/users?SearchLetters="+partEmail);
  }

  editGroupName(groupID, newGroupName)
  {
    let data = {newName: newGroupName};
    data = this.dataToJson(data);
    this.sendMessage("PUT", "/Groups/" + groupID, data);
  }

  deleteGroup(groupID)
  {
    this.sendMessage("DELETE", "/Groups/" + groupID);
  }

  editTeamName(groupID, teamName, newTeamName)
  {
    let data = {newTeamName: newTeamName};
    data = this.dataToJson(data);
    this.sendMessage("PUT", "/groups/"+groupID+"/Teams/"+teamName, data);
  }

  deleteTeam(groupID, teamName)
  {
    this.sendMessage("DELETE", "/groups/"+groupID+"/Teams/"+teamName);
  }

  addUsersToTeam(groupID, teamName, emailsArray)
  {
    let data = {emails: emailsArray};
    data = this.dataToJson(data);
    this.sendMessage("POST", "/groups/"+groupID+"/Teams/"+teamName+"/users", data);
  }

  deleteUserFromTeam(groupID, teamName, arrayEmails)
  {
    let data = {emails: arrayEmails};
    data = this.dataToJson(data);
    this.sendMessage("DELETE", "/groups/"+groupID+"/Teams/"+teamName+"/users", data);
  }

  addAssignmentToTeam(groupID, teamName, courseID, assigmentName, assigmentDescription, semester, deadline)
  {
    let data = null;
    if(courseID===null)
    {
      data = {name: assigmentName, description: assigmentDescription, semester: semester, deadline: deadline};
    }
    else
    {
      data = {name: assigmentName, description: assigmentDescription, deadline: deadline, courseId: courseID};
    }

    data = this.dataToJson(data);

    this.sendMessage("POST", "/groups/"+groupID+"/teams/"+teamName+"/Assignments", data);
  }

  deleteAssigmentFromTeam(groupID, assigmentID, teamName)
  {
    this.sendMessage("DELETE", "/groups/"+groupID+"/Teams/"+teamName+"/Assignments/"+assigmentID);
  }

  editTeamAssigment(groupID, assigmentID, teamName, courseID, assigmentName, assigmentDescription, semester, deadline)
  {
    let data = null;
    if(courseID===null)
    {
      data = {name: assigmentName, description: assigmentDescription, semester: semester, deadline: deadline};
    }
    else
    {
      data = {name: assigmentName, description: assigmentDescription, deadline: deadline, courseId: courseID};
    }

    data = this.dataToJson(data);

    this.sendMessage("PUT", "/groups/"+groupID+"/Teams/"+teamName+"/Assignments/"+assigmentID, data);
  }

}

export default ClientAPI;
