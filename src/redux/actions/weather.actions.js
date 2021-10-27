import axios from 'axios';

// Get location Weather details by key,=> Current Weather and Forecasts.
export const getCurrentWeatherAndForecasts = (locationKey) => async (dispatch) => {
    try{
        await dispatch(getCurrentWeather(locationKey));
        await dispatch(getDailyForecasts(locationKey));
        await dispatch({ type: 'TOGGLE_LOADING' });
    }
    catch(e){
      dispatch(setError('Current Weather and Forcasts pull Failed'+ e.message ));
    };
};

// Get Current Weather by location Key
export const getCurrentWeather = (locationKey) => async (dispatch) => {
   try{
       const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&getphotos=true`);
       if(response.data){
           await dispatch({ type: 'GET_CURRENT_WEATHER', payload: response.data[0] });
        }
    }
    catch(e){
        dispatch(setError('Failed to get current Weather '+ e.message ));
    };
};

// Get 5 Daily Forecasts by location Key.
export const getDailyForecasts = (locationKey) => async (dispatch) => {
   try{
       const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`)
        if(response.data){
            await dispatch({ type: 'GET_DAILY_FORECASTS', payload: response.data.DailyForecasts });
        }
    }
    catch(e){
        dispatch(setError('Faild to get Forcasts ' + e.message));
        };
    };


    //helpers 
    
    const setError =(err)=>{
        return {type: 'SET_ERROR', payload: err};
    };