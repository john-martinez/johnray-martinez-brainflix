import React from 'react';
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
// import scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
function VideoPlayer(props){
    // todos: add setTimeout to add delay to the controls when transitioning to hidden again
    // add icon in the middle to see what is the playState of the video
    // controls should autohide after 3 secs after mouse stops moving when in full screen mode
    // fix the bug where pressing spacebar while in input texts changes the playState
    // fix the bug where playState changes even when clicking full screen buttons or volume *** FIXED ***

    // EVENT LISTENER TO CHANGE ICON WHEN PRESSING SPACEBAR OR WHEN CLICKING THE VIDEO OR THE PLAY/PAUSE BUTTON
    let playState = "paused";
    const changeIcon = e => {
        e.stopPropagation();
        if (e.target.classList[0] === 'video-player__play-button' || e.target.classList[0] === 'video-player__video' || e.code === 'Space'){
            let playButton = document.querySelector('.video-player__play-button');
            if (playState === "paused") {
                playState = "play";
                playButton.src = pause;
            } else {
                playState = "paused";
                playButton.src = play;
            }
        }
    }
    document.addEventListener("keypress", e=>{
        if (e.keyCode === 32 && e.target === document.body)
            e.preventDefault(); // to prevent spacebar from scrolling the page
            changeIcon(e);
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