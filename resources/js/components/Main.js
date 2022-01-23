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
import NotFound from "../views/404";

 library.add(faBars, faBars)

import Header from "./Header";
import Home from "../views/Home";
import Menu from "../views/Menu";

const foods = [
    {
        'name': 'Tropical Delight',
        'price': 19.99,
        'image': 17,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 1
    },
    {
        'name': 'Tropical Delight',
        'price': 12.99,
        'image': 1,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 2

    },
    {
        'name': 'Tropical Delight',
        'price': 12.99,
        'image': 10,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 3
    },
    {
        'name': 'Tropical Delight',
        'price': 14.99,
        'image': 9,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 4
    },
    {
        'name': 'Tropical Delight',
        'price': 15.99,
        'image': 8,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 5
    },
    {
        'name': 'Tropical Delight',
        'price': 10.99,
        'image': 7,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 6
    },
    {
        'name': 'Tropical Delight',
        'price': 11.99,
        'image': 6,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 7
    },
    {
        'name': 'Tropical Delight',
        'price': 15.99,
        'image': 5,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 8
    },
    {
        'name': 'Tropical Delight',
        'price': 12.99,
        'image': 4,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 12
    },
    {
        'name': 'Tropical Delight',
        'price': 11.99,
        'image': 3,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 9
    },
    {
        'name': 'Tropical Delight',
        'price': 10.99,
        'image': 2,
        'description': 'Low calorie snack made with cheese, bread and fresh meat',
        'id': 10
    }
];


function Main() {

    let [items, setItems] =  useState([])

    useEffect(()=>{
               setItems([...foods])
    },[]);


    return (
        <Router>
            <AppContext.Provider value={{items, setItems}}>
                <ScrollToTop>
                <Header/>
                <Switch>
                    <Route  exact path = "/"  component={Home}/>
                    <Route  path = "/menu"  component={Menu}/>
                    <Route  component={NotFound}/>
                </Switch>
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
