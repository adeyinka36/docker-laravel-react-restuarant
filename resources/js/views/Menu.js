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
        justify-content: space-around;
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
    let [bought, setBought] = useState([])
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

    const add =  (item = null) =>{
        setBought([...bought,item])
    }

    const remove = (item = null) =>{
        let remaining = bought.filter(i=>i.id !== item.id);
        setBought([...remaining]);
    }

    let total = bought.length? bought.map(item=>item.price).reduce((curr,acc)=>acc+curr).toFixed(2): 0;
    return(
        <Con show={true}>
            <FormContext.Provider value={{form, setForm}}>
                { data.items.map(item=>
                    <Food opa = {opacity} changeOpacity={changeOpacity} changeViewing={changeViewing} viewing={viewing} add={add} remove={remove} item={item} key={item.id}/>)
                }

                {form >=1?<Form bought={bought} total={total}/> :null}
                {bought.length?<span className="checkout" onClick={startForm}><span>{bought.length}{bought.length>1?'Items':'Item'}</span>CHECKOUT<span>Total: £{total}</span></span>:null}
            </FormContext.Provider>
        </Con>
    )
}

export default Menu;
