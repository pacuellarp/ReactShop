import React, {useContext, useState} from 'react';
import AppContext from '../context/AppContext';
import '@styles/header.scss';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle,setToggle] = useState(false);{/*Valor inicial de falso*/}
    const [toggleOrders,setToggleOrders] = useState(false);
    const {state} = useContext(AppContext); //Se conecta el estado al contexto

    const handleToggle=()=>{
    setToggle(!toggle);{/*Cambia su valor booleano*/}
    };

    return ( 
    <nav>
    <img src={menu} alt="menu" className="menu" />
    <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
        <li>
            <a href="/">All</a>
        </li>
        <li>
            <a href="/">Clothes</a>
        </li>
        <li>
            <a href="/">Electronics</a>
        </li>
        <li>
            <a href="/">Furnitures</a>
        </li>
        <li>
            <a href="/">Toys</a>
        </li>
        <li>
            <a href="/">Others</a>
        </li>
        </ul>
    </div>
    <div className="navbar-right">
        <ul>
        <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
        <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} {/*Validación del número, si hay items adicionados al carrito o no*/}
        </li>
        </ul>
    </div>
    {toggle && <Menu/>} {/*Sólo muestra Menu cuando toggle cambie su estado */}
    {toggleOrders && <MyOrder/>}
    </nav>
     );
}
 
export default Header;
