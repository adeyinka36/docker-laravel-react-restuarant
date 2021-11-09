import style from 'styled-components';
const burgers = [
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/c.jpg',
    '/images/d.jpg',
    'https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc6610a54901d5_Hamburger%20Cutout%20compressed.png',
    '/images/e.jpg',
    '/images/f.jpg',
    '/images/h.jpg',
    '/images/i.jpg',
    '/images/j.jpg',
    '/images/k.jpg',
    '/images/b.jpg',
    '/images/c.jpg',
    'https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc6610d0490216_TTTONLINE_Clipped.png',
    'https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc660f4449021a_StyleBowlGrain_Clipped-p-500.png',
    'https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc6610a54901d5_Hamburger%20Cutout%20compressed.png',
    '/images/m.jpg',
    ]
let image = Math.floor(Math.random() * 3);
const media = {
    desktop : `@media (min-width:1341px)`
}
const Con = style.div`
    h2{
     font-family: 'Anton',sans-serif
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
                max-width: 33%;
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
                    <img src={burgers[14]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
                <div className="con">
                    <span>FLAME GRILL</span>
                    <img src={burgers[4]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
                <div className="con">
                    <span>FLAME GRILL</span>
                    <img src={burgers[13]} alt="second display"/>
                    <span className="price">£20.99</span>
                </div>
            </div>
        </Con>
    )
}

export default  Main;
