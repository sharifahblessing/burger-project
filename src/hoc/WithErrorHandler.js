import React, { Component } from 'react';

import Modal from '../components/UI/Modal/Modal'
import Wrap from './Wrap'


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.response.use(null, error => {
                this.setState({
                    error: error
                });
            });
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }
        render() {
            return (
                <Wrap>
                    <Modal 
                    show={this.state.error}
                    clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Wrap>

            )
        }
    }

}

export default withErrorHandler;