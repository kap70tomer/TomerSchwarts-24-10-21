// Desc - access point to the rest of the aplication to interact with the dom elements in the browser.
// Func - 'require('dotenv').config()' requires the app eviromental vars.
// DarkMode - state var <Boolean> - determines the style of the app. between 'light' and 'dark' mode when active.

import './styles/style.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
require('dotenv').config();

const App =()=> {
  
  const isDarkMode = useSelector(state => state.isDark);

  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <Layout/>
    </div>
  );
};

export default App;
