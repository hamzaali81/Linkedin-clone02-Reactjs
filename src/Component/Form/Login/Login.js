import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const loginToApp = (e)=> {
        e.preventDefault();
    };

    const register = () => {
    
    };

    return (
        <div className="login">
            <img src="https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png" style={{width: '300px', height: '150px'}} alt="" srcset=""/>
 
           <form>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input type="text"placeholder="Profile pic URL (optional)"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder="Email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button type="submit" onclick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
