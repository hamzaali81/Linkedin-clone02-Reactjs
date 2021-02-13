import React,{useEffect } from 'react';
import Header from './Component/Header/Header';
import SideBar from "./Component/Sidebar/Sidebar";
import Feed from "./Component/Feed/Feed";
import Login from './Component/Form/Login/Login';
import './App.css';
import { auth } from './firebase';
import { login,logout,selectUser } from './features/userSlice';
import { useSelector,useDispatch } from "react-redux";

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  //persisted authentication
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
   // user is logged
   dispatch(login({
    email: userAuth.email,
    uid: userAuth.uid,
    displayName: userAuth.displayName,
    photoURL: userAuth.profilePic,
   }))

    } else {
      // User is signed out
      dispatch(logout(userAuth))
    }
  });
}, []);

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
