import React from 'react';
import './NextVideo.scss'

function NextVideo(props){
    return(
        <div className="next-video">
            <div className="next-video__left">
                <img class="next-video__image" src={props.image.link} alt={props.image.alt} />
            </div>
            <div className="next-video__right">
                <strong>{props.image.title}</strong>    
                <p>{props.image.author}</p>
            </div>
        </div>
    );
}

export default NextVideo;