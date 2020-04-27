import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import ToolBar from '../../components/ToolBar/ToolBar';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <ToolBar />
                <div>{this.props.children}</div>
            </Auxiliary>
        );
    }

}

export default Layout;