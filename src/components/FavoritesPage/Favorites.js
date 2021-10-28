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

    const favorites = useSelector(state => state.favoritesData);
    const isMetric = useSelector(state => state.isMetric);
    const dispatch = useDispatch();


    const [isFetching, setFetch] = useState(true);
    const [favs, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorites()
        // eslint-disable-next-line
    }, []);


    //Should I save in state current weather or fetch onLoad ? saved is realy 'current' as live data...?
    // on the other hand will work on premise. no http requests. 
    const fetchFavorites = async () => {
        try {
            setFetch(true);
            const tempFavorites = {};
            for await (let favorite of favorites) {
                const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.key}?apikey=${process.env.REACT_APP_API_KEY}&getphotos=true`);
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

    const onFavoriteItemClicked = (favorite) => {
        dispatch(setLocation(favorite));
    }

    if (isFetching) {
        return (
            <div className="favorites container">Loading ...</div>
        );
    };


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

            <span className="favorites___header"><i class="fas fa-map-marked-alt"></i> <h1> Favorite Locations</h1></span>
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
