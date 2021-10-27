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
