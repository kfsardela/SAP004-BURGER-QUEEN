import React, { Component } from 'react';
import firebaseFunctions from "../firebase";
import 'font-awesome/css/font-awesome.min.css'

const signOut = () => {
   return firebaseFunctions.auth.signOut().then(function() {
        console.log('saiu')
            })
        .catch(function(error) {
        window.logErrors("Ocorreu um erro, tente novamente")
            });
        
        
}   
class Logout extends Component {
    render(){
       return (<i className="fa fa-sign-out" onClick={signOut}></i>)
  
    
}
}

export default Logout;

