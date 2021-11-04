import Food from '../components/Food';
import Desserts from "../components/Dessersts";
import styled from "styled-components";
import {useState} from "react";
import Button from '@material-ui/core/Button';
import Form from '../views/Form';

const Con = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Menu = ()=>{
    let [opacity, setOpacity] = useState(1);
    let [viewing, setViewing] = useState(0);

    const changeViewing = val =>{
        setViewing(val)
    }
    const  changeOpacity = (val)=>{
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
            <Button>PRESS</Button>
            <Form/>
        </Con>
    )
}

export default Menu;
