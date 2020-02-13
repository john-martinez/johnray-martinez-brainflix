import React from 'react';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import VideoPlayer from '../VideoPlayer/VideoPlayer';


function Video(props){
    let year = new Date(props.mainVideo.timestamp).getFullYear();
    let month = new Date(props.mainVideo.timestamp).getMonth();    
    let day = new Date(props.mainVideo.timestamp).getDate();
    return (
        <section className="video">
            <VideoPlayer video={props.mainVideo} />
            <h2 className="video__title">{props.mainVideo.title}</h2>
            <span><strong>{props.mainVideo.channel}</strong></span>
            <span>{`${month}/${day}/${year}`}</span>
            <div className="video__stats">
                <span className="video__views">
                    <img src={views} alt="views icon"/>
                    {props.mainVideo.views}
                </span>
                <span className="video__likes">
                    <img src={likes} alt="likes icon"/>
                    {props.mainVideo.likes}
                </span>
            </div>
            <p className="video__description"> {props.mainVideo.description}
            </p>
        </section>
    );
}

export default Video;