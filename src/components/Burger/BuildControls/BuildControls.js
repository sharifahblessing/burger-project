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
            <p>Current Price: <strong>{props.price}</strong></p>
            {controls.map(ctrl => (<BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                // disabled={props.disabled[ctrl.type]}
            />
            ))}

<button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>

        </div>);
}

export default buildControls;