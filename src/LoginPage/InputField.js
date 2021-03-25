import styles from './loginStyle.module.css';
import React from "react";

const InputField = ({type="text", text, icoSVG, eyeIco, noEyeIco}) => {
    const [showEyeState, setShowEyeState] = React.useState(true);
    const [showPassword, setShowPassword] = React.useState(type);
    let isPassword = false;
    if(type==="password" && eyeIco && noEyeIco)
    {
        isPassword = true;
    }
    const changeIco = () => {
        setShowEyeState(!showEyeState);
        if(showPassword==="password")
        {
            setShowPassword("text")
        }
        else
        {
            setShowPassword("password")
        } 
    }

    return (
        <div className={styles.loginBox}>
            <input type={showPassword} className={styles.loginInput} required/>
            <span className={styles.placeHolder}>{text}</span>
            {icoSVG}
            {isPassword ? <span onClick={changeIco}>{isPassword ? (showEyeState ? eyeIco : noEyeIco) : null}</span> : null}
        </div>
    )
}

export default InputField;