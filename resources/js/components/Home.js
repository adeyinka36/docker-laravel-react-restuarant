import style from 'styled-components';

const burgers = [
                '/images/burger1.jpg',
                '/images/burger2.jpg',
                '/images/burger3.jpg'
            ]
     let image = Math.floor(Math.random() * 3);

const Con = style.div`
    .main{
        width: 45vw;
        height: 70vh;
        background-image: url(${burgers[image]});
        background-size: cover;
        background-position: center;
        animation: main alternate 30s;
        margin: 0 auto;
    }
`

const Home = ()=>{

    return(
        <Con>
            <div className="main"/>
            <div className="main-desc">
                <h2>FOOD FOR THE MOMENT</h2>
                <p>THE MOST EXOTIC GLOBAL CUISINE</p>
                <button>ORDER NOW!</button>
            </div>
            <div className="pics">
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
            </div>
        </Con>
    )
}

export default Home;
