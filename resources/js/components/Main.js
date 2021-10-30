import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from "./footer";

 library.add(faBars, faBars)

import Header from "./Header";
import Home from "../views/Home";
import Menu from "../views/Menu";

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <Home/>
            <Menu/>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
