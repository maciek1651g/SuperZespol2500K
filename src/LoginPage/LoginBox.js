import styles from './loginStyle.module.css';
import InputField from './InputField.js';
import {useHistory} from "react-router-dom";
import ClientApi from '../clientAPI/ClientAPI.js';
import React from "react";
import Icons from "./../img/iconsSVG.js";
import $ from "../MainPage/getElement";

const LoginBox = () => {
    const history = useHistory();
    const nameCookie = "Lorem_value";

    /*const getCookie = (cname) => {
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
    }*/

    const clickedLoginButton = (event) => {
        event.preventDefault();
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
            document.cookie = nameCookie+"="+response["value"]+"; expires="+(new Date(response["expires"]));
            history.push("/");
        }
    }

    const loginError = (errorInfo) => {
        //Czynności wykonywane po błędzie logowania
        console.log(errorInfo)
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