import styled from 'styled-components';
import InitForm from "../components/InitForm";
import PayForm from "../components/PayForm";
import Pay from "../components/Pay";
import {useContext} from 'react';
import FormContext from "../Context";


const Con = styled.div`
    .cancel{
        position: fixed;
        top: 1rem;
        right: 1rem;
        font-family: 'Rampart One', cursive;
        font-size: 3rem;
        color: white;
        z-index: 10000;
        &:hover{
            cursor: pointer;
            color: red;
        }
    }
`

const Form  = ()=>{
let data = useContext(FormContext);
console.log(data.form,data)
    return (
        <Con>
         <span className="cancel" onClick={()=>data.setForm(0)}>x</span>
            {data.form === 1 ? <InitForm /> : null}
            {data.form === 2 ? <PayForm  /> : null}
            {data.form === 3 ? <Pay  /> : null}
        </Con>
    )

}


export default Form;
