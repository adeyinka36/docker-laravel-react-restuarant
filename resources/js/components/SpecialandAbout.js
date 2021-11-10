import style from 'styled-components';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';


const images = [
    '/images/logo.jpg',
    '/images/spin.jpg'
]
const aboutImg = 'https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc662695490218_Fiesta_Clipped.png'
const media = {
    desktop : `@media (min-width:1341px)`,
    tiny: `@media (max-width:500px)`
}
const Con =  style.div`
        .top,h1{
         display: none;
        }
        h1,p, button{
            margin: 0;
        }
        .mid h1{
            display:block;
            font-family: 'Anton', sans-serif;
            color: #8A2BE2;
            letter-spacing: .4rem;
        }
        .mid p{
            color: #8A2BE2;
            font-family: 'Anton',sans-serif;
            letter-spacing: .1rem;
        }
        .mid {
            text-align: center;
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
            margin-top: 2rem;
            &:hover{
                background-color: #ca2be2;
                cursor: pointer;
            }
          }
          .effect{
            position: relative;
            max-width: 500px;
            height: 500px;
            margin: 1.5rem auto;
            max-height: 500px;
            display: flex;
            align-items: center;
            justify-contents: center;
            z-index: -1;
             ${media.desktop}{
              max-width: 500px;
              max-height: 500px;
              width: 500px;
              height: 500px;
             }
            img{
                position: absolute;
                top: 0;
                left: 0;
            }
            img{
                height: 500px;
                top: 0;
                transition: transform .500s ease-out;
            }
            text-align: center;
          }
          .logo{
            position: static !important;
            max-height: 370px;
            width: 375px;
            border-radius: 50%;
            margin: 0 auto;
          }
          .about .sub-con{
           ${media.desktop}{
              width: 50%;
             }
          }
          .about .image{
            margin: 0 auto;
            max-width: 400px;
            min-height: 400px;
            ${media.desktop}{
                display:flex;
                justify-content: center;
                align-items: center;
                width:50%;
                max-width: 700px;

            }
          }
          .about-con{
            ${media.desktop}{
                margin: 1rem auto;
                display:flex;
                justify-content: center;
                align-items: center;
                max-width: 1400px;
            }
          }
          .about h2{
            font-family: 'Anton', sans-serif;
            margin: .25rem auto;
            color: #8A2BE2;
            letter-spacing: .5rem;
            font-size: 2rem;
             text-align: center;
             ${media.desktop} {
                    font-size: 2.5rem
             }
          }
          .about p{
            font-family: sans-serif ;
            margin: .25rem auto;
            color: #8A2BE2;
            width: 400px;
            text-align: center;
             ${media.desktop} {
                    font-size: 1.5rem;
                    width: 100%;
             }
          }
          .about .image{
                background-image: url(${aboutImg});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
             }
         }
        .effect{
        ${media.tiny}{
            max-width: 230px;
            max-height: 230px;
        }
         img{
            ${media.tiny}{
                max-height:100%;
                max-width: 100%;
            }
         }
        }
`

const SpecialandAbout = ()=>{
    let t1 = 0;
    let count =0;
  useEffect(()=>{

      document.addEventListener('scroll',()=>{
          if(t1 === 0){t1 = new Date().getTime(); }
          let   image = document.getElementById('rotate');
          let level = Array.from(image.style.transform).filter(item=>!isNaN(Number(item))).join('') ? Number(Array.from(image.style.transform).filter(item=>!isNaN(Number(item))).join('')) : 0;
          if(((new Date().getTime() - 100) < t1) &&  count) {
              return
          }

          document.getElementById('rotate').style.transform = `rotate(${level + 10}deg)`;
          t1 = new Date().getTime()
          count++
      })
  },[])

    return(
        <Con>
            <h1>IN HOUSE DAILY SPECIALS</h1>
            <div className="top">
                <div className="unlimited">
                    <h1>UNLIMITED BUFFET</h1>
                    <h3>BOOK NOW!!</h3>
                </div>
                <div className="lunch">
                    <h1>LUNCH</h1>
                    <h3>BOOK NOW!</h3>
                </div>
                <div className="dinner">
                    <h1>DINNER</h1>
                    <h3>BOOK NOW!</h3>
                </div>
            </div>
            <div className="mid">
                <h1>OPEN DAILY</h1>
                <h1>DELIVERIES AND COLLECTIONS</h1>
                <p>From our kitchen to your dining room. Fried chicken taco? Come and get it. Brisket nachos? Headed your way. Grilled chicken on a grain bowl? We’ll take one too.</p>
                <button><Link to={'/menu'}>ORDER NOW!</Link></button>
            </div>
            <div className="about">
                <div className="effect">
                    <img id="rotate" src="https://uploads-ssl.webflow.com/604fb106ebbc6653db4900ef/604fb106ebbc6607cc4901a7_marg-rotate.svg" alt="spinner" />
                    <img src={images[1]} className = "logo" alt="logo"/>
                </div>
                <div className="about-con">
                    <div className="sub-con">
                    <h2>ABOUT US</h2>
                    <p>Founded in 2018 in Silver Spring, Maryland, TTT stands for Tacos, Tortas & Tequila.  As the destination for Mexican inspired street food, our mission is to redefine the Mexican eating experience by delivering food prepared to order and doing it quickly. Everything we make is in house daily so we can deliver fresh - never frozen, healthy meals that taste great and are at the highest quality. Whether you order a taco, nacho or fiesta platter we are committed to providing our guests the true flavor of real Mexican street food.  We believe that you don't have to make difficult choices about eating great tasting food and being healthy...welcome to TTT.  </p>
                    </div>
                    <div className="image"></div>
                </div>
            </div>
        </Con>
    )
}

export default SpecialandAbout;
