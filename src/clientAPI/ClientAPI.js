class ClientAPI
{
    static baseUrl = "http://localhost:3000";
    onErrorFunction = null;

    sendMessage (method, url, jsonData, headers = {})
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), ClientAPI.baseUrl+url, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        let response = null;

        xhr.onreadystatechange = () =>
        {
            if (xhr.readyState === 4)
            {
                if(xhr.status === 200)
                {
                    if(xhr.responseText!=="")
                    {
                        response = xhr.responseText;
                    }
                    else
                    {
                        response = true;
                    }

                }
                else
                {
                    let error = {codeStatus: xhr.status, textStatus: xhr.statusText};
                    this.onError(error)
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

    onError(errorInfo)
    {
        if(this.onErrorFunction!==null)
        {
            this.onErrorFunction(errorInfo);
        }
    }

    dataToJson(data)
    {
        try{
            return JSON.stringify(data);
        } catch {
            console.error("Error conversion data to JSON")
        }
    }

    jsonToData(jsonData)
    {
        try{
            return JSON.parse(jsonData);
        } catch {
            console.error("Error conversion JSON to data")
        }
    }

    logIn (login, password)
    {
        let data = {email: login, password: password};
        data = this.dataToJson(data);
        let response = this.sendMessage("POST", "/Users/login", data);
        response = this.jsonToData(response);
        return response;
    }

    register(username, email, password, firstName, lastName, role)
    {
        let data = {role: role, username: username, email: email, password: password, firstName: firstName, lastName: lastName};
        data = this.dataToJson(data);
        let response = this.sendMessage("POST", "/Users/register", data);
        response = this.jsonToData(response);
        return response;
    }
}


export default ClientAPI;