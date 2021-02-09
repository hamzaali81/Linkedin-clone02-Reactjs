import { Avatar } from '@material-ui/core';
import React from 'react'
import './headerOption.css';


export default function HeaderOption({avatar ,Icon, title}) {
    // console.log(props);
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && (
                <Avatar className="headerOption__icon" src={avatar}/>
            )}
        
        <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}