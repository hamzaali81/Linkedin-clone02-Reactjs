import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, {forwardRef } from 'react';

import InputOption from './../InputOption/inputOption';
import './post.css';

 const Post= forwardRef(({name, description, message , photoUrl}, ref)=> {
 
    return (
        <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoUrl}>name[0]</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
            <p>{description}</p>
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
});
export default Post;