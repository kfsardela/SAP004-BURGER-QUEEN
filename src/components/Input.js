import React, { Component } from 'react';


class Input extends Component {
    render(){
        const {placeholder, type} = this.props;
    return (<input className="input-login" placeholder={placeholder} type={type}></input>);
}}

export default Input;