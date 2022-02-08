// import logo from './logo.svg';
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import LoginScreen from './AdminScreen/adminLogin/LoginScreen';
import './App.css';
import Dashboard from './AdminScreen/AdminDashboard/Dashboard'
import HomeScreen from './Screens/homeScreen/HomeScreen';
import LikedVideos from './Screens/LikedVideos/LikedVideo'
import UserLogin from './Screens/UserLogin/Login'
import "./_app.scss"
import SignUp from './components/Signup/Signup';
import VideoUpload from './Screens/VideoUpload/VideoUpload';
import Profile from './Screens/Profile/Profile';

function App() {

  
  return (
    <>
        <Routes>
             <Route path='/'  element={<HomeScreen /> } />
             <Route path='/LikedVideo'  element={<LikedVideos /> } />
             <Route path='/admin/login'  element={<LoginScreen /> } />
             <Route path='/admin'  element={<Dashboard /> } />
             <Route path='/login'  element={<UserLogin /> } />
             <Route path='/signup'  element={<SignUp /> } />
             <Route path='/upload'  element={<VideoUpload /> } />
             <Route path='/profile'  element={<Profile /> } />
              
        
        </Routes>
    </>
  )
}

export default App;
