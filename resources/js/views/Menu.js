import Food from '../components/Food';
import Desserts from "../components/Dessersts";
import styled from "styled-components";
import {useState} from "react";
import Button from '@material-ui/core/Button';
import Form from '../views/Form';
import FormContext from "../Context";

const Con = styled.div`
    display: flex;
    flex-wrap: wrap;
    .checkout{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 5rem;
        font-family: 'Anton', sans-serif;
        background-color: #8A2BE2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: white;
        &:hover{
            cursor: pointer;
            color: white;
            background-color: blue;
        }
        visibility: ${props=>props.show? 'visible': 'hidden'};
    }
`
const Menu = ()=>{
    let [opacity, setOpacity] = useState(1);
    let [viewing, setViewing] = useState(0);
    let [form, setForm] = useState(0)


    const changeViewing = val =>{
        setViewing(val)
    }
    const  changeOpacity = (val)=>{
        setOpacity(val);
    }

    const startForm = ()=>{
        setForm(1)
    }
    return(
        <Con show={true}>
            <FormContext.Provider value={{form, setForm}}>
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
                {form >=1?<Form/> :null}
                <span className="checkout" onClick={startForm}>CHECKOUT</span>
            </FormContext.Provider>
        </Con>
    )
}

export default Menu;
