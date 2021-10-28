// Desc - uses root as access point to the rest of the aplication to interact with the dom elements in the browser. 
// React Redux includes a <Provider /> component, which makes the Redux store available to the app.
// 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { saveState } from './helpers/localStorage';
import App from './App';

store.subscribe(() => {
    saveState(store.getState().favoritesData);
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


