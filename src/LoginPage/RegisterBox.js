import styles from "./loginStyle.module.css";
import React from "react";
import InputField from "./InputField";
import ClientApi from "../clientAPI/ClientAPI";
import $ from "../MainPage/getElement";


const RegisterBox = (props) => {



    const clickedRegisterButton = (event) => {
        event.preventDefault();
        let username = $("nick").value;
        let email = $("email").value;
        let password1 = $("password1").value;
        let password2 = $("password2").value;
        let firsName = $("name").value;
        let LastName = $("surname").value;

        if(username==="" || email==="" || password1==="" || password2==="" || firsName==="" || LastName==="")
        {
            props.setMessage("Wypełnij wszystkie pola rejestracji.");
            return
        }
        if(password1!==password2)
        {
            props.setMessage("Podane hasła różnią się od siebie.");
            return
        }
        props.setLoadingScreen(true);

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
        props.setMessage("Kod błędu: "+errorInfo.errorCode+". "+errorInfo.errorMessage+".");
    }

    const afterRegisterRequest = () => {
        props.setLoadingScreen(false)
    }

    return (
        <div id="rightContent" className={styles.rightContent} >
            <div className={styles.registerForm}>
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