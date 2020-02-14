import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import './Video.scss';



function Video(props){
    let year = new Date(props.mainVideo.timestamp).getFullYear();
    let month = new Date(props.mainVideo.timestamp).getMonth();    
    let day = new Date(props.mainVideo.timestamp).getDate();
    return (
        <section className="video">
            <VideoPlayer video={props.mainVideo} />
            <div className="video__details">
                <h2 className="video__title">{props.mainVideo.title}</h2>
                <div className="video__details--flex">
                    <p className="video__channel"><strong>{props.mainVideo.channel}</strong></p>
                    <span className="video__timestamp">{`${month}/${day}/${year}`}</span>
                </div>  
                <div className="video__stats-container">
                    <span className="video__stats">
                        <img className="video__stat-icon" src={views} alt="views icon"/>
                        <span className="video__stat-value"> {props.mainVideo.views} </span>
                    </span>
                    <span className="video__stats">
                        <img className="video__stat-icon" src={likes} alt="likes icon"/>
                        <span className="video__stat-value"> {props.mainVideo.likes} </span>
                    </span>
                </div>
                <hr />
                <p className="video__description"> {props.mainVideo.description} </p>
            </div>
        </section>
    );
}

export default Video;