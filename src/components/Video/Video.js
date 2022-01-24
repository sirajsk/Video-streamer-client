import React from 'react';
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
export default function Video() {
  return (
    <div className='video'>
    <div className='video__top'>
       <img
          src='https://i.ytimg.com/vi/hB-RwVQYgrw/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLD1d0bA6FDWzIae7Z4Vv_nzVa8eUw'
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
