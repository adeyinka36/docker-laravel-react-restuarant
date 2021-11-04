import styled from 'styled-components';
import InitForm from "../components/InitForm";

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

    return (
        <Con>
         <span className="cancel">x</span>
         <InitForm/>
        </Con>
    )

}


export default Form;
