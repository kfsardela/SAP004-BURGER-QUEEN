import React from 'react';
import './App.css';
import firebaseInit from './firebase'
import Login from './pages/login'
import Kitchen from './pages/kitchen'
import Register from './pages/register'
import Saloon from './pages/saloon'
import Orders from './pages/orders'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/kitchen">Cozinha</Link>
            </li>
            <li>
              <Link to="/register">Registro</Link>
            </li>
            <li>
              <Link to="/saloon">Salão</Link>
            </li>
            <li>
              <Link to="/orders">Pedidos prontos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/saloon">
            <Saloon/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


        
   


