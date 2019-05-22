import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './views/layout/nav/Nav';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/home/Home';
import Dashboard from './views/feed/Feed';
import Profile from './views/profile/Profile';


class App extends Component {

  render() {
    return (
          <div className="app-container">
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
          </div>
    );
  }
}

export default App;
