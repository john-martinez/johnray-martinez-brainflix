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
        let playButton = document.querySelector('.video-player__play-button');
        if (playState === "paused") {
            playState = "play";
            playButton.src = pause;
        } else {
            playState = "paused";
            playButton.src = play;
        }
    }
    document.addEventListener("keyup", e=>{
        e.preventDefault();
        e.keyCode === 13 ? changeIcon() : console.log(e.keyCode);
    }) 
    return(
        <div className="video-player" onClick={changeIcon} >
          <video className="video-player__video" poster={props.video.image} ></video>
            <div className="video-player__controls">
                <img alt="play button" onClick={changeIcon} src={play} className="video-player__play-button" /> 
                <div className="video-player__scrubber-bar"> 
                    <div className="video-player__scrubber-line"> </div>
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