import styled from 'styled-components';


const Con = styled.div`
    .main-con {
        width: 1000vw;
        height: 100vh;
        font-family: 'Anton', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:.7;
        background-color: #8A2BE2;
        flex-direction: column;
        .con{
            display: flex;
            flex-direction: column;
            width: 75%;
            height: 80%;
        }
        button {
            width: 200px;
            padding: .1rem;
            font-family: 'Anton', sans-serif;
            background-color: #8A2BE2;
        }
    }
`

const PayForm = ()=>{
    return(
        <Con>
            <div className="main-con">
                <div className="con">
                    <span>Full Name:</span>
                    <input/>
                </div>
                <div className="con">
                    <span>Postcode:</span>
                    <input/>
                </div>
                <div className="con">
                    <span>Address:</span>
                    <input/>
                </div>
                <button>PAY</button>
            </div>
        </Con>
    )
}


export default PayForm;
