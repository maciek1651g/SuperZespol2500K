import styles from "./loginStyle.module.css";
import React from "react";
import InputField from "./InputField";
import ClientApi from "../clientAPI/ClientAPI";


const RegisterBox = (props) => {



    const clickedRegisterButton = async (event) => {
        event.preventDefault();
        let username = "";
        let email = "";
        let password = "";
        let firsName = "";
        let LastName = "";



        const api = new ClientApi();
        api.onSuccessFunction = registerSuccess;
        api.onErrorFunction = registerError;
        api.register(username, email, password, firsName, LastName);
    }

    const registerSuccess = (response) => {
        if(response)
        {
            props.setOptionMenu(1);
        }
    }

    const registerError = (errorInfo) => {

    }

    return (
        <div id="rightContent" className={styles.rightContent} >
            <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                <p style={{fontSize:"30px", fontWeight: "bold", color: "#444444", textAlign: "center", margin: "20px 0 0 0"}}>Zarejestruj się</p>
                <form>
                    <InputField type="text" text="Imie"/>
                    <InputField type="text" text="Nazwisko"/>
                    <InputField type="text" text="Nazwa użytkowanika"/>
                    <InputField type="text" text="E-mail"/>
                    <InputField type="password" text="Hasło"/>
                    <InputField type="password" text="Potwierdź hasło"/>
                    <button id="loginButton" className={styles.loginButton + ' ' + styles.buttonStyle} onClick={clickedRegisterButton}>ZAREJESTRUJ</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterBox