import styled from 'styled-components';
import FormContext from "../Context";
import {useContext} from "react";


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
            z-index: 1000;
            opacity: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75%;
            height: 50px;
            color: white;
            font-size: 1.5rem;
            .count{
                margin-right: 1rem;
            }
            p{
                margin-right: 10px;
            }
            .total{
                margin-top: 50px;
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
            margin-top: 10px;
            &:hover{
                background-color: white;
                cursor: pointer;
            }
        }
    }
`
const sortIt = arr =>{
    let vals = new Object()
    for(let i = 0; i< arr.length; i++){
        let num = arr[i];
        num = num.toString()
        if(num in vals) {
            vals[num] = vals[num]+1
        }else {
            vals[num] =1
        }
    }
    return vals
}
const InitForm = props=>{
    const form = useContext(FormContext);
    const unique = props.bought.map(item=>item.id).sort()
    console.log(sortIt(unique))
return(
    <Con>
        <div className="main-con">
            {props.bought.length? props.bought.map(item =>
                <div className="con" key={item.id}>
                    <span className="count">1</span>
                    <p>{item.name}:</p>
                    <span>£{item.price}</span>
                </div>
            ):null
            }

            <div className="con">
                <p className="total">Total:</p>
                <p className="total">£{props.total}</p>

            </div>
            <button onClick={()=> form.setForm(2)}>PROCEED</button>
        </div>
    </Con>
    )
}

export default InitForm;
