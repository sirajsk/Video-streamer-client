
import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../../_app.scss'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    // MdSentimentDissatisfied,
 } from "react-icons/md"
export default function AdminSidebar({ sidebar, handleToggleSidebar }) {
   const Navigate=useNavigate()
  return (

    <nav
    className={sidebar ? "sidebar open" : "sidebar"}
    onClick={() => handleToggleSidebar(false)}>
    <li onClick={()=>Navigate('/')}>
       <MdHome size={23} />
       <span>Home</span>
    </li>
    <li>
       <MdSubscriptions size={23} />
       <span>Subscriptions</span>
    </li>

    <li onClick={()=>Navigate('/LikedVideo')}>
       <MdThumbUp size={23} />
       <span>Liked Videos</span>
    </li>

    <li>
       <MdHistory size={23} />
       <span>History</span>
    </li>

    <li>
       <MdLibraryBooks size={23} />
       <span>Library</span>
    </li>
    {/* <li>
       <MdSentimentDissatisfied size={23} />
       <span>I don't Know</span>
    </li> */}

    <hr />

    <li>
       <MdExitToApp size={23} />
       <span>Log Out</span>
    </li>

    <hr />
 </nav>
      )
}
