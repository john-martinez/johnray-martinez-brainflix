import React from 'react';
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
// import scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
function VideoPlayer(props){
    return(

        //     <div class="video-player__controls">
        //         <img src={play} alt="play button" className="video-player__play-button" />
        //         {/* <img src={scrubber} alt="scrubber control" className="video-player__scrubber-control" /> */}
        //         <div class="video-player__scrubber-bar"> <hr /> </div>
        //         <div> 
        //             <img src={fullscreen} alt="scrubber control" className="video-player__fullscreen-button" />
        //             <img src={volume} alt="scrubber control" className="video-player__volume-button" />
        //         </div>
                
        //         {/* <img src={play} alt="pause button" className="video-player__pause-button" /> */}
        //     </div>
        // </div>
        <div className="video-player">
          <video className="video-player__video" poster={props.video.image} ></video>
            <div className="video-player__controls">
                <img alt="play button" src={play} className="vimgdeo-player__play-button" /> 
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