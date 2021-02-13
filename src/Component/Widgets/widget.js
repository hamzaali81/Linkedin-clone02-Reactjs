import React from 'react';
import './widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
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
            {newsArticle('Blockchain side effects in new traders.')}
            {newsArticle('Reactnative vs flutter')}
            {newsArticle('React vs Angular vs Vue = nodejs vs deno vs django')}
        </div>
    )
}

export default Widgets;

