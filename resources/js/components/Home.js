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
            width: 90%;
            max-width: 1200px;
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
            z-index: 2;
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
            }
            ${media.desktop} {
                margin: .5rem;
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

`


const Home = ()=>{

    return(
        <Con>
            <div className="main-con">
                <img src={burgers[image]} className="main" alt="background-random"/>
            </div>
            <div className="main-desc">
                <h2>MEXICAN</h2>
                <span>inspired</span>
                <h1>FOOD FOR THE MOMENT</h1>
                <button>ORDER NOW!</button>
            </div>
            <div className="pics">
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div>
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
                <div className="shift">
                    <div className="shade"></div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <span className="overlay">VEGGIE FEAST<span className="price">£20.99</span></span>
                </div>
            </div>
            <button>EXPLORE THE MENU</button>
        </Con>
    )
}

export default Home;
