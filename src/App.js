// import logo from './logo.svg';
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/homeScreen/HomeScreen';
import VideoPlay from './Screens/videoPlay/videoPlay'
import "./_app.scss"

function App() {

  
  return (
    <>
        <Routes>
             <Route path='/'  element={<HomeScreen /> } />
             <Route path='/videoPlay'  element={<VideoPlay /> } />

        
        </Routes>
    </>
  )
}

export default App;
