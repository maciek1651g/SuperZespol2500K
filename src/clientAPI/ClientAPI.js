import ErrorClass from "./ErrorClass";

class ClientAPI
{
    static baseUrl = "http://localhost:3000";
    static nameCookie = "Lorem_value";
    static bearer = null;
    onErrorFunction = null;
    onSuccessFunction = null;
    functionAfterRequest = null;
    backgroundFunctionHandler = null;

    sendMessage (method, url, jsonData, headers = {})
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), ClientAPI.baseUrl+url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000;

        if(ClientAPI.bearer!==null)
        {
            xhr.setRequestHeader("Authorization", "Bearer "+ClientAPI.bearer);
        }

        let response = null;

        xhr.onreadystatechange = () => {
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
                    if(xhr.status!==0)
                    {
                        let error = new ErrorClass(xhr.status, xhr.statusText);
                        this.onError(error)
                    }
                    response = null;
                }
            }
        }
        xhr.ontimeout = (e) => {
            this.onError(new ErrorClass(404, "Zbyt długi czas oczekiwania na odpoweidź"))
        }
        xhr.onabort = (e) => {
            this.onError(new ErrorClass(404, "Zatrzymano zapytanie z nieznanych przyczyn"))
        }
        xhr.onerror = (e) => {
            console.log(e);
        }

        let headersKeys = Object.keys(headers);
        for(let i=0;i<headersKeys.length;i++)
        {
            let key = headersKeys[i];
            xhr.setRequestHeader(key+"",headers[key]+"");
        }

        xhr.send(jsonData);
    }

    checkIfLoggedIn()
    {
        ClientAPI.bearer = this.getCookie(ClientAPI.nameCookie);
        if(ClientAPI.bearer===null)
        {
            return false;
        }

        return true;
    }

    logout()
    {
        document.cookie = ClientAPI.nameCookie+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        ClientAPI.bearer = null;
    }

    getCookie(cname)
    {
       let name = cname + "=";
       let decodedCookie = decodeURIComponent(document.cookie);
       let ca = decodedCookie.split(';');
       for(let i = 0; i <ca.length; i++) {
           let c = ca[i];
           while (c.charAt(0) === ' ') {
               c = c.substring(1);
           }
           if (c.indexOf(name) === 0) {
               return c.substring(name.length, c.length);
           }
       }
       return null;
   }

    onSuccess(response)
    {
        if(this.onSuccessFunction!==null)
        {
            this.onSuccessFunction(response)
        }
        if(this.backgroundFunctionHandler!==null)
        {
            this.backgroundFunctionHandler(response);
        }
        this.afterRequest();
    }

    onError(errorInfo)
    {
        console.log(errorInfo)
        if(this.onErrorFunction!==null)
        {
            this.onErrorFunction(errorInfo);
        }
        if(this.backgroundFunctionHandler!==null)
        {
            this.backgroundFunctionHandler(errorInfo);
        }
        this.afterRequest();
    }

    afterRequest()
    {
        if(this.functionAfterRequest!==null)
        {
            this.functionAfterRequest();
        }
    }

    dataToJson(data)
    {
        try{
            return JSON.stringify(data);
        } catch(error) {
            this.onError(new ErrorClass(404, "Błąd konwersji danych do typu JSON"));
        }
    }

    jsonToData(jsonData)
    {
        try{
            return JSON.parse(jsonData);
        } catch(error) {
            this.onError(new ErrorClass(404, "Błąd konwersji typu JSON na dane"));
        }
    }

    logIn (login, password)
    {
        let data = {email: login, password: password};
        data = this.dataToJson(data);

        this.backgroundFunctionHandler = (response) => {
            if(response!==null && typeof(response["value"])!==undefined)
            {
                ClientAPI.bearer = response["value"];
                document.cookie = ClientAPI.nameCookie+"="+response["value"]+"; expires="+(new Date(response["expires"]));
            }
        }

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