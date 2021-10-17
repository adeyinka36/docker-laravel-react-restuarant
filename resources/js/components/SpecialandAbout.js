import style from 'styled-components';
import {useEffect} from 'react';

const Con =  style.div`
        .top,h1{
         display: none;
        }
        h1,p, button{
            margin: 0;
        }
        .mid h1{
            display:block;
            font-family: 'Anton', sans-serif;
            color: #8A2BE2;
            letter-spacing: .4rem;
        }
        .mid p{
            color: #8A2BE2;
            font-family: sans-serif;
        }
        .mid {
            text-align: center;
        }
        button{
            display: inline-block;
            width: auto;
            color: white;
            margin: 1.5rem auto;
            background-color: #8A2BE2;
            font-size: 2rem;
            font-family: 'Anton', sans-serif;
            padding: 1.5rem;
            letter-spacing: .5rem;
            border-radius: 7px;
            margin-top: 2rem;
            &:hover{
                background-color: #ca2be2;
                cursor: pointer;
            }
          }
          .effect{
            position: relative;
            max-width: 300px;
            height: 500px;
            margin: 1.5rem auto;
            max-height: 500px;
            img, .top, .back{
                position: absolute;
                top: 0;
                left: 0;
            }
            img{
                height: 300px;
                top: 0;
                transition: transform 2s ease-out;
            }
            text-align: center;

            .back{
                 background-color: red;
                 max-height: 500px;
                 height: 500px;
                 max-width: 300px;
            }
          }
`

const SpecialandAbout = ()=>{
  useEffect(()=>{
      document.addEventListener('scroll',()=>{
          let   image = document.getElementById('rotate');
          let level = Array.from(image.style.transform).filter(item=>!isNaN(Number(item))).join('') ? Number(Array.from(image.style.transform).filter(item=>!isNaN(Number(item))).join('')) : 0;
          document.getElementById('rotate').style.transform = `rotate(${level + 360}deg)`;
      })
  },[])

    return(
        <Con>
            <h1>IN HOUSE DAILY SPECIALS</h1>
            <div className="top">
                <div className="unlimited">
                    <h1>UNLIMITED BUFFET</h1>
                    <h3>BOOK NOW!!</h3>
                </div>
                <div className="lunch">
                    <h1>LUNCH</h1>
                    <h3>BOOK NOW!</h3>
                </div>
                <div className="dinner">
                    <h1>DINNER</h1>
                    <h3>BOOK NOW!</h3>
                </div>
            </div>
            <div className="mid">
                <h1>OPEN DAILY</h1>
                <h1>DELIVERIES AND COLLECTIONS</h1>
                <p>From our kitchen to your dining room. Fried chicken taco? Come and get it. Brisket nachos? Headed your way. Grilled chicken on a grain bowl? We’ll take one too.</p>
                <button>ORDER NOW!</button>
            </div>
            <div className="about">
                <div className="effect">
                    <div className="back"></div>
                    <img id="rotate" src="https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc6607cc4901a7_marg-rotate.svg" alt="spinner" />
                </div>
            </div>
        </Con>
    )
}

export default SpecialandAbout;
