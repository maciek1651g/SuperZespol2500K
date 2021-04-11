let baseUrl = "http://localhost:3000";

const sendMessage = (method, url, jsonData, headers = {}, onErrorFunction = null) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), baseUrl+url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    let response = null;

    xhr.onreadystatechange = (aEvt) =>
    {
        if (xhr.readyState === 4)
        {
            if(xhr.status === 200)
            {
                response = xhr.responseText;
            }
            else
            {
                let error = {codeStatus: xhr.status, textStatus: xhr.statusText};
                if(onErrorFunction!==null)
                {
                    onErrorFunction(error);
                }
                response = null;
            }
        }
    };

    let headersKeys = Object.keys(headers);
    for(let i=0;i<headersKeys.length;i++)
    {
        let key = headersKeys[i];
        xhr.setRequestHeader(key+"",headers[key]+"");
    }

    xhr.send(jsonData);
    return response;
}

const dataToJson = (data) => {
    try{
        return JSON.stringify(data);
    } catch {
        console.error("Error conversion data to JSON")
    }
}

const jsonToData = (jsonData) => {
    try{
        return JSON.parse(jsonData);
    } catch {
        console.error("Error conversion JSON to data")
    }
}

const logIn = async (login, password, onErrorFunction = null) => {
    let data = {email: login, password: password};
    data = dataToJson(data);
    let response = sendMessage("POST", "/Users/login", data, {}, onErrorFunction);
    response = jsonToData(response);
    if(response!==null)
    {
        let cookie = "value="+response["value"]+"; expires="+(new Date(response["expires"]));
        document.cookie = cookie;
        window.location.href = "http://localhost:3000";
    }
    console.log(response);
}

let toExport = {logIn};
export default toExport;