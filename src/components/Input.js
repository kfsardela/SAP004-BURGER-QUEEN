import React, { Component } from 'react';


class Input extends Component {
    render(){
        const {placeholder, type, onChange} = this.props;
    return (<input className="input-login" placeholder={placeholder} type={type} onChange={onChange}></input>);
}}

export default Input;