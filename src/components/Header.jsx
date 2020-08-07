import React, { Component } from 'react';
import logo from '../images/logo2.png';
import Logout from './Logout';

class Header extends Component {
    render() {
        const {isHome} = this.props;
        return (
            <header className="headerSaloon">
        <div className="headerLogo">
            {/* {isHome ? <i className="fa fa-home" aria-hidden="true"></i> : <i></i>} */}
        </div>
        <h1 ><img  src= {logo} className="logoSaloon"></img></h1>
        <div className="headerLogo">
            <Logout></Logout> 
        </div>  
        </header>
        );
    }
}

export default Header;