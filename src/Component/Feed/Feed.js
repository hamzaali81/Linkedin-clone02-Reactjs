import React,{ useState, useEffect } from "react";
import "./feed.css";
import InputOption from '../InputOption/inputOption';
import Post from './../Post/Post';
import { useSelector } from "react-redux";
import { selectUser } from '../../features/userSlice';

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db,storage } from "./../../firebase";
import firebase from 'firebase';
import FlipMove from "react-flip-move";


export default function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
  db.collection("posts")
  .orderBy("timestamp","desc")
  .onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => (
      {
        id: doc.id,
        data: doc.data()
      }
    )))
  )
  }, [])
  
  const sendPost = (e)=> {
  e.preventDefault();
  console.log(e);

  db.collection("posts").add({
    name: user.displayName,
    description: user.email,
    message: input,
    photoUrl: user.photoUrl || '',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
             <InputOption Icon={ImageIcon} title="Photo" color="#7005F9"/>
             <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
             <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
             <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
      </div>
    </div>
   
   {/* {Post} */}
   {/* {
     posts.map(({id, data: {name, description, message, photoUrl}})=> (
     <Post 
     key={id}
     name={name}
     description={description}
     message={message}
     photoUrl={photoUrl}
      />
     ))} */}
 <FlipMove>
 {
     posts.map(({id, data: {name, description, message, photoUrl}})=> (
     <Post 
     key={id}
     name={name}
     description={description}
     message={message}
     photoUrl={photoUrl}
      />
     ))}
 </FlipMove>

   {/* <Post 
   name="Hamza Ali" 
   description="This is a test" 
   photoUrl="" 
   message="Wow is worked!!"/> */}
    </div>
  );
}

