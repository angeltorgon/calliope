import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Profile from "./views/Profile";
import PoemForm from "./components/PoemForm";

import PrivateRoute from "./components/helpers/PrivateRoute";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <PrivateRoute path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/poem-form" component={PoemForm} />
                </Switch>
            </div>
        );
    }
}

export default App;
