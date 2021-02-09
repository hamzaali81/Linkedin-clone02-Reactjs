import React from "react";
import './header.css';

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from '@material-ui/icons/Notifications';


import LinkedInLogo from '../../Images/linkedin.svg' 
import HeaderOption from "../HeaderOption/HeaderOption";


export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedInLogo} alt="Linkedin-logo" />
        <div className="header__search">

        <SearchIcon />
        <input type="text" />

        </div>
      </div>
       <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQE2DA2_TxWEmQ/profile-displayphoto-shrink_100_100/0/1571623496485?e=1618444800&v=beta&t=66QE6bp7Kb9XD_xkh1-Jr_vsYCcMFQFAQzIqk0S3CC8" title="me"/>
       </div>
    </div>
  );
}
