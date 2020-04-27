import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './ToolBar.module.css';

const toolBar = () =>(
    <header className={classes.ToolBar}>
        <nav>
            <NavigationItems />
        </nav>

    </header>
);

export default toolBar;