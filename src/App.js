import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className='main'>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/users' component={Users} />
                            <Route path='/users/:id(\d+)' component={Profile} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
