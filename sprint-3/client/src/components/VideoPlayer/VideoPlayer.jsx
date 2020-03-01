import React, { Component } from 'react';
import './VideoPlayer.scss';
import play from '../../assets/icons/SVG/Icon-play.svg';
import pause from '../../assets/icons/SVG/Icon-pause.svg';
import volume from '../../assets/icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/icons/SVG/Icon-fullscreen.svg';
class VideoPlayer extends Component {  
    // EVENT LISTENER TO CHANGE ICON WHEN PRESSING SPACEBAR OR WHEN CLICKING THE VIDEO OR THE PLAY/PAUSE BUTTON
    state = { isPlaying: false, currentTime: 0, isMuted: false } 
    timeoutId = 0;
    timeoutId2 = 0;
    intervalId = 0;
    stillMounted = false; 
    duration = this.props.video.duration.split(":");
    totalDuration = ((this.duration[0] * 60) + parseInt(this.duration[1])); 
    changeIcon = e => {
        let playButton = this.refs.playButton;
        let middleIcon = this.refs.middleButton;
        e.stopPropagation();
        if (e.target === playButton 
            || e.target === middleIcon 
            || e.target.classList[0] === 'video-player__video' 
            || (e.code === 'Space' && document.activeElement.localName !== "input" && document.activeElement.localName !== "textarea")){
            if (this.stillMounted) {
                this.setState({isPlaying: !this.state.isPlaying, currentTime: this.refs.duration.value});
            }
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
        let controls = this.refs.videoControls; 
        controls.classList.add('visible');
        this.timeoutId = setTimeout(()=>{
            controls.classList.remove('visible');
            this.timeoutId = 0;
        },2000);
    }

    fullScreenVideo = e => this.refs.mainView.requestFullscreen(); // Need more research for this, doesnt show custom controls
    onChangeHandler = e => { this.setState({currentTime: e.target.value }) }

    ticker = () => {     
        let seconds = this.state.currentTime;
        let minutes = Math.floor(this.state.currentTime/60);
        let subtractor = 0;
        subtractor = ((Math.floor(seconds/60)) * 60);
        seconds = seconds-subtractor;
        if (minutes <= 9) 
            minutes = `0${minutes}`;
        if (seconds <= 9)
            seconds = `0${seconds}`;

        return minutes + ':' + seconds;
    }
    componentDidMount(){
        // callback that changes the playState to pause or play when pressing spacebar  (for now just changes icon)
        this.stillMounted = true;
        document.addEventListener("keypress", e=>{
            if (e.keyCode === 32 && e.target === document.body){
                e.preventDefault(); // to prevent spacebar from scrolling the page
                this.changeIcon(e);
            }
        }) 
    }

    componentDidUpdate(){ 
        this.refs.mainView.muted = this.state.isMuted ? true : false;
        if (this.state.isPlaying) {
            clearInterval(this.intervalId);
            this.refs.mainView.play() 
            this.intervalId = setInterval(()=>this.setState({currentTime: parseInt(this.state.currentTime) + 1}), 1000);
        } else{
            this.refs.mainView.pause();
            clearInterval(this.intervalId);
        }   
        if (this.state.currentTime === this.totalDuration ) {
            this.setState({ isPlaying: false, currentTime: 0 })
        }
    }
    componentWillUnmount(){ this.stillMounted = false }

    videoPauseHandler = () => this.setState({ isMuted: !this.state.isMuted })
    render(){
        // get duration in seconds for max value for range
        return(
            <div className="video-player" onClick={this.changeIcon}  >
                <video className="video-player__video" poster={this.props.video.image} onMouseMove={this.showControls} ref="mainView" src={`${this.props.video.video}?api_key=14730dbf-fa5a-4549-af89-30a311f43d00`}></video>
                <div className="video-player__controls" ref="videoControls">
                    <img alt="play button" onClick={this.changeIcon} src={this.state.isPlaying ? pause : play} className="video-player__play-button" ref="playButton" /> 
                    <div className="video-player__scrubber-bar"> 
                        <input type="range" className="video-player__scrubber-line" ref="duration" value={this.state.currentTime} min="0" max={this.totalDuration} onChange={this.onChangeHandler}/>
                        <span className="video-player__time-left"> {`${this.ticker()}/${this.props.video.duration}`} </span>
                    </div>
                    <div className="video-player__side">
                        <img alt="fullscreen button" src={fullscreen} onClick={this.fullScreenVideo} className="video-player__fullscreen" /> 
                        <img alt="volume" src={volume} className="video-player__volume" onClick={this.videoPauseHandler}/> 
                    </div>
                </div>
                <img className="video-player__middle-icon" src={this.state.isPlaying ? play : pause} onClick={this.changeIcon} alt="play or pause button" ref="middleButton"></img>
            </div>
        );
        
    }
}
export default VideoPlayer; 