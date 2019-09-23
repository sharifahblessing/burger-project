import React, { Component } from 'react';

import Wrap from '../../hoc/Wrap';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/sideDrawer/sideDrawer';

import classes from './Layout.module.css'


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler =()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return (
            <Wrap>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.showSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        )
    }

}

export default Layout;