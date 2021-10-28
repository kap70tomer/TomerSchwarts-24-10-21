//Desc - Header View holds the app Navigation controls and the App LOGO.
//3 icons on the right, heart that navigates to favorites also shows the amount of favorites selected.
// an abjust icon to toggle Dark mode style, and Units converter icon 'C' | 'F' that toggle 'celsiuc' and 'fernhait'. 

import React from 'react';
import AppLogo from '../../assets/WeatherGIF1.gif';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, convertUnits } from '../../redux/actions';

const Header = () => {
    const favorites = useSelector(state => state.favoritesData);
    const isMetric = useSelector(state => state.isMetric);
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
                            <button onClick={e => dispatch(toggleDarkMode())}><i className="fas fa-adjust"></i></button>
                        </li>
                        <li>
                            <button onClick={e => dispatch(convertUnits())}><div className="header__unit-icon">{isMetric ? '\xB0C' : '\xB0F'}</div></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;