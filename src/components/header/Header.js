import React from 'react';
import './_header.scss'
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdInput } from "react-icons/md"
import {useNavigate} from 'react-router-dom'

export default function Header({ handleToggleSidebar }) {
    const Navigate= useNavigate()
    return <div className="header">
        <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
        />

        <div
           
            className="header__logo"
        ><h1 onClick={()=>Navigate('/')}>SK</h1></div>

        <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
                <AiOutlineSearch size={22} />
            </button>
        </form>

        <div className="header__icons" style={{marginLeft:20}}>
            <MdNotifications size={28} />
            {/* <MdApps size={28} /> */}
            <MdInput size={29} onClick={()=>Navigate('/videoPlay')}/>
            <img 
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt="avatar"
            />
        </div>
    </div>
}
