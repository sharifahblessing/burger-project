import React, { Component } from 'react'
import Wrap from '../../hoc/Wrap'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.75,
    meat: 2.25,

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
        },
        totalPrice: 4,
        purchasable:false
    }
    

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ 
            totalPrice: newPrice, 
            ingredients: updatedIngredients })
        this.updatePurchaseState();
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0 ){
            return ;
        }
        // const disabledInfo = {
        //     ...this.state.ingredients
        // };
        // for(let key in disabledInfo) {
        //     disabledInfo[key] = disabledInfo[key] <= 0;
        // }

        const updateCount = oldCount - 1;
        const updatedIngredients ={
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({
            totalPrice:newPrice ,
             ingredients: updatedIngredients
        }) 
        this.updatePurchaseState();
    }

    
    updatePurchaseState() {
        const ingredients = {
            ...this.state.ingredients
        }
        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    render() {
        return (
            <Wrap>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    // disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Wrap>
        );
    }
}

export default BurgerBuilder;
