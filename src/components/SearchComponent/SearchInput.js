import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationKeyByName } from '../../redux/actions/location.actions';
import { getCurrentWeatherAndForecasts } from '../../redux/actions/weather.actions';
import { getSuggestions, initSuggestions, setLocationBySuggestion, setSuggestValue } from '../../redux/actions/suggestions.actions';


const SearchInput = () => {
    const suggestions = useSelector(state => state.suggestions);
    const dispatch = useDispatch();

    // on Search term changed suggest.
    const handleChange = async(e) => {
        try{
            const search = e.target.value;
            
            dispatch(setSuggestValue(search));
            
            if (search.length > 0) {
                dispatch(getSuggestions(search));
            
            } else {
                dispatch(initSuggestions());
            }
        }
        catch(err){
            dispatch({type: 'SET_ERROR' , payload: 'Auto complete faild: '+ err.message});
        }
    }

    const handleSubmit = (e) => {
        try{
            if (suggestions.text.length > 0 && suggestions.isFetching === false && suggestions.locations.length > 0) {
                dispatch(getLocationKeyByName(suggestions.locations[0].cityName));
                dispatch(initSuggestions());
            };
        }
        catch(err){
            dispatch({type: 'SET_ERROR' , payload: 'Auto complete faild: '+ err.message});
        }
    };

    const handleKeyPress = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        };
    };

    const labelButton = () => {
        if (suggestions.locations.length > 0 && suggestions.text.length > 0) {
            return (
                <button
                    className="search__btn"
                    onClick={() => dispatch(initSuggestions())}
                >
                    <i className="fas fa-times"></i>
                </button>
            )
        }
        return (
            <button
                className="search__btn"
                onClick={handleSubmit}
            >
                <i className="fas fa-search"></i>
            </button>
        )

    }

    const onSuggestionSelected = (locationRawData) => {
        try{
            dispatch(initSuggestions())
            dispatch(setLocationBySuggestion(locationRawData));
            dispatch(getCurrentWeatherAndForecasts(locationRawData.key));
        }
        catch(e){
            dispatch({type: 'SET_ERROR' , payload: 'it seems like a prob: '+ e.message});
        };
    };

    const renderSuggestions = () => {
        if (suggestions.locations.length === 0 || suggestions.text.length === 0) {
            return null;
        };

        return (
            <ul className="card search__results results">
                {suggestions.locations.map((location, index) =>
                    <li
                        key={index}
                        onClick={async () => onSuggestionSelected(location)}
                    >
                        <span>{location.cityName}</span><span className="search__label">{location.country}</span>
                    </li>)
                }
            </ul>
        );
    };

    return (
        <div className="search-wrapper search">
            <input
                type="text"
                pattern = '[A-Za-z]'
                className="search__input"
                placeholder="Enter City Name"
                value={suggestions.text}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                />
            {labelButton()}
            {renderSuggestions()}
        </div>
    )
}

export default SearchInput
