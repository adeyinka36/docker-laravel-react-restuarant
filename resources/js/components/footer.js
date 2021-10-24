import style from 'styled-components';


const burgers = [
    '/images/logo.jpg',
    '/images/spin.jpg'
]

const Con = style.div`
     margin-top: 6rem;
     text-align: center;
    .main-con{
        margin: .25rem  auto;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        img{
         max-width: 30%;
         margin: .1rem;
        }
    }
    .insta{
        display: inline-block;
        width: auto;
        color: white;
        font-family: 'Anton', sans-serif;
        background-color: #8A2BE2;
        padding: 1rem;
        border-radius: 5px;
    }
    p{
        display: inline-block;
        width: auto;
        color: #8A2BE2;
        font-family: 'Anton', sans-serif;
        font-size: 1.5rem;
    }
`

const Footer = ()=>{

    return(
        <Con>
            <p>Open Everyday: 10am-10pm</p>
            <div className="main-con">
                <img src={burgers[0]} alt="second display"/>
                <img src={burgers[0]} alt="second display"/>
                <img src={burgers[0]} alt="second display"/>
                <img src={burgers[0]} alt="second display"/>
                <img src={burgers[0]} alt="second display"/>
                <img src={burgers[0]} alt="second display"/>
            </div>
            <p className="insta">FOLLOW US ON INSTAGRAM</p>
        </Con>
    )
}


export default Footer;
