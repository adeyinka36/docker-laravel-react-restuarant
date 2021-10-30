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
            height: 70px;
            width: 70px;
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
`

const Food = ()=>{

    return(
        <Con>
            <img src={burgers[1]} alt="What you get"/>
                <div className="details">
                    <p className="sig">Delicious</p>
                    <span>This is the description This is the description This is the description This is the description</span>
                    <div className="desc">
                        <div className="buy">+</div>
                        <span className="sig">£12.99</span>
                        <div className="buy">-</div>
                    </div>
                </div>
        </Con>
    )
}

export default Food;
