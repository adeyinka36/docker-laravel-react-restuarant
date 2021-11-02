import Food from '../components/Food';
import Desserts from "../components/Dessersts";
import style from "styled-components";
import {useState} from "react";

const Con = style.div`
    display: flex;
    flex-wrap: wrap;
`
const Menu = ()=>{
    let [opacity, setOpacity] = useState(1);
    let [viewing, setViewing] = useState(0);

    const changeViewing = val =>{
        console.log(val)
        setViewing(val)
    }
    const  changeOpacity = (val)=>{
        console.log(val)
        setOpacity(val);
    }
    return(
        <Con>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Desserts/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
            <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing}/>
        </Con>
    )
}

export default Menu;
