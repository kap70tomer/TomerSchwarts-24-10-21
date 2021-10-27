import axios from 'axios';

// Get array of locations suggestions with RAW DATA { cityName, key, country }
export const getSuggestions = (cityName) => async (dispatch) => {
    try{
        if (cityName !== '') {
            const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${process.env.REACT_APP_API_KEY}`);
            await dispatch({ type: 'GET_SUGGESTIONS_REQ' });
            await dispatch({ type: 'GET_SUGGESTIONS_RES', payload: response.data.map(suggest => (
                { cityName: suggest.LocalizedName, key: suggest.Key, country: suggest.Country.LocalizedName }))
                });
        }
    }
    catch(e){
        console.log(e);
    };
};

// Set location RAW DATA { cityName, key, country} - selected by user
export const setLocationBySuggestion = (location) => {
    return {
        type: 'SET_LOCATION',
        payload: location
    }
}

// Set text value from suggested list.
export const setSuggestValue = (text) => {
    return {
        type: 'SET_TEXT',
        payload: text
    }
}

// Initilising suggestions and text value.
export const initSuggestions = () => {
    return {
        type: 'INIT_SUGGESTIONS'
    }
}
