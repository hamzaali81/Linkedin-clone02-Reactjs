import { Avatar } from '@material-ui/core';
import React from 'react'
import { selectUser } from '../../features/userSlice';
import './headerOption.css';
import { useSelector } from "react-redux";

export default function HeaderOption({avatar ,Icon, title, onClick}) {
    // console.log(props);
    const user = useSelector(selectUser);
    
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className='headerOption__icon'/>}
            {/* {avatar && ( */}
                {/* <Avatar className="headerOption__icon" src={user?.email}>{user?.email[0]}</Avatar> */}
                <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>

            {/* )} */}
        
        <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}
