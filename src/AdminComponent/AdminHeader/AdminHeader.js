import React from 'react';
import '../../AdminComponent/AdminHeader/AdminHeader.scss'
import { FaBars } from "react-icons/fa"
import { MdInput } from "react-icons/md"
import { useNavigate } from 'react-router-dom'


// import "../../_app.scss"


export default function AdminHeader({ handleToggleSidebar }) { 
    
    const Navigate = useNavigate()
    return <div className="headerr">
        <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
        />

        <div

            className="header__logo"
        ><h1 onClick={() => Navigate('/admin')}>SK</h1></div>
        <div className="header__icons" style={{ marginLeft: 20 }}>
            <MdInput size={29} onClick={() => Navigate('/admin/login')} />
            
            
            <img
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt="avatar"
            />
        </div>
    </div>
}
