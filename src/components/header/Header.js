import React, { useState,useEffect } from 'react';
import './_header.scss'
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications,MdUploadFile } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header({ handleToggleSidebar }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Navigate = useNavigate()
    useEffect(() => {
   
      return () => {
      
      };
    }, [Navigate]);
    
    return <div className="header">
        <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
        />

        <div

            className="header__logo"
        ><h2 onClick={() => Navigate('/')} style={{color:"red"}}>Tube</h2></div>

        <form> 
            <input type="text" placeholder="Search" />
            <button type="submit">
                <AiOutlineSearch size={22} />
            </button>
        </form>

        <div className="header__icons" style={{ marginLeft: 20 }}>
            <MdNotifications size={28} />
            <MdUploadFile size={29} onClick={() => Navigate('/upload')} />
            <img
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt="avatar"
                onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <MenuItem onClick={()=>{handleClose();Navigate('/profile');}}> Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={()=>{handleClose();Navigate('/login');}}>Login</MenuItem>
               
            </Menu>
        </div>
    </div>
}
