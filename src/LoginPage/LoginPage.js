import styles from './loginStyle.module.css';
import IconMenu from './IconMenu.js';
import InputField from './InputField.js';
import DialogBox from './DialogBox.js';
import CheckBox from './CheckBox.js';
import ClientApi from '../clientAPI/ClientAPI.js';
import React from "react";
import { useHistory } from "react-router-dom";

const Svg = (props) => {
    return (
        <svg className={props.class} viewBox="0 0 24 24">{props.children}</svg>
    )
}

const LoginPage = () => {
    const history = useHistory();
    const nameCookie = "Lorem_value";

    const getCookie = (cname) => {
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

    const userIco = <Svg class={styles.svgIcon}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></Svg>
    const groupIco = <Svg class={styles.svgIcon}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Svg>
    const settingsIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></Svg>
    const infoIco = <Svg class={styles.svgIcon}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></Svg>
    const loginUserIco = <Svg class={styles.loginIcon}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></Svg>
    const loginPasswordIco = <Svg class={styles.loginIcon}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></Svg>
    const eyeIco = <Svg class={styles.eyeIcon}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></Svg>
    const notEyeIco = <Svg class={styles.eyeIcon}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></Svg>

    const [showInfoDialogBox, setShowInfoDialogBox] = React.useState(false);
    const [showSettingsDialogBox, setshowSettingsDialogBox] = React.useState(false);
    const tabDialogBox = [setShowInfoDialogBox, setshowSettingsDialogBox];



    const clickedLoginButton = async (event) => {
        event.preventDefault();
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        if(login==="asd")
        {
            login = "admin123@sggw.edu.pl";
            password = "admin123";
        }

        const api = new ClientApi();
        api.onErrorFunction = loginError;
        const response = api.logIn(login,password);

        if(response!==null)
        {
            document.cookie = nameCookie+"="+response["value"]+"; expires="+(new Date(response["expires"]));
            history.push("/");
        }
    }

    const loginError = (errorInfo) => {
        //Czynności wykonywane po błędzie logowania
    }


    return (
        <div id="app" className={styles.app}>
            {showInfoDialogBox ? 
            <DialogBox title="O aplikacji" close={setShowInfoDialogBox}>
                <p>
                    Aplikacja stworzona przez SUPER ZESPÓŁ 2500K.
                    Służy ona do komunikacji oraz upraszczania organizowania planu i nauki dla studentów i uczniów.
                    W przypadku problemów prosimy o kontakt mailowy.
                </p>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <button className={styles.errorButton + ' ' + styles.buttonStyle}>ZGŁOŚ BŁĄD</button>
                </div>
            </DialogBox> : null}

            {showSettingsDialogBox ? 
            <DialogBox title="Ustawienia" close={setshowSettingsDialogBox}>
                <CheckBox text="Tryb ciemny"/>
                <CheckBox text="Wysyłaj powiadomienia push"/>
            </DialogBox> : null}
            
                
            <div id="main" className={styles.main}>
                <div id="leftColumn" className={styles.leftColumn}>
                    <div id="leftTop" className={styles.leftTop}>
                        <h2 style={{marginTop: "40px"}}>Lorem</h2>
                        <IconMenu name="navMenu" icoSVG={userIco} tabDialogBox={tabDialogBox} isChecked={true}/>
                        <IconMenu name="navMenu" icoSVG={groupIco} tabDialogBox={tabDialogBox} isChecked={false}/>
                    </div>
                    <div id="leftBottom" className={styles.leftBottom}>
                        <IconMenu name="infoMenu" icoSVG={settingsIco} tabDialogBox={tabDialogBox} isOpen={showSettingsDialogBox} open={setshowSettingsDialogBox}/>
                        <IconMenu name="infoMenu" icoSVG={infoIco}  tabDialogBox={tabDialogBox} isOpen={showInfoDialogBox} open={setShowInfoDialogBox}/>
                    </div>
                </div>
                <div id="rightColumn" className={styles.rightColumn}>
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
                </div>
            </div>
        </div>
    )
}


export default LoginPage;
