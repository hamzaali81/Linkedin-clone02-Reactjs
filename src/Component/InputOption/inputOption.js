import React from 'react';
import './inputOption.css';

export default function inputOption({Icon, title, color}) {
    // console.log(props);
    return (
         <div className="inputOption">
             <Icon style={{ color: color }} />
             <h4>{title}</h4>
         </div>
    )
}
