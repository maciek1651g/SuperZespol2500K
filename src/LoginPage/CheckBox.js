import styles from './loginStyle.module.css';

const CheckBox = (props) => {

    return (
        <label className={styles.checkOptions}>
            <p style={{margin: "0 10px 0 0"}}>{props.text}</p>
            <label className={styles.switch}>
                <input type="checkbox" onChange={props.changeFunction}/>
                <span className={styles.slider}></span>
            </label>
        </label>
    )
}


export default CheckBox;