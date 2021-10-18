import style from 'styled-components';
const burgers = [
    '/images/burger1.jpg',
    '/images/burger2.jpg',
    '/images/burger3.jpg'
]
let image = Math.floor(Math.random() * 3);
const media = {
    desktop : `@media (min-width:1341px)`
}
const Con = style.div`
    h2{
     font-family: 'Italianno',cursive;
     font-size: 3rem;
     color:  #8A2BE2;
     text-align: center;
    }
   h1{
     font-family: 'Anton', sans-serif;
     color: #8A2BE2;
     letter-spacing: .4rem;
     text-align: center;
     margin-top: 2rem;
       }
   width: 100%;
   .main-con{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
        ${media.desktop} {
           flex-direction: row;
         }
       .con{
            display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           margin-bottom: 3rem;
            ${media.desktop} {
                &:first-child, &:last-child{
                   margin-top: 5rem;
                }
            }
           &:hover .price{
                ${media.desktop} {
                  cursor: pointer;
                  background-color: #8A2BE2;
                  color: white;
             }
           }
           &:hover{
                ${media.desktop} {
                  cursor: pointer;
             }
           }

       }
       img{
            max-width: 80%;
            height: auto;

       }
       span{
          font-family: 'Anton', sans-serif;
          color: #8A2BE2;
       }
       .con>:first-child {
         font-size: 1rem;
         letter-spacing: .15rem;
       }
       .price{
            border: 1px solid #8A2BE2;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
       }
   }
   img{
    z-index: -1 !important;
}
`


const Main = ()=>{

    return(
        <Con>
            <h2>mexican-inspired street food, for those who crave better</h2>
            <h1>SPECIALS</h1>
            <div className="main-con">
                <div className="con">
                    <span>FLAME GRILL</span>
                    <img src={burgers[1]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
                <div className="con">
                    <span>FLAME GRILL</span>
                    <img src={burgers[2]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
                <div className="con">
                    <span>FLAME GRILL</span>
                    <img src={burgers[image]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
            </div>
        </Con>
    )
}

export default  Main;
