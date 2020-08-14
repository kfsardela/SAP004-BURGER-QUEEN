import React, { Component } from 'react';
import logo from '../images/logo2.png';
import Logout from './Logout';

class Header extends Component {
    render() {
        return (
            <header className="headerSaloon">
        <div className="headerLogo">
        </div>
        <h1 ><img alt= "title9" src= {logo} className="logoSaloon"></img></h1>
        <div className="headerLogo">
            <Logout></Logout> 
        </div>  
        </header>
        );
    }
}

export default Header;