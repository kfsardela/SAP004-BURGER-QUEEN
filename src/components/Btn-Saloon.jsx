import React, { Component } from 'react';
import Saloon from '../pages/saloon';


class BtnSaloon extends Component {
    render() {
        const {text, onClick, className} = this.props;
        return (
            <button onClick={onClick} className={className}> {text}</button>
        );
    }
}

export default BtnSaloon;