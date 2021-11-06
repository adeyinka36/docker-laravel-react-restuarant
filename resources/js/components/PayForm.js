import styled from 'styled-components';
import {useContext} from "react";
import FormContext from "../Context";


const Con = styled.div`
    .main-con {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        font-family: 'Anton', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:.9;
        background-color: #8A2BE2;
        flex-direction: column;
        .remove{
            color: red;
            font-size: 3rem;
        }
        .con{
            margin-top: 2rem;
            z-index: 1000;
            opacity: 1;
            display: flex;
            flex-direction: column;
            width: 75%;
            height: 50px;
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            max-width: 900px;
            .input{
                max-height: 3rem;
                min-height: 3rem;
                font-size: 2rem;
                padding: .2rem;
            }
        }
        button {
            width: 200px;
            padding: .1rem;
            font-family: 'Anton', sans-serif;
            border: 1px solid grey;
            font-size: 2rem;
            height: 100px;
            background-color: #8A2BE2;
            margin-top: 3rem;
            &:hover{
                background-color: white;
                cursor: pointer;
            }
        }
    }
`

const PayForm = props =>{
const form = useContext(FormContext);
    return(
        <Con>
            <div className="main-con">
                <div className="con">
                    <label>FULL NAME:</label>
                    <input className="input"/>
                </div>
                <div className="con">
                    <label> POSTCODE:</label>
                    <input className="input"/>
                </div>
                <div className="con">
                    <label>ADDRESS:</label>
                    <input className="input"/>
                </div>
                <button onClick={()=>form.setForm(3)}>PAYMENT</button>
            </div>
        </Con>
    )
}

export default PayForm;
