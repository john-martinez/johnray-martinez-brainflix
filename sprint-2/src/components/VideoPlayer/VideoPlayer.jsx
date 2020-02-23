import React, { Component } from 'react';
import './VideoPlayer.scss';
import play from '../../assets/icons/SVG/Icon-play.svg';
// import scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import pause from '../../assets/icons/SVG/Icon-pause.svg';
import volume from '../../assets/icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/icons/SVG/Icon-fullscreen.svg';
class VideoPlayer extends Component {
    // todos: add setTimeout to add delay to the controls when transitioning to hidden again *** FIXED ***
    // add icon in the middle to see what is the playState of the video *** FIXED ***
    // controls should autohide after 3 secs after mouse stops moving *** FIXED ***
    // fix the bug where pressing spacebar while in input texts changes the playState *** FIXED ***
    // fix the bug where playState changes even when clicking full screen buttons or volume *** FIXED ***
    // fix duration of video  *** FIXED ***
    // change play/pause functionality to state based behavior
    
    // EVENT LISTENER TO CHANGE ICON WHEN PRESSING SPACEBAR OR WHEN CLICKING THE VIDEO OR THE PLAY/PAUSE BUTTON
    state = { isPlaying: false } 
    timeoutId = 0;
    timeoutId2 = 0;

    changeIcon = e => {
        let playButton = document.querySelector('.video-player__play-button');
        let middleIcon = document.querySelector('.video-player__middle-icon');
        e.stopPropagation();
        if (e.target === playButton 
            || e.target === middleIcon 
            || e.target.classList[0] === 'video-player__video' 
            || (e.code === 'Space' && document.activeElement.localName !== "input" && document.activeElement.localName !== "textarea")){
            this.setState({isPlaying: !this.state.isPlaying})
            clearTimeout(this.timeoutId2);
            middleIcon.classList.add('visible');
            this.timeoutId2 = setTimeout(()=>{
                middleIcon.classList.remove('visible'); 
                this.timeoutId2 = 0;
            },400)
        }
    }
    // callback that shows video controls briefly upon mousemove on video-player
    showControls = e => {
        clearTimeout(this.timeoutId);
        let controls = document.querySelector('.video-player__controls');
        controls.classList.add('visible');
        this.timeoutId = setTimeout(()=>{
            controls.classList.remove('visible');
            this.timeoutId = 0;
        },2000);
    }

    fullScreenVideo = e => document.querySelector('.video-player__video').requestFullscreen(); // Need more research for this, doesnt show custom controls

    componentDidMount(){
        // callback that changes the playState to pause or play when pressing spacebar  (for now just changes icon)
        document.addEventListener("keypress", e=>{
            if (e.keyCode === 32 && e.target === document.body)
                e.preventDefault(); // to prevent spacebar from scrolling the page
                this.changeIcon(e);
        }) 
    }
    render(){
        return(
            <div className="video-player" onClick={this.changeIcon}  >
                <video className="video-player__video" poster={this.props.video.image} onMouseMove={this.showControls}  ></video>
                <div className="video-player__controls">
                    <img alt="play button" onClick={this.changeIcon} src={this.state.isPlaying ? play : pause} className="video-player__play-button" /> 
                    <div className="video-player__scrubber-bar"> 
                        <div className="video-player__scrubber-line"> </div>
                        <span className="video-player__time-left"> 0:00/{this.props.video.duration} </span>
                    </div>
                    <div className="video-player__side">
                        <img alt="fullscreen button" src={fullscreen} onClick={this.fullScreenVideo} className="video-player__fullscreen" /> 
                        <img alt="volume" src={volume} className="video-player__volume" /> 
                    </div>
                </div>
                <img className="video-player__middle-icon" src={this.state.isPlaying ? play : pause} onClick={this.changeIcon} alt="play or pause button"></img>
            </div>
        );
    }
}
export default VideoPlayer; 