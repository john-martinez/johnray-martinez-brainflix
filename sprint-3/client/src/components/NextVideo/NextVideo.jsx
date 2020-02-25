import React from 'react';
import './NextVideo.scss'

function NextVideo(props){
    return(
        <div className="next-video">
            <div className="next-video__left">
                <img className="next-video__image" src={props.image.image} alt={props.image.title}  />
            </div>
            <div className="next-video__right">
                <strong>{props.image.title}</strong>    
                <p>{props.image.channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;