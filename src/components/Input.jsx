import React, { Component } from 'react';


class Input extends Component {
    render(){
        const {placeholder, type, name, onChange, className} = this.props;
    return (<input  placeholder={placeholder} type={type} name={name} onChange={onChange} className={className}></input>);
}}

export default Input;