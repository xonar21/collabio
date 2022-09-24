import React from "react";
import './Header.css';
import basket from '../../images/basket.svg';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
function Header() {
    function openPopup() {
        const popup = document.querySelector('.signUp')
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
    }
    return (
        <header className="header animate__animated animate__fadeInDown">
            
            <img className="header__image" src={logo}/>
            <ul className="header__links">
                <li className="header__link">
                    <a className="header__linkA" href="#">Features</a>
                </li>
                <li className="header__link">
                    <a className="header__linkA" href="#">About</a>
                </li>
                <li className="header__link">
                    <a className="header__linkA" href="#">Pricing</a>
                </li>
                <li className="header__link">
                    <a className="header__linkA" href="#">Blog</a>
                </li>
                <li className="header__link">
                    <a className="header__linkA" href="#">Contact</a>
                </li>
            </ul>
            <div className="header__basket">
                <a className="header__basketA" href="#">
                    <img className="header__basketImg" src={basket}/>
                    <p className="header__cart">
                        Cart
                    </p>
                    <p className="header__count">
                        0
                    </p>
                </a>
            </div>
            {/* <button type="button" onClick={openPopup} className="header__registration">
                Sign up for Beta
            </button> */}
            <Link className="header__registration" onClick={openPopup} to='/signup'>Sign up for Beta</Link>
        </header>
    );
}
export default Header;