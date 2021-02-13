import React from 'react';
import './widget.css';
import InfoIcon from 'material-ui/icons/Infos';
import { FiberManualRecord } from '@material-ui/icons';

function widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">

                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )
    
    
    
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('React new version launch')}
            {newsArticle('AI diminant in world new order')}
            {newsArticle('React new version launch')}
            {newsArticle('React new version launch')}
            {newsArticle('React new version launch')}
        </div>
    )
}

export default widget
