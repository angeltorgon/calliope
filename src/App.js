import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Feed from "./views/Feed.js";
import Profile from "./views/Profile";
import PoemForm from "./components/PoemForm";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Feed} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/poem-form" component={PoemForm} />
            </div>
        );
    }
}

export default App;
