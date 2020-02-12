import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer(props){
    return(
        <div className="video-player">
            <video className="video-player__video" controls src={props.link}></video>
        </div>
    );
}
export default VideoPlayer;