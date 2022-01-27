// import logo from './logo.svg';
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import LoginScreen from './AdminScreen/adminLogin/LoginScreen';
import './App.css';
import Dashboard from './AdminScreen/AdminDashboard/Dashboard'
import HomeScreen from './Screens/homeScreen/HomeScreen';
import LikedVideos from './Screens/LikedVideos/LikedVideo'
import "./_app.scss"

function App() {

  
  return (
    <>
        <Routes>
             <Route path='/'  element={<HomeScreen /> } />
             <Route path='/LikedVideo'  element={<LikedVideos /> } />
             <Route path='/admin/login'  element={<LoginScreen /> } />
             <Route path='/admin'  element={<Dashboard /> } />
              
        
        </Routes>
    </>
  )
}

export default App;
