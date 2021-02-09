import React from 'react';
import './sidebar.css';
import { Avatar } from '@material-ui/core';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Hamza Ali</h2>
                <h4>hamza54834@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                 <div className="sidebar__stat">
                     <p>Who viewed you</p>
                     <p className="sidebar__statNumber">2,543</p>
                 </div>

                 <div className="sidebar__stat">
                     <p>Viewes on post</p>
                     <p className="sidebar__statNumber">2,448</p>
                 </div>

            </div>

            <div className="sidebar__bottom">
              <p>Recent</p>
            </div>
        </div>
    )
}
