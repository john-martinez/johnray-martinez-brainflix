import React from 'react';
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';

function VideoPlayer(props){
    return(
        <div className="video-player">
            <video className="video-player__video" poster={props.video.image} ></video>
            <div class="video-player__controls">
                <img src={play} alt="play button" className="video-player__play-button" />
                {/* <img src={play} alt="pause button" className="video-player__pause-button" /> */}
            </div>
        </div>
    );
}
export default VideoPlayer; 