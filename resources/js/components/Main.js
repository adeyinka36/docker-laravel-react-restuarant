import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from "./footer";

 library.add(faBars, faBars)

import Header from "./Header";
import Home from "../views/Home";
import Menu from "../views/Menu";

function Main() {
    return (
        <Router>
            <Header/>
            <Route  exact path = "/"  component={Home}/>
            <Route  exact path = "/menu"  component={Menu}/>
            <Footer/>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
