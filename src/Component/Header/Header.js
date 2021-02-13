import React from "react";
import './header.css';

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch,useSelector } from "react-redux";
import { logout,selectUser } from "../../features/userSlice";
import LinkedInLogo from '../../Images/linkedin.svg' 
import HeaderOption from "../HeaderOption/HeaderOption";
import { auth } from "../../firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = ()=>{
  dispatch(logout());
  auth.signOut();
  }


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
        <HeaderOption 
        // avatar={user.photoUrl}
        avatar={true} 
        title="me"
        onClick={logoutOfApp}
        />
       </div>
    </div>
  );
}
