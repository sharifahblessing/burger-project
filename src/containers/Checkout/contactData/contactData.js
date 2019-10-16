import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import axios  from '../../../axios-orders'
import Spinner from '../../../components/UI/spinner/spinner'
import Input  from '../../../components/UI/Input/Input'

import classes from './contactData.module.css'

class ContactData  extends Component  {
    state = {
        orderForm: {
            name: 'Maria Campbell',
            street: 'Test Street 1',
            zipCode: '56225',
            country: 'USA',
            email: 'test@test.com',
            deliveryMethod: 'fastest'
        },
        loading: false
    }
    orderHandler =(event)=>{
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Maria Campbell',
                address: {
                    street: 'Test Street 1',
                    zipCode: '56225',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'

        }
        
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
        console.log(this.props.ingredients)
    }
    render () {
        let form = (
            <form>
                <Input  inputtype="input" name="name" placeholder="Your Name"/>
                <Input  inputtype="input" name="email" placeholder="Your Email"/>
                <Input  inputtype="input" name="street" placeholder="Your Street Address"/>
                <Input  inputtype="input" name="postal" placeholder="Your Postal Code"/>
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Contact Data</h4>
               {form}
            </div>
        )
    }
}


export default ContactData;