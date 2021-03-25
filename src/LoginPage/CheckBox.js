import styles from './loginStyle.module.css';

const CheckBox = (props) => {

    return (
        <label className={styles.checkOptions}>
            <p>{props.text}</p>
            <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
            </label>
        </label>
    )
}


export default CheckBox;