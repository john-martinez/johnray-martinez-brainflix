import React from 'react';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import link from '../../assets/Video/BrainStation Sample Video.mp4';


function Video(){
    return (
        <section className="video">
            <VideoPlayer link={link} />
            <h2 className="video__title">BMX Rampage: 2018 Highlights</h2>
            <span><strong>By Red Cow</strong></span>
            <span>12/18/2018</span>
            <div className="video__stats">
                <span className="video__views">
                    <img src={views} alt="views icon"/>
                    1,001,023
                </span>
                <span className="video__likes">
                    <img src={likes} alt="views icon"/>
                    110,985
                </span>
            </div>
            <p className="video__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
            </p>
        </section>
    );
}

export default Video;