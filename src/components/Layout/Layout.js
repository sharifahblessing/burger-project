import React from 'react';

import Wrap from '../../hoc/Wrap';
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from './Layout.module.css'


const layout = (props)=> (
    <Wrap>
   <Toolbar/>
   <main className={classes.Content}>
       {props.children}
   </main>
    </Wrap>
   
)

export default layout;