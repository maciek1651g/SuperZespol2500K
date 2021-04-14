import styles from './loginStyle.module.css';
import InputField from './InputField.js';
import {useHistory} from "react-router-dom";
import ClientApi from '../clientAPI/ClientAPI.js';
import React from "react";
import Svg from "./Svg";
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


    const loginUserIco = <Svg class={styles.loginIcon}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></Svg>
    const loginPasswordIco = <Svg class={styles.loginIcon}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></Svg>
    const eyeIco = <Svg class={styles.eyeIcon}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></Svg>
    const notEyeIco = <Svg class={styles.eyeIcon}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></Svg>


    return (
        <div id="rightContent" className={styles.rightContent}>
            <p className={styles.rightHello}>Witaj w <span style={{color: "#43D7E2"}}>Lorem</span>!</p>
            <p className={styles.rightInfo}>Zaloguj się do konta lub dowiedz się jak działa aplikacja klikając na grupę testową w menu bocznym.</p>
            <div className={styles.loginPanel}>
                <form onSubmit={clickedLoginButton}>
                    <InputField id="login" type="text" text="E-mail" icoSVG={loginUserIco}/>
                    <InputField id="password" type="password" text="Hasło" icoSVG={loginPasswordIco} eyeIco={eyeIco} noEyeIco={notEyeIco}/>
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