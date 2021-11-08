import style from 'styled-components';
import {useState} from 'react';


const burgers = [
    '/images/burger1.jpg',
    '/images/burger2.jpg',
    '/images/burger3.jpg'
]
let image = Math.floor(Math.random() * 3);
const media = {
    desktop : `@media (min-width:1341px)`
}

const Con =  style.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #8A2BE2;
  font-family: 'Anton',sans-serif;
  margin-top: 5rem;
  ${media.desktop}{
    width: 30%;
    max-width: 500px;
    justify-content: space-around;
  }
  img{
    max-width: 600px;
    width: 95%;

  }
  .details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sig{
        font-size: 3rem;
    }
    p{
    margin-top: .1rem;
    margin-bottom: .1rem;
    }
    .desc{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70%;
        .buy{
            font-size: 2rem;
            border: 1px solid #8A2BE2;
            border-radius: 50%;
            height: 50px;
            width: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
             cursor: pointer;
             color: white;
             background-color: #8A2BE2;
            }
    }
    }
  }
  .main-img{
    ${media.desktop} {
        display: none;
    }
  }
  .details{
      &:hover{
       ${media.desktop}{
            cursor: pointer;
         }
        }
      }

 }
  .preview{
           height: 100vh;
           width: 100vw;
           top: 0;
           left: 0;
           z-index: -2;
           position: fixed;
           opacity: 1;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           opacity: 1;
           transition: .500s;
         }
         opacity: ${props=>props.opacity};
         transition: .500s;
         .details span{
            text-align: center;
         }

`

//make other menu option invisible when image is shown on background
const Food = props =>{
        let [val, setVal ] = useState(0);
        let [cur, setCur ] = useState(0);
    const show = ()=>{
        let width = window.innerWidth;
        if(width >= 1341)
        {
            props.changeOpacity(0);
            setVal(1)
            props.changeViewing(1);
            setCur(1);
        }
    }
    const unShow = ()=>{
        let width = window.innerWidth;
        if(width >= 1341)
        {
            setVal(0)
            props.changeOpacity(1);
            props.changeViewing(0);
            setCur(0);
        }
    }

    let opacity;
    if((cur && props.viewing) || !props.viewing){
        opacity = .8;
    }else {
        opacity = 0;
    }
    return(

        <Con className="container"  opacity = {opacity}>
            <img src={burgers[props.item.image]} className="main-img" alt="What you get"/>
                <div className="details">
                    <p className="sig">{props.item.name}</p>
                    <span>{props.item.description}</span>
                    <div className="desc" onMouseOver={show} onMouseLeave={unShow}>
                        <div className="buy" onClick={()=>props.add(props.item)}>+</div>
                        <span className="sig">£{props.item.price}</span>
                        <div className="buy" onClick={()=>props.remove(props.item)}>-</div>
                    </div>
                </div>
            {val === 1? <div className="preview">
                <img src={burgers[props.item.image]} alt="What you get"/>
            </div>: null}
        </Con>
    )
}

export default Food;
