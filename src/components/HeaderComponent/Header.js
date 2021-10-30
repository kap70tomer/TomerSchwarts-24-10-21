//Desc - Header View holds the app Navigation controls and the App LOGO.
// 3 icons on the right, heart that navigates to favorites also shows the amount of favorites selected.
// an abjust icon to toggle Dark mode style, and Units converter icon 'C' | 'F' that toggle 'celsiuc' and 'fernhait'. 

import React from 'react';
import AppLogo from '../../assets/WeatherGIF1.gif';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, convertUnits } from '../../redux/actions';
// Header component handle navigation and functionality of style and unites mesures type in the app.
const Header = () => {
    //@@ desc - 'favorites'<Function> using select hook to access array of places the user chose, stored in app state.
    // returns an Array. 
    const favorites = useSelector(state => state.favoritesData);
    
    //@@ desc - 'isMatric'<Function> using select hook to acces isMatric<Boolean> in app state.
    // returns true or false.
    const isMetric = useSelector(state => state.isMetric);
    
    //@@desc - 'dispatch'<function>, hook triggers the redux dispatch function.
    // takes in an action<Action> and call redux to dispatch.
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <span className ="header__logo-wrapper">     
                    <img className="header__logo-gif" alt=" " src={ AppLogo }/><h1 className="header__logo"><Link to="/">Herolo Weather</Link></h1>
                    </span>
                    <ul className="header__list">
                        <li>
                            <Link to="/favorites">
                                <i className="header__favorite-icon fas fa-heart">
                                    <div className="header__favorite-num">{favorites.length}</div>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => dispatch(toggleDarkMode())}><i className="fas fa-adjust"></i></button>
                        </li>
                        <li>
                            <button onClick={() => dispatch(convertUnits())}><div className="header__unit-icon">{isMetric ? '\xB0C' : '\xB0F'}</div></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;