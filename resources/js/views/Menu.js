import Food from '../components/Food';
import Desserts from "../components/Dessersts";
import styled from "styled-components";
import {useState , useContext} from "react";
import Form from '../views/Form';
import FormContext from "../Context";
import AppContext from "../AppContext";

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
const Menu =() =>{
    let data = useContext(AppContext);
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

    const add =  (data = null) =>{

    }

    const remove = (data = null) =>{

    }
    return(
        <Con show={true}>
            <FormContext.Provider value={{form, setForm}}>
                { data.items.map(item=>
                    <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing} add={add} remove={remove} item={item}/>)
                }

                {form >=1?<Form/> :null}
                {data.items.length?<span className="checkout" onClick={startForm}>CHECKOUT</span>:null}
            </FormContext.Provider>
        </Con>
    )
}

export default Menu;
