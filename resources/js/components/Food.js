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
  .image{
    display: none;
  }

`

const Food = ()=>{

    return(
        <Con>
            <div className="image">

            </div>
            <div className="food-desc">
                <img src={burgers[3]} alt="What you get"/>
                <div>
                    <span>Delicious</span>
                    <span>£12.99</span>
                    <span>+</span>
                    <span>-</span>
                </div>

            </div>
            <div className="calories">

            </div>
        </Con>
    )
}
