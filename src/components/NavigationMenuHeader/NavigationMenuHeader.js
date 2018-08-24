import React from 'react';

import style from './navigationMenuHeader.css';

class NavigationMenuHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="rcr-navigation-menu__header">
               <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default NavigationMenuHeader;