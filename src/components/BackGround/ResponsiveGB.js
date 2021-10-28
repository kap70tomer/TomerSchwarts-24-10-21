// Desc - this component displays the background, the background changes image to fit the origin country based on the user location if anabled or last search.

import React from 'react';
import { useSelector } from 'react-redux';

const ResponsiveGBComponent = () => {
    const currentWeather = useSelector(state => state.weather.current);
    const isDarkMode = useSelector(state => state.isDark);
    const BGImage = `linear-gradient(rgba(160, 245, 255 , 25%), ${isDarkMode ?
        '#000718' : '#fff'}), url(${currentWeather.Photos[0].LandscapeLink.replace("_L_L", "_L_XXL")})`;

    return (
        <div className="responsiveBG" style={{ backgroundImage: BGImage ?  BGImage : '' }} ></div>
    );
};
export default ResponsiveGBComponent;