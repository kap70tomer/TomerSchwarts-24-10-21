import React, { useEffect } from 'react';
import ResponsiveGB from '../BackGround/ResponsiveGB';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationKeyByGEO, getLocationKeyByName } from '../../redux/actions/location.actions';
import SearchInput from '../SearchComponent/SearchInput';
import WeatherView from '../WeatherListComponent/WeatherList';

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const location = useSelector(state => state.location);
   
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
            
    
    if (isLoading) return <div className="loading-wrapper"><div className="cloudy"></div></div>
    
    return (
        <>
            <ResponsiveGB />
            <SearchInput />
            <WeatherView />
        </>
    )
}

export default Home;