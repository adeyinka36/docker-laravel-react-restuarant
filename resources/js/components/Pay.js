import styled from 'styled-components';
import { useState } from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import {Link} from 'react-router-dom';


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
    .completed{
        color: white;
        line-spacing: .25rem;
        font-size: 3rem;
    }
    .spinner{
        transition: 5s;
        font-size: 7rem;
        color: white;
        animation: spin 5s infinite;
    }
    @keyframes spin{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
`

const Pay = props =>{
    const [success,setSuccess] = useState(0);
    let [loading , setLoading] = useState(false);
    const submit = ()=> {
        setLoading(true);
        setSuccess(1);
        setTimeout(()=>{
            setLoading(false);
        }, 2000)

    }

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
                            <label>SECURITY CODE:</label>
                            <input className="input"/>
                        </div>
                        <button onClick={submit}>MAKE PAYMENT</button>
                    </>:
                    <>
                    {!loading?
                        <>
                            <h2 className="completed">Thanks for your order!</h2>
                            <button><Link to="/">HOME</Link></button>
                         </>:
                        <CachedIcon className="spinner"/>
                    }
                    </>

                }
            </div>
        </Con>
    )
}

export default Pay;
