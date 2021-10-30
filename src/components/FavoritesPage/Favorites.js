//Desc -Favorites View shows places and their current weather. selected by the user.
//favorites are based on the data in state, and their current weather is based on their current data fetched from the api onLoad. 
//Pressing on each of the cards navigates you to the main page, showing the location selected there.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { converter } from '../../helpers/UnitsConverter';
import { removeFavorite } from '../../redux/actions';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { setLocation } from '../../redux/actions/location.actions';
import ResponsiveGBComponent from '../BackGround/ResponsiveGB';

export const Favorites = () => {

    //component state.
    //using hooks.
    
    //@@ desc - 'favorites'<Function> using select hook to access array of places the user chose, stored in app state.
    // returns an Array. 
    const favorites = useSelector(state => state.favoritesData);
    
    //@@ desc - 'isMatric'<Function> using select hook to acces isMatric<Boolean> in app state.
    // returns true or false.
    const isMetric = useSelector(state => state.isMetric);
    
    //@@desc - 'dispatch'<function>, hook triggers the redux dispatch function.
    // takes in an action<Action> and call redux to dispatch.
    const dispatch = useDispatch();
    
    //@@desc - vor 'isFatching'<Boolean>, used to determine the view until async proccess is done.
    // var 'setFetch'<function>, setter function to update 'isFetching',
    // and trigger the component render if the value changed.
    const [isFetching, setFetch] = useState(true);
    
    //@@desc - var 'favorites'<Array>, used as model to store the users selected places.
    // var 'setFavorites'<function>, setter function to update 'favs' array,
    // and trigger the component render if its value changed.
    const [favs, setFavorites] = useState([]);
    
    //on Page load call 'fetchFavorites'<function>.
    useEffect(() => {
        fetchFavorites()
        // eslint-disable-next-line
    }, []);

    //@@desc - 'fatchFavorites'<function>, async http GET request.
    // loops through the 'favorites'<Array>, and fetches the current weather each. using axios.
    // based on each favorite key.
    
    //@@ desc - 'tempFavorites'<Object>, model for favorites with each current data from AccuWeather API.
    const fetchFavorites = async () => {
        try {
            setFetch(true);
            const tempFavorites = {};
            for await (let favorite of favorites) {
                const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.key}?apikey=${process.env.REACT_APP_API_KEY}&getphotos=false`);
                if (response.data) {
                    tempFavorites[favorite.key] = response.data[0];
                };
            };
            setFavorites(tempFavorites);
            setFetch(false);
        }
        catch (e) {
            dispatch({ type: 'SET_ERROR', payload: 'Fatching current weather for favorites Failed ' + e.message });
        };
    };

    //@@desc -'onFavoriteItemClicked'<function> takes 'favorite'<Object> and uses 'dispatch' to set updated 'loacation'<object> on state. 
    const onFavoriteItemClicked = (favorite) => {
        dispatch(setLocation(favorite));
    }

    if (isFetching) {
        return (
            <div className="favorites container">Loading ...</div>
        );
    };

    //@@ desc - 'FavoriteCard'<Function>, react functional component, Single View.
    // Func takes 'favorite'<Object> and return a view with its values.
        const FavoriteCard = ({ favorite }) => {

        return (<>

            <Card
                className="favorites__item"
                onClick={() => onFavoriteItemClicked(favorite)}>
                <Link to="/">
                    <b>{favorite.cityName}</b>
                    <p>{favs[favorite.key].WeatherText}</p>
                    <i>
                        {isMetric ? `${favs[favorite.key].Temperature.Metric.Value}\xB0C` :
                            converter(favs[favorite.key].Temperature.Metric.Value)}
                    </i>
                    <br />
                </Link>
                <button className='btn-primary'
                    onClick={() => dispatch(removeFavorite(favorite.key))}>
                    <i className="far fa-heart" />
                </button>
            </Card>
        </>)
    }
    return (
        <>
            <ResponsiveGBComponent />

            <span className="favorites___header"><i className="fas fa-map-marked-alt"></i> <h1> Favorite Locations</h1></span>
            <div className='favorites'>
                {favorites ? favorites.map((favorite, index) => (
                    <FavoriteCard favorite={favorite} key={index} />

                ))
                    : <>No Favorites Found.</>}
            </div>
        </>
    );

};
export default Favorites;
