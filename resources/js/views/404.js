import styled from 'styled-components';

const Con = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,p{
        color: #8A2BE2;
        font-family: 'Anton', sans-serif;
        letter-spacing: .125rem;
        text-align: center;
    }
     h1{
         opacity: .8;
         font-size: 8rem;
         letter-spacing: .325rem;
         margin: 0;
     }
    p{
        font-size: 1rem;
    }
    `
const NotFound = () =>{
    return(
        <Con>
            <h1>404</h1>
            <p>SORRY PAGE DOES NOT EXIST</p>
        </Con>
    )
}


export default NotFound;
