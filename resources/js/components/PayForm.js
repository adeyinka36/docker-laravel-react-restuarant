import styled from 'styled-components';
import {useContext, useState, useRef} from "react";
import FormContext from "../Context";
import LoopIcon from '@mui/icons-material/Loop';


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
          p{
                transition: .250s;
                border: 4px solid white;
                color: white;
                height: 3rem;
                width: 60%;
                font-size: 2rem;
                max-width: 900px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
    }
`

const PayForm = props =>{
    let [invalidPostcode, setPostcodeValid] = useState(false);
    let form = useContext(FormContext);
    let [details, setDetails] = useState({
        postcode: "",
        fullname: "",
        address: ""
    });
    const re = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
    const postRef = useRef()
    const submit = ()=>{
        if(re.test(details.postcode) && details.fullname && details.address) {
            form.setForm(3)
        }else {
            setPostcodeValid( true);
        }
    }
    return(
        <Con>
            <div className="main-con">
                    <div className="con">
                        <label>FULL NAME:</label>
                        <input className="input" value ={details.fullname} onChange={(e)=>setDetails({ ...details,fullname:e.target.value})}/>
                    </div>
                    <div className="con">
                        <label> POSTCODE:</label>
                        <input className="input"  ref = {postRef}  value ={details.postcode} onChange={(e)=>setDetails({ ...details,postcode:e.target.value})}/>
                    </div>
                    <div className="con">
                        <label>ADDRESS:</label>
                        <input className="input" value ={details.address} onChange={(e)=>setDetails({ ...details,address:e.target.value})}/>
                    </div>
                    <button onClick={submit}>PAYMENT</button>
                    {invalidPostcode? <p className="warning">Please enter  valid details</p> :null}
            </div>
        </Con>
    )
}

export default PayForm;
