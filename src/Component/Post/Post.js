import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';

import InputOption from './../InputOption/inputOption';
import './post.css';

export default function Post({name, description, message , photoUrl}) {
 
    return (
        <div className="post">
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>Hamza Ali</h2>
                <p>Description</p>
                Post
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>
    <div className="post__buttons">
     <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
     <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
     <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
     <InputOption Icon={SendOutlined} title="Send" color="gray"/>
    </div>
        </div>
    )
}
