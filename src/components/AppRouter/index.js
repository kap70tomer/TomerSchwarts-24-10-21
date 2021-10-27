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

