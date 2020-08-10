import React, { Component } from 'react';

class BtnSaloon extends Component {
    render() {
        const {text, onClick, className} = this.props;
        return (
            <button onClick={onClick} className={className}> {text}</button>
        );
    }
}

export default BtnSaloon;