import styled from 'styled-components';


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

const InitForm = ()=>{
return(
    <Con>
        <div className="main-con">
            <div className="con">
                <p>Delicious:</p>
                <span>£30.99</span>
            </div>
            <div className="con">
                <p>Delicious:</p>
                <span>£30.99</span>
            </div>
            <div className="con">
                <p>Delicious:</p>
                <span>£30.99</span>
            </div>
            <div className="con">
                <p>Delicious:</p>
                <span>£30.99</span>
            </div>
            <div className="con">
                <p className="total">Total:</p>
                <p className="total">£120</p>
            </div>
            <button>PROCEED</button>
        </div>
    </Con>
    )
}

export default InitForm;
