// Desc - This componnent Handles the routing and addressing in react app that interacts with the DOM.
// Set the Paths<String> that leads to the Componnents<React.Component> render.
// e.g -  path = '/' === HomeComponent; 
// all routes not mentioned in the paths are redirected to home path: '/'.

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/HomePage/Home';
import Favorites from '../../components/FavoritesPage/Favorites';
 
const Routes =()=> {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' component={Favorites} />
            <Redirect from='*' to='/' />
        </Switch>
    );
};
export default Routes;

