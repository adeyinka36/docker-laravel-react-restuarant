import style from 'styled-components';
import {Link} from 'react-router-dom';

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
    '/images/n.jpg',
    '/images/o.jpg',
    '/images/p.jpg',
    '/images/q.jpg',
]
const media = {
    desktop : `@media (min-width:1341px)`
}
const Con = style.div`
           text-align: center;
          .main{
            width: 100%;
            height: 70vh;
            margin: 0 auto;
            object-fit: contain;
          }
        .main-desc{
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h1{
            font-family: 'Anton', sans-serif;
            color: #8A2BE2;
            letter-spacing: .4rem;
          }
          h2{
            font-size: 1.8rem;
            -webkit-text-stroke: 1px #8A2BE2;
            -webkit-text-fill-color: white;
            letter-spacing: 1rem;
            font-family: 'Anton', sans-serif;
          }
          span{
            font-family: 'Italianno', cursive;
            font-size: 2.5rem;
          }
          span, h2, h1, button{
            margin: 0;
            width: 100%;
            text-align: center;
            display: inline-block;
            color: #8A2BE2;
            margin-top: 1rem;
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
            margin-top: 4rem;
            &:hover{
                background-color: #ca2be2;
                cursor: pointer;
            }
          }
        }
    .pics{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contents: center;
        position: relative;
        width: 275px;
        margin: 0 auto;
        ${media.desktop} {
            flex-wrap: wrap;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

        }
        .shift{
             ${media.desktop} {
                margin-top: 5rem;
             }
        }
        img{
            width: 275px;
            height: 285px;
            border: 1px solid #8A2BE2;
            border-radius: 10px;
            margin: 3px 3px -5px 3px;
        }
        div{
            border: 1px solid #8A2BE2;
            border-radius: 10px;
            margin-bottom: 1rem;
            position: relative;
            z-index: -1;
            img{
             ${media.desktop} {
                  width: 100%;
                  min-height: 275px;
                }
            }
             &:hover .shade{
                ${media.desktop} {
                    opacity: .4;
                    cursor: pointer;
                    color: white;
                }
              }
              &:hover .price{
                ${media.desktop} {
                  background-color: #8A2BE2;
                  color: white;
                }
              }
            .shade{
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              opacity: 0;
              background-image: linear-gradient(to top left, #8A2BE2, white);
              transition: opacity .5s;
              margin: 0;
              z-index: -1;
            }
            ${media.desktop} {
                width: 20%;
                margin: .5rem;
                z-index: 1 !important;
             }
            .overlay{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: .5rem;
                font-family: 'Anton', sans-serif;
                color: #8A2BE2;
                span{
                    border: 1px solid #8A2BE2;
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
            }
        }
    }
     button{
            display: inline-block;
            width: 300px;
            color: white;
            margin: 1.5rem auto;
            background-color: #8A2BE2;
            font-size: 1.5rem;
            font-family: 'Anton', sans-serif;
            padding: 1rem;
            letter-spacing: .25rem;
            border-radius: 7px;
            margin: 1rem auto;
            &:hover{
                background-color: #ca2be2;
                cursor: pointer;
            }
          }
 overflow-x: hidden !important;
`


const Home = ()=>{

    return(
        <Con>
            <div className="main-con">
                <img src={burgers[4]} className="main" alt="background-random"/>
            </div>
            <div className="main-desc">
                <h2>MEXICAN</h2>
                <span>inspired</span>
                <h1>FOOD FOR THE MOMENT</h1>
                <button><Link to={'/menu'}>ORDER NOW!</Link></button>
            </div>
            <div className="pics">
                <div className="shift">
                    <div className="shade"></div>
                    <img src={'/images/t.jpg'} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[12]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[15]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[5]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[7]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[20]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[6]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[13]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
            </div>
            <button><Link to={'/menu'}>EXPLORE THE MENU</Link></button>
        </Con>
    )
}

export default Home;
