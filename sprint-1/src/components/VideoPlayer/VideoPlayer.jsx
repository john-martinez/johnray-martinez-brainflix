import React from 'react';
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
// import scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
function VideoPlayer(props){
    let playState = "paused";
    const changeIcon = e => {
        if (playState === "paused") {
            playState = "play";
            e.target.src = pause;
        } else {
            playState = "paused";
            e.target.src = play;
        }
    }
    return(
        <div className="video-player">
          <video className="video-player__video" poster={props.video.image} ></video>
            <div className="video-player__controls">
                <img alt="play button" onClick={changeIcon} src={play} className="vimgdeo-player__play-button" /> 
                <div className="video-player__scrubber-bar"> 
                    <hr className="video-player__scrubber-line"/>
                </div>
                <div className="video-player__side">
                    <img alt="fullscreen button" src={fullscreen} className="video-player__fullscreen" /> 
                    <img alt="volume" src={volume} className="video-player__volume" /> 
                </div>
            </div>
        </div>
    );
}
export default VideoPlayer; 