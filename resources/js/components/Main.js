import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from "./footer";
import AppContext from "../AppContext";
import {useState, useEffect} from 'react';
import axios from 'axios';
import ScrollToTop from "./Scroll";

 library.add(faBars, faBars)

import Header from "./Header";
import Home from "../views/Home";
import Menu from "../views/Menu";

function Main() {

    let [items, setItems] =  useState([])

    useEffect(()=>{
           axios.get('/api/food').then(res=>{
               setItems([...res.data])
           })

    },[]);


    return (
        <Router>
            <AppContext.Provider value={{items, setItems}}>
                <ScrollToTop>
                <Header/>
                <Route  exact path = "/"  component={Home}/>
                <Route  exact path = "/menu"  component={Menu}/>
                <Footer/>
                </ScrollToTop>
            </AppContext.Provider>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
