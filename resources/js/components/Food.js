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
  color: #8A2BE2
  font-famil: 'Anton',sans-serif;

`

const Food = ()=>{

    return(
        <Con>
            <img src={burgers[1]} alt="What you get"/>
                <div className="details">
                    <p>Delicious</p>
                    <p>This is the description This is the description This is the description This is the description</p>
                    <span>+</span>
                    <span>£12.99</span>
                    <span>-</span>
                </div>
        </Con>
    )
}

export default Food;
