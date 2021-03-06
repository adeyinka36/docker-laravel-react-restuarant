import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const media = {
    desktop : `@media (min-width:1000px)`
}

const  Con =  styled.div`
min-width: 100%;
font-size: 2rem;
display: flex;
height: 10vh;
background-color: white;
color: #8A2BE2;
justify-content: space-between;
padding-left: .5rem;
padding-right: .5rem;
align-items: center;
position: sticky;
top: 0;
z-index: 100;
.logo{
 font-family: 'Rampart One', cursive;
}
ul{
    transition: .5s;
    position: fixed;
    top: -100%;
    background-color: white;
    list-style-type: none;
    width: 100vw;
    color: #8A2BE2;
    padding: 0;
    margin: 0;
    left: 0;
    font-family: 'Rampart One', cursive;
    .cancel-con{
        justify-content: flex-end;
        ${media.desktop} {
            display: none;
        }
    }
    .cancel{
        justify-content: flex-end;
        font-size: 3rem;
        color: blue;
        margin-right: .5rem;
        transition: .4s;
        &:hover{
            color: red;
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
        color: #8A2BE2;
        background-color: white;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 95%;
        ${media.desktop} {
            background-color: white;
            color: #8A2BE2;
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
            <span className="logo"><Link to={'/'}>DELICIOUS</Link></span>
            <ul id="menu">
                <li className="cancel-con"><span  className="cancel" onClick={dropDown}>x</span></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
            </ul>
            <FontAwesomeIcon onClick={dropDown} icon={['fa', 'bars']} className="icon"/>
        </Con>
    )
}

export default Header;
