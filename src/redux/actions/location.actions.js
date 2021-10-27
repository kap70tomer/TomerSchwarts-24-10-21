import axios from 'axios';
import { getCurrentWeatherAndForecasts } from './weather.actions';

// Get location { key, cityName } By {latitude,longitude} GEO Self LOCATION (if allowd). 

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

// Get location key by city name, then getCurrentWeatherAndForecasts() for the responded key. 
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

export const setLocation =(location)=>{
    return{
        type: 'SET_LOCATION', payload: location
    }
}