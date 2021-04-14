import styles from './loginStyle.module.css';

const IconMenu = (props) => {

    const closeAndOpenDialogBoxs = () => {
        if(props.setOpenDialogBox)
        {
            if(typeof (props.actualIdDialogBox)!=="undefined")
            {
                if(props.actualIdDialogBox===props.idMyDialogBox)
                {
                    props.setOpenDialogBox(0);
                }
                else
                {
                    props.setOpenDialogBox(props.idMyDialogBox);
                }
            }
            else
            {
                props.setOpenDialogBox(0);
            }
        }
        if(props.setOptionMenu)
        {
            props.setOptionMenu(props.optionMenu);
        }
    }

    const onChange = (event) => {

    }

    let input = null;
    if(typeof(props.actualOptionMenu)!=="undefined")
    {
        input = <input type="radio" name={props.name} onChange={onChange} checked={props.actualOptionMenu===props.optionMenu?true:false}/>
    }
    else if(typeof(props.actualIdDialogBox)!=="undefined")
    {
        input = <input type="radio" name={props.name} onChange={onChange} checked={props.actualIdDialogBox===props.idMyDialogBox?true:false}/>
    }

    return (
        <label className={styles.buttonMenu}>
            {input}
            <span className={styles.icon} onClick={closeAndOpenDialogBoxs}>
                {props.icoSVG}
            </span>
        </label>
    )
}

export default IconMenu;