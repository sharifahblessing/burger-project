import React from "react";
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props} />
            break;
        case ('textArea'):
            inputElement = <textarea className={classes.InputElement} {...props} />
            break;
        case ('select'):
            inputElement = <select
                className={classes.InputElement}
                value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input {...props} />

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>


    );
}
export default Input;