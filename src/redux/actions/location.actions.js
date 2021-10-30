import axios from 'axios';
import { getCurrentWeatherAndForecasts } from './weather.actions';

// Get location { key, cityName } By {latitude,longitude} GEO Self LOCATION (if allowd). 
// function takes geo location values to fetch the location key, then fetch the location data by the responded location key.
export const getLocationKeyByGEO = (latitude, longitude) => async (dispatch) => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/locations/v1/cities/geoposition/search?q=${latitude},${longitude}&apikey=${process.env.REACT_APP_API_KEY}`);
        if(response.data){
            await dispatch(setLocation({ cityName: response.data.LocalizedName, key: response.data.Key }) );
            await dispatch(getCurrentWeatherAndForecasts(response.data.Key));
        };
    }
    catch (e){
        dispatch({type: 'SET_ERROR' , payload:'Unable to get by Geo: '+ e.message });
    };
};

// Get location by name <function>,takes a city name <String> and calls async get from accuweather autocorrect endpoint,
// the responded key is used to fetch current wether and 5 forcasts. 
export const getLocationKeyByName = (cityName) => async (dispatch) => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${process.env.REACT_APP_API_KEY}`);
        if(response.data){
            await dispatch(setLocation({cityName: response.data[0].LocalizedName, key: response.data[0].Key}));
            await dispatch(getCurrentWeatherAndForecasts(response.data[0].Key));
        }
    }
    catch(e){
        dispatch({type: 'SET_ERROR' , payload:'Failed to get location Key: '+ e.message });
    };
};

// Action set location. takes location to set in state.
export const setLocation =(location)=>{
    return{
        type: 'SET_LOCATION', payload: location
    };
};