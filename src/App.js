
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Firebase from "./firebase";
import { loggedIn, loggedOut } from './store/actions';
import "./App.scss";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Profile from "./views/Profile";
import PoemForm from "./components/PoemForm";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

class App extends Component {

    authListener = () => {
        Firebase.firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                console.log("auth listener")
                this.props.loggedIn()
            } else {
                console.log("auth listener else")
                this.props.loggedOut()
            }
        });
    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            <div className="app-container">
                <Navbar />
                <Switch>
                    <PublicRoute path="/login" component={Login} />
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/profile/:id" component={Profile} />
                    <PrivateRoute path="/poem-form" component={PoemForm} />
                    <PublicRoute exact path="/" component={Signup} />
                </Switch>
            </div>
        );
    }
}



export default connect(null, { loggedIn, loggedOut })(App);
