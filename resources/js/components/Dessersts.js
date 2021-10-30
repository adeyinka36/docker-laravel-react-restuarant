import style from 'styled-components';

const Con =  style.div`
        .desserts{
            margin: 5rem 0;
            width: 100vw;
            text-align: center;
            font-size: 3.5rem;
            background-color: #8A2BE2;
            color: white;
            font-family: 'Anton',sans-serif;
  }

`

const Desserts = ()=>{

    return(
        <Con>
            <div className="desserts">DESSERTS</div>
        </Con>
    )
}

export default Desserts;
