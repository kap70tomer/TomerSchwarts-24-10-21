// Desc - this component displays the background image,
// It changes to fit the origin country based on the user location or last search.

import React from 'react';
import { useSelector } from 'react-redux';
// Background view.
const ResponsiveGBComponent = () => {
     //@@ desc - 'currentWeather'<Function> using select hook to acces 'currentWeather'<Object>in app state.
    // returns Object that has 'photos'<Array>.
    const currentWeather = useSelector(state => state.weather.current);
     //@@ desc - 'isDark'<Function> using select hook to acces 'isDark'<Boolean> in app state.
    // returns true or false.
    const isDark = useSelector(state => state.isDark);
    //@@ desc - <blob>Image of the last current place loaded by the user.
    const BGImage = `linear-gradient(rgba(160, 245, 255 , 25%), ${isDark ?
        '#000718' : '#fff'}), url(${currentWeather.Photos[0].LandscapeLink.replace("_L_L", "_L_XXL")})`;
    if(BGImage){
        return (
            <div className="responsiveBG" style={{ backgroundImage: BGImage }} ></div>
            );
    }
    return (
        <div className="responsiveBG" style={{ backgroundImage: {} }} ></div>
    );
};
export default ResponsiveGBComponent;