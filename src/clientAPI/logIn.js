class clientAPI
{
    static #baseUrl = "http://localhost:3000";

    onErrorFunction = null;

    #sendMessage (method, url, jsonData, headers = {})
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), clientAPI.#baseUrl+url, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        let response = null;

        xhr.onreadystatechange = () =>
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
                    this.#onError(error)
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

    #onError(errorInfo)
    {
        if(this.onErrorFunction!==null)
        {
            this.onErrorFunction(errorInfo);
        }
    }

    #dataToJson(data)
    {
        try{
            return JSON.stringify(data);
        } catch {
            console.error("Error conversion data to JSON")
        }
    }

    #jsonToData(jsonData)
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
        data = this.#dataToJson(data);
        let response = this.#sendMessage("POST", "/Users/login", data);
        response = this.#jsonToData(response);
        if(response!==null)
        {
            document.cookie = "value="+response["value"]+"; expires="+(new Date(response["expires"]));
            window.location.href = "http://localhost:3000";
        }
        console.log(response);
    }
}


export default clientAPI;