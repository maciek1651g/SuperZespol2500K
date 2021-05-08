class ErrorClass
{
    errorCode = null;
    errorMessageForUser = null;
    errorMessageForDev = null;

    constructor(code, messageForUser, messageForDev="Lack of description of error.") {
        this.errorCode = code;
        this.errorMessageForUser = messageForUser;
        this.errorMessageForDev = messageForDev;
    }
}

export default ErrorClass