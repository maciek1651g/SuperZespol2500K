import styles from "./loginStyle.module.css";
import React from "react";
import InputField from "./InputField";
import ClientApi from "../clientAPI/ClientAPI";
import $ from "../MainPage/getElement";
import ErrorClass from "../clientAPI/ErrorClass";


const RegisterBox = (props) => {



    const clickedRegisterButton = (event) => {
        event.preventDefault();
        props.setLoadingScreen(true);
        let username = $("nick").value;
        let email = $("email").value;
        let password1 = $("password1").value;
        let password2 = $("password2").value;
        let firsName = $("name").value;
        let LastName = $("surname").value;

        if(password1!==password2)
        {
            registerError(new ErrorClass(418, "Hasła nie zgadzają się ze sobą!"));
            afterRegisterRequest();
            return
        }

        const api = new ClientApi();
        api.onSuccessFunction = registerSuccess;
        api.onErrorFunction = registerError;
        api.afterRequest = afterRegisterRequest;
        api.register(username, email, password1, firsName, LastName);
    }

    const registerSuccess = (response) => {
        if(response)
        {
            props.setOptionMenu(1);
        }
    }

    const registerError = (errorInfo) => {
    }

    const afterRegisterRequest=()=> {
        props.setLoadingScreen(false)
    }

    return (
        <div id="rightContent" className={styles.rightContent} >
            <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                <p style={{fontSize:"30px", fontWeight: "bold", color: "#444444", textAlign: "center", margin: "20px 0 0 0"}}>Zarejestruj się</p>
                <form>
                    <InputField id="name" type="text" text="Imie"/>
                    <InputField id="surname" type="text" text="Nazwisko"/>
                    <InputField id="nick" type="text" text="Nazwa użytkowanika"/>
                    <InputField id="email" type="text" text="E-mail"/>
                    <InputField id="password1" type="password" text="Hasło"/>
                    <InputField id="password2" type="password" text="Potwierdź hasło"/>
                    <button id="loginButton" className={styles.loginButton + ' ' + styles.buttonStyle} onClick={clickedRegisterButton}>ZAREJESTRUJ</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterBox