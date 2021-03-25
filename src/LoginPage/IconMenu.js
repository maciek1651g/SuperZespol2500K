import styles from './loginStyle.module.css';

const IconMenu = (props) => {

    const closeAndOpenDialogBoxs = () => {
        if(props.tabDialogBox)
        {
            for(let i=0;i<props.tabDialogBox.length;i++)
            {
                props.tabDialogBox[i](false);
            }
        }

        if(props.open)
        {
            props.open(!props.isOpen);
        }
    }

    const onChange = () => {
       
    }

    let input = null;
    if(typeof(props.isChecked)!=="undefined")
    {
        if(props.isChecked)
        {
            input = <input type="radio" name={props.name} onChange={onChange} defaultChecked/>
        }
        else
        {
            input = <input type="radio" name={props.name} onChange={onChange}/>
        }
        
    }
    else if(typeof(props.isOpen)!=="undefined")
    {
        input = <input type="radio" name={props.name} onChange={onChange} checked={props.isOpen}/>
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