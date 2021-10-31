import Food from '../components/Food';
import Desserts from "../components/Dessersts";
import style from "styled-components";

const Con = style.div`
    display: flex;
    flex-wrap: wrap;
`
const Menu = ()=>{

    return(
        <Con>
            <Food/>
            <Food/>
            <Food/>
            <Food/>
            <Food/>
            <Desserts/>
            <Food/>
            <Food/>
            <Food/>
            <Food/>
            <Food/>
        </Con>
    )
}

export default Menu;
