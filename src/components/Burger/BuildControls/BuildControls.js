import React from 'react'
import classes from './BuildControls.module.css'

const buildControls = (props) => {
return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>);
}

export default buildControls;