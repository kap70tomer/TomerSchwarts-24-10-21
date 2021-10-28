import { combineReducers } from 'redux';

import metricReducer from './metric.reducer';
import darkModeReducer from './darkMode.reducer';
import loadingReducer from './loading.reducer';

import locationReducer from './location.reducer';
import suggestionsReducer from './suggestions.reducer';
import weatherReducer from './weather.reducer';
import favoritesReducer from './favorites.reducer';
import { errorReducer } from './error.reducer';

const rootReducers = combineReducers({
    errors: errorReducer,
    isMetric: metricReducer,
    isDark: darkModeReducer,
    isLoading: loadingReducer,
    favoritesData: favoritesReducer,
    location: locationReducer,
    weather: weatherReducer,
    suggestions: suggestionsReducer,
});

export default rootReducers;