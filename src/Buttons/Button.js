import React from 'react';
import styles from './Button.module.css'
const button =(props) => {
    let classes=[styles.Button]
        if(props.fillText === "="){
            classes.push(styles.Green)
        }
        
        if(props.fillText === "C"){
            classes.push(styles.Red)
        }
        
        if(props.fillText === "Del"){
            classes.push(styles.Blue)
        }
    return (
        

        <div>
            
            <button className={classes.join(" ")} onClick={props.clicked}>{props.fillText}</button>
        </div>
    )
}

export default button;