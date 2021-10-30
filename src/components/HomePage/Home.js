//Desc - Main View of the app. on this view thers input for city search that automaticaly suggests you cities from the api.
// User can add a location to 'favorites' by clicking on 'follow' <button>. 
// Display the 5 days of the location weather, based on api data. default location is 'Tel Aviv',
// unless user allows geolocation services in his browser then his 'self' location is default.
  
import React, { useEffect } from 'react';
import ResponsiveGB from '../BackGround/ResponsiveGB';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationKeyByGEO, getLocationKeyByName } from '../../redux/actions/location.actions';
import SearchInput from '../SearchComponent/SearchInput';
import WeatherView from '../WeatherComponent/WeatherView';

const Home = () => {
    //@@desc - 'dispatch'<function>, hook triggers the redux dispatch function.
    // takes in an action<Action> and call redux to dispatch.
    const dispatch = useDispatch();
    //@@ desc - 'isLoading'<Function> using select hook to acces isLoading<Boolean> in app state.
    // returns true or false.
    const isLoading = useSelector(state => state.isLoading);
    //@@ desc - 'location'<Function> using select hook to acces location<Object> in app state.
    // returns object with 'key' and 'cityName'.
    const location = useSelector(state => state.location);
    //@@ desc - 'error'<Function> using select hook to acces error<String> in app state.
    // returns String.
    const error = useSelector(state => state.error);
   
    //@@ desc - on load if location set on state get location, get 'tel aviv' by default, or the users location by geo.
    useEffect(() => {
        if(location && location.cityName){
            getLocationKeyByName(location.cityName);
        }
        else{
            navigator.geolocation.getCurrentPosition(
                
                position => {
                    dispatch(getLocationKeyByGEO( position.coords.latitude, position.coords.longitude ));
                },
                err => {
                    dispatch(getLocationKeyByName('Tel Aviv'));
                    
                    dispatch({type: 'SET_ERROR' , payload:"oops, can't find you, "+ err.message });  
                });
                
            }
            // eslint-disable-next-line
        },[dispatch]);
            
    
    if (isLoading || error) return <div className="loading-wrapper"><div className="cloudy"></div></div>
    
    return (
        <>
            <ResponsiveGB />
            <SearchInput />
            <WeatherView />
        </>
    )
}

export default Home;