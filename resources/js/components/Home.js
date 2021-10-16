import style from 'styled-components';

const burgers = [
                '/images/burger1.jpg',
                '/images/burger2.jpg',
                '/images/burger3.jpg'
            ]
     let image = Math.floor(Math.random() * 3);
const Con = style.div`
          .main{
            width: 100%;
            height: 70vh;
            background-image: url(${burgers[image]});
            background-size: cover;
            background-position: center;
            animation: main alternate 30s;
            margin: 0 auto;
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
        img{
            width: 275px;
            height: 300px;
            border: 1px solid #8A2BE2;
            border-radius: 5px;
        }
        .overlay{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: blue;
        }
    }
`


const Home = ()=>{

    return(
        <Con>
            <div className="main"></div>
            <div className="main-desc">
                <h2>MEXICAN</h2>
                <span>inspired</span>
                <h1>FOOD FOR THE MOMENT</h1>
                <button>ORDER NOW!</button>
            </div>
            <div className="pics">
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
                <div>
                    <img src={burgers[2]} alt="this is a burger"/>
                    <div className="overlay">Hello</div>
                </div>
            </div>
        </Con>
    )
}

export default Home;
