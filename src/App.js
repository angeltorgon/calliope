import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/home/Home';
import Dashboard from './views/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>
        <Route exact path="/" render={Home}/>
        <Route path="/dashboard" render={Dashboard}/>
        <Route path="/login" render={Login}/>
        <Route path="/signup" render={Signup}/>
      </div>
    );
  }
}

export default App;
