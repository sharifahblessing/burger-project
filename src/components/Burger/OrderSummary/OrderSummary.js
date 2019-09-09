import React from 'react';
import Wrap from '../../../hoc/Wrap'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return <li><span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
        });
        
    return (
        <Wrap>
            <h3>Your order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Wrap>
    )
}

export default orderSummary;