import React, { Component } from 'react';
import firebaseFunctions from "../firebase";

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
       return (<button onClick={signOut}>sair</button>)
  
    
}
}

export default Logout;

