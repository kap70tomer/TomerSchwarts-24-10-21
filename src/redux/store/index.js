//Desc- App store holds the app state and allows access and updates.
// aswell to subscribe to the changes.
// func create store takes the rootReducers and the applied middleware, and returns the store OBJ.

import rootReducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;