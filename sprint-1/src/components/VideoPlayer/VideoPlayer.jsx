import React from 'react';
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
// import scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
function VideoPlayer(props){
    // todos: add setTimeout to add delay to the controls when transitioning to hidden again *** FIXED ***
    // add icon in the middle to see what is the playState of the video *** FIXED ***
    // controls should autohide after 3 secs after mouse stops moving *** FIXED ***
    // fix the bug where pressing spacebar while in input texts changes the playState *** FIXED ***
    // fix the bug where playState changes even when clicking full screen buttons or volume *** FIXED ***
    // fix duration of video
    
    // EVENT LISTENER TO CHANGE ICON WHEN PRESSING SPACEBAR OR WHEN CLICKING THE VIDEO OR THE PLAY/PAUSE BUTTON
    let playState = "paused";
    let timeoutId = 0;
    let timeoutId2 = 0;
    const changeIcon = e => {
        let playButton = document.querySelector('.video-player__play-button');
        let middleIcon = document.querySelector('.video-player__middle-icon');
        e.stopPropagation();
        if (e.target === playButton ||
            e.target === middleIcon || 
            e.target.classList[0] === 'video-player__video' || 
            (e.code === 'Space' && document.activeElement.localName !== "input" && document.activeElement.localName !== "textarea")){
            if (playState === "paused") {
                playState = "play";
                playButton.src = pause;
                middleIcon.src = pause;
            } else {
                playState = "paused";
                playButton.src = play;
                middleIcon.src = play;
            }
            clearTimeout(timeoutId2);
            middleIcon.classList.add('visible');
            timeoutId2 = setTimeout(()=>{
                middleIcon.classList.remove('visible'); 
                timeoutId2 = 0;
            },400)
        }
    }

    // callback that changes the playState to pause or play when pressing spacebar  (for now just changes icon)
    document.addEventListener("keypress", e=>{
        if (e.keyCode === 32 && e.target === document.body)
            e.preventDefault(); // to prevent spacebar from scrolling the page
            changeIcon(e);
    }) 

    // callback that shows video controls briefly upon mousemove on video-player
    const showControls = e => {
        clearTimeout(timeoutId);
        let controls = document.querySelector('.video-player__controls');
        controls.classList.add('visible');
        timeoutId = setTimeout(()=>{
            controls.classList.remove('visible');
            timeoutId = 0;
        },2000);
    }

    // const fullScreenVideo = e => document.querySelector('.video-player__video').requestFullscreen(); // Need more research for this, generates default controls

    return(
        <div className="video-player" onClick={changeIcon} onMouseMove={showControls} >
            <video className="video-player__video" poster={props.video.image} ></video>
            <div className="video-player__controls">
                <img alt="play button" onClick={changeIcon} src={play} className="video-player__play-button" /> 
                <div className="video-player__scrubber-bar"> 
                    <div className="video-player__scrubber-line"> </div>
                    <span className="video-player__time-left"> 0:00/{`0:${props.video.duration/1000}`} </span>
                </div>
                <div className="video-player__side">
                    <img alt="fullscreen button" src={fullscreen} className="video-player__fullscreen" /> 
                    <img alt="volume" src={volume} className="video-player__volume" /> 
                </div>
            </div>
            <img className="video-player__middle-icon" src={play} onClick={changeIcon} alt="play or pause button"></img>
        </div>
    );
}
export default VideoPlayer; 