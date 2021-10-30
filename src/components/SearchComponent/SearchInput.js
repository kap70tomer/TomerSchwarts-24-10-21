//Desc - Component that handels search capabilities.
//Interacts with the api 'on the flight' to get suggested locations that match the text while typed in the input, takes only ENGLISH.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationKeyByName } from '../../redux/actions/location.actions';
import { getSuggestions, initSuggestions, setLocationBySuggestion, setSuggestValue } from '../../redux/actions/suggestions.actions';

const SearchInput = () => {
    //@@ desc - 'suggestions'<Function> using select hook to acces suggestions<Array> in app state.
    // returns Array of suggestions fetched from accuwether auto complete service.
    const suggestions = useSelector(state => state.suggestions);
    const dispatch = useDispatch();

    //@@ desc - 'handleChange'<Function>, async function sets the text typed by the user in the search input,
    // to the state and fetching suggestions based on the text while typing.
    const handleChange = async(e) => {
        try{
            // 'search'<String> - extracted from UI.
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

    //@@ desc - 'handleSubmite'<function>, set state location to suggestion selected by the user,
    // update will change location value on stored state, trigerring then fetch by the component. 
    const handleSubmit = () => {
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

    //@@ desc - 'handleKeyPress'<Function>, call 'handleSubmit'<function> on key press, prevent refresh.
    const handleKeyPress = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        };
    };

    // 'lableButton'<function> toggles between two icons depending on the UI input state.
    // X icon clear input or submit.
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

    //@@ desc - 'onSuggestionSelected'<function> takes selected suggested and sets it as the current location in state.
    const onSuggestionSelected = (locationRawData) => {
        try{
            dispatch(initSuggestions())
            dispatch(setLocationBySuggestion(locationRawData));
        }
        catch(e){
            dispatch({type: 'SET_ERROR' , payload: 'it seems like a prob: '+ e.message});
        };
    };

    // @@desc - 'renderSuggestions'<function> returns a view with a list of suggestions fetched from the api base on the text in UI input.
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
    );
};
export default SearchInput;
