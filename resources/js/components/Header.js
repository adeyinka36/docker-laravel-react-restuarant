import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';

const media = {
    desktop : `@media (min-width:1000px)`
}

const  Con =  style.div`
min-width: 100%;
font-size: 2rem;
display: flex;
height: 10vh;
background-color: #8A2BE2;
color: white;
justify-content: space-between;
padding-left: .5rem;
padding-right: .5rem;
align-items: center;
position: sticky;
.logo{
 font-family: 'Rampart One', cursive;
}
ul{
    transition: .5s;
    position: fixed;
    top: -100%;
    background-color: #8A2BE2;
    list-style-type: none;
    width: 100vw;
    padding: 0;
    margin: 0;
    left: 0;
    .cancel{
        justify-content: flex-end;
        font-size: 3rem;
        color: white;
        margin-right: .5rem;
        transition: .4s;
        &:hover{
            color: blue;
            cursor: pointer;
        }
    }
    ${media.desktop} {
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
    }
    li{
        margin: 0;
        font-size: 1.5rem;
        text-align: center;
        color: #fff;
        background-color: #8A2BE2;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        ${media.desktop} {
            background-color: #8A2BE2;
            color: white;
            border: none;
            height: auto;
        }
    }
}
.icon{
    transition: .4s;
    font-size: 4rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    ${media.desktop} {
        display: none;
    }
}

`

const Header = ()=>{
    let [drop, toggleDrop] = useState(false)
const dropDown = ()=>{
    let menu = document.getElementById('menu');
    let burger = document.getElementsByClassName('icon')[0];
    if(!drop) {
        menu.style.top = '0';
        burger.style.visibility = "hidden";
        toggleDrop(true);

    } else {
        menu.style.top = '-100%';
        burger.style.visibility = "visible";
        toggleDrop(false);
    }
}
    return (
        <Con>
            <span className="logo">DELICIOUS</span>
            <ul id="menu">
                <li className="cancel" onClick={dropDown}>x</li>
                <li>Home</li>
                <li>Menu</li>
            </ul>
            <FontAwesomeIcon onClick={dropDown} icon={['fa', 'bars']} className="icon"/>
        </Con>
    )
}

export default Header;
