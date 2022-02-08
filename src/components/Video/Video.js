import React from 'react';
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
export default function Video() {
  return (
    <div className='video'>
    <div className='video__top'>
       <img
          src='https://i.ytimg.com/vi/uc3vwpNM-aQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0V1VuAZrHPekKxJgYNNKOt8p8vA'
          alt=''
       />
       <span>05:43</span>
    </div>
    <div className='video__title'>
       Mental Agility Music #made by Chintu
    </div>
    <div className='video__details'>
       <span>
          <AiFillEye /> 5m Views •
       </span>
       <span>5 days ago</span>
    </div>
    <div className='video__channel'>
       <img
          src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
          alt=''
       />
       <p>Siraj Sk</p>
    </div>
 </div>
  )
}
