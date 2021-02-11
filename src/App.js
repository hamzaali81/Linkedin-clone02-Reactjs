import React from 'react';
import Header from './Component/Header/Header';
import SideBar from "./Component/Sidebar/Sidebar";
import Feed from "./Component/Feed/Feed";
import Login from './Component/Form/Login';
import './App.css';

import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";

function App() {
const user = useSelector(selectUser);
console.log(user);
  return (
    <div className="app">
    
     {/* Header */}
    <Header />
    {
      !user ? <Login /> :
      //  {/* App Body  */}
     <div className="app__body">
     {/* Sidebar */}
       <SideBar />
     {/* Feed */}
     <Feed />
     {/* Widgets */}
     </div>
    }

    </div>
  );
}

export default App;
