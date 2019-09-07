import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'meat', type: 'meat' },
    { label: 'cheese', type: 'cheese' }

]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (<BuildControl key={ctrl.label} label={ctrl.type} />
            ))}
        </div>);
}

export default buildControls;