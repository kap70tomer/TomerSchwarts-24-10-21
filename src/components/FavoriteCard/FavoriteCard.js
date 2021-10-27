import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { converter } from '../../helpers/converter';
import { removeFavorite } from '../../actions';

const FavoriteCardComponent = ({favs, favorite, index}) => {
    const isMetric = useSelector(state => state.isMetric);
    const dispatch = useDispatch();

    return(
        <div
        className="favorites__item"
        key={index}>
        <p>{favorite.name}</p>
        <p>{favs[favorite.id].WeatherText}</p>
        <p>{isMetric ? `${favs[favorite.id].Temperature.Metric.Value}\xB0C` : converter(favs[favorite.id].Temperature.Metric.Value)}</p>
        <button
            onClick={() => dispatch(removeFavorite(favorite.id))}>
            Remove Favorite
        </button>
    </div>
    )
}
export default FavoriteCardComponent;