import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './NavigationItems.module.css';

class NavigationItems extends Component {
    render(){
        let persCSS = null;
        this.props.profNext? persCSS= classes.disabledLink : persCSS = classes.enabledLink;
        let reviewCSS = null;
        this.props.persNext? reviewCSS = classes.disabledLink : reviewCSS = classes.enabledLink;
        return(
            <li className={classes.NavigationItems}>
                <NavLink to="/" >Professional Details</NavLink>
                <NavLink to="/pers" 
                    exact
                    className={persCSS}>Personal Details</NavLink>
                <NavLink to="/review" 
                    exact
                    className={reviewCSS}>Review Details</NavLink>
            </li>
        );
    }
}

const mapStateToProps = state =>{
    return{
        profNext: state.prof.nextDisabled,
        persNext: state.pers.nextDisabled
    }
}

export default connect(mapStateToProps) (NavigationItems);