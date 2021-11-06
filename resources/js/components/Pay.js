import styled from 'styled-components';
import {useContext, useState} from 'react';
import FormContext from '../Context';


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
         #small{
                max-width: 300px;
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

const Pay = props =>{
    const [success,setSuccess] = useState(0);
    return(
        <Con>
            <div className="main-con">
                {!success ? <>
                        <div className="con">
                            <label>CARDHOLDER NAME:</label>
                            <input className="input"/>
                        </div>
                        <div className="con">
                            <label> CARD NUMBER:</label>
                            <input className="input"/>
                        </div>
                        <div className="con" id="small">
                            <label>EXPIRY DATE:</label>
                            <input className="input"/>
                        </div>

                        <div className="con" id="small">
                            <label>SECUIRTY CODE:</label>
                            <input className="input"/>
                        </div>

                        <button onClick={() => setSuccess(1)}>MAKE PAYMENT</button>
                    </>:

                        <>
                            <h2>SUCCESS!</h2>
                            <button>HOME</button>
                        </>
                }
            </div>
        </Con>
    )
}

export default Pay;
