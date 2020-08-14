import React, { useState, useEffect } from 'react';
import firebaseFunctions from "./firebase";
import './style/App.css';
import Login from './pages/login'
import Kitchen from './pages/kitchen'
import Register from './pages/register'
import Saloon from './pages/saloon'
import Orders from './pages/orders'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  const [user, setUser] = useState([]);
  const userLogged = () => {
    firebaseFunctions.auth.onAuthStateChanged(user => {
     if (user){
      setUser(user);
     }else{
       setUser()
     }
    }
    )}

  useEffect(() => {
    userLogged();
  }, []);

  return (
    <Router>
              <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
{!user ? <Redirect to="/" />:(
          <>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
          <Route path="/saloon">
            <Saloon/>
          </Route>
          <Route path="/orders">
            <Orders/>
            </Route>          
          </>)}
        </Switch>
    </Router>
  );
}
