// Desc - this component as part of the Main page displays the current wether and 5 forcasts of a location.
// buid of two parts, first is current display with todays Data of a location and the 'follow' <button> that provides the 'add to favorite' func.
// second is the 5 forcasts of the next days weather and temp.
import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { converter } from '../../helpers/UnitsConverter';

const WeatherView = () => {

    const dailyForecasts = useSelector(state => state.weather.forecasts);
    const currentWeather = useSelector(state => state.weather.current);
    const location = useSelector(state => state.location);
    const favorites = useSelector(state => state.favoritesData);
    const isMetric = useSelector(state => state.isMetric);
    const dispatch = useDispatch();
    const isDayTime = currentWeather.IsDayTime ? 'Day' : 'Night';


    const ForcastView = ({ forecast }) => {
        return (
            <>
                <div className="weather-forecast__item">
                    <p className="weather-forecast__day">
                        {moment(forecast.Date).format('ddd')}
                    </p>
                    <p className="weather-forecast__icon">
                        <i className={`wi icon-accu${forecast[isDayTime].Icon}`} />
                    </p>
                    <p className="weather-forecast__temp">
                        {isMetric ?
                            `${forecast.Temperature.Minimum.Value}\xB0C - ${forecast.Temperature.Maximum.Value}\xB0C`
                            : converter(forecast.Temperature.Minimum.Value, forecast.Temperature.Maximum.Value)}
                    </p>
                    <p className="weather__forecast__text">
                        {forecast[isDayTime].IconPhrase}
                    </p>
                </div>
            </>
        );
    };

    return (
        <div className="weather-forecast">
            <div className="weather-current__today">
                <h2 className="weather-current__title">
                    {location.cityName}
                </h2>
                <div className="weather-forecast__current">
                    <p className="weather-forecast__day">
                        Today
                    </p>
                    <p className="weather-forecast__text">
                        {currentWeather.WeatherText}
                    </p>
                    <p className="weather-forecast__temp">{isMetric ?
                        `${currentWeather.Temperature.Metric.Value}\xB0C` :
                        converter(currentWeather.Temperature.Metric.Value)}
                    </p>
                </div>
                {favorites.some(({ key }) => key === location.key) ?
                    <button
                        className="weather-current__btn unfollow-btn"
                        onClick={() => dispatch(
                            removeFavorite( location.key ))}>
                        Unfollow
                    </button> :
                    <button
                        className="weather-current__btn follow-btn"
                        onClick={() => dispatch(
                            addFavorite({ location }))}>
                        Follow
                    </button>
                }

            </div>

            <div className="weather-forecast__list">
                {dailyForecasts.map((forecast, index) =>
                    <ForcastView forecast={forecast} key={index} />
                )}
            </div>
        </div>
    );
};
export default WeatherView;
