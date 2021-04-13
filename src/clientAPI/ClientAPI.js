class ClientAPI
{
    static baseUrl = "http://localhost:3000";
    onErrorFunction = null;
    onSuccessFunction = null;

    sendMessage (method, url, jsonData, headers = {})
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), ClientAPI.baseUrl+url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        let response = null;

        xhr.onreadystatechange = () =>
        {
            if (xhr.readyState === 4)
            {
                if(parseInt(xhr.status/100) === 2)
                {
                    if(xhr.status===200)
                    {
                        response = xhr.responseText;
                        response = this.jsonToData(response);
                    }
                    else if(xhr.status===201)
                    {
                        response = true;
                    }
                    this.onSuccess(response);
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
    }

    onSuccess(response)
    {
        if(this.onSuccessFunction!==null)
        {
            this.onSuccessFunction(response)
        }
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
        this.sendMessage("POST", "/Users/login", data);
    }

    register(username, email, password, firstName, lastName, role=0)
    {
        let data = {role: role, username: username, email: email, password: password, firstName: firstName, lastName: lastName};
        data = this.dataToJson(data);
        this.sendMessage("POST", "/Users/register", data);
    }
}


export default ClientAPI;