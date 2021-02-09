import React from "react";
import "./feed.css";
import InputOption from '../InputOption/inputOption';

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
             <InputOption Icon={ImageIcon} title="Photo" color="#7005F9"/>
             <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
             <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
             <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
      </div>
    </div>
    </div>
  );
}
