
import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../../_app.scss'
import '../../AdminComponent/AdminSidebar/AdminSidebar.scss'
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
    className={sidebar ? "sidebarr open" : "sidebarr"}
    onClick={() => handleToggleSidebar(false)}>
       <div style={{marginTop:50}}> 

    <li onClick={()=>Navigate('/admin')}>
       <MdHome size={23} />
       <span>Dashboard</span>
    </li>
    <li>
       <MdSubscriptions size={23} />
       <span>Users</span>
    </li>

    <li onClick={()=>Navigate('/admin')}>
       <MdThumbUp size={23} />
       <span>Prime Management</span>
    </li>

    <li>
       <MdHistory size={23} />
       <span>Add Section</span>
    </li>

    <li>
       <MdLibraryBooks size={23} />
       <span>Report</span>
    </li>
   
    

    <hr />

    <li>
       <MdExitToApp size={23} />
       <span>Log Out</span>
    </li>

    <hr />
       </div>
 </nav>
      )
}
