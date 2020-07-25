import React, { Component } from 'react';


class Input extends Component {
    render(){
        const {placeholder, type, name, onChange} = this.props;
    return (<input className="input-login" placeholder={placeholder} type={type} name={name} onChange={onChange}></input>);
}}

export default Input;