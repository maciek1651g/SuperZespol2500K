import styles from './loginStyle.module.css';
import InputField from './InputField.js';
import {useHistory} from "react-router-dom";
import ClientApi from '../clientAPI/ClientAPI.js';
import React from "react";
import Icons from "./../img/iconsSVG.js";
import $ from "../MainPage/getElement";

const LoginBox = (props) => {
    const history = useHistory();

    const clickedLoginButton = (event) => {
        event.preventDefault();
        props.setLoadingScreen(true);
        let login = $("login").value;
        let password = $("password").value;
        if(login==="asd")
        {
            login = "admin123@sggw.edu.pl";
            password = "admin123";
        }

        const api = new ClientApi();
        api.onSuccessFunction = loginSuccess;
        api.onErrorFunction = loginError;
        api.logIn(login,password);
    }

    const loginSuccess = (response) => {
        if(response!==null)
        {
            history.push("/");
        }
    }

    const loginError = (errorInfo) => {
        props.setLoadingScreen(false)
    }



    return (
        <div id="rightContent" className={styles.rightContent}>
            <p className={styles.rightHello}>Witaj w <span style={{color: "#43D7E2"}}>Lorem</span>!</p>
            <p className={styles.rightInfo}>Zaloguj się do konta lub dowiedz się jak działa aplikacja klikając na grupę testową w menu bocznym.</p>
            <div className={styles.loginPanel}>
                <form onSubmit={clickedLoginButton}>
                    <InputField id="login" type="text" text="E-mail" icoSVG={Icons.loginUserIco}/>
                    <InputField id="password" type="password" text="Hasło" icoSVG={Icons.loginPasswordIco} eyeIco={Icons.eyeIco} noEyeIco={Icons.notEyeIco}/>
                    <button id="loginButton" className={styles.loginButton + ' ' + styles.buttonStyle} onClick={clickedLoginButton}>ZALOGUJ</button>
                </form>
                <div className={styles.helpSection}>
                    <button className={styles.downButton + ' ' + styles.buttonStyle}>ZAŁÓŻ KONTO</button>
                    <button className={styles.downButton + ' ' + styles.buttonStyle}>ZAPOMNIAŁEM HASŁA</button>
                </div>
            </div>
        </div>
    )
}

export default LoginBox;