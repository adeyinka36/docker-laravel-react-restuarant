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

 library.add(faBars, faBars)

import Header from "./Header";
import Home from "../views/Home";
import Menu from "../views/Menu";

function Main() {

    let [items, setItems] =  useState([])

    useEffect(()=>{
           axios.get('/api/food').then(res=>{
               console.log(res.data)
               setItems([...res.data])
           })

    },[]);


    return (
        <Router>
            <AppContext.Provider value={{items, setItems}}>
                <Header/>
                <Route  exact path = "/"  component={Home}/>
                <Route  exact path = "/menu"  component={Menu}/>
                <Footer/>
            </AppContext.Provider>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
