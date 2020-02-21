import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import axios from 'axios';
import './Video.scss';

const API_KEY = '?api_key=14730dbf-fa5a-4549-af89-30a311f43d00';
const LINK = 'https://project-2-api.herokuapp.com';
const PATH = '/videos';

class Video extends Component {
    state = { mainVideo: {}, nextVideosList: {} }

    componentDidMount() {
        let nextVideosListContainer = [];
        let { videoId } = this.props.match.params;
        axios.get(`${LINK}${PATH}${API_KEY}`) // fetch the nextVideoList
        .then(nextVideosList=>nextVideosListContainer=nextVideosList.data) // place the nextVideoList in a container
        .then(nextVideosListContainer=>axios.get(`${LINK}${PATH}/${videoId ? videoId : nextVideosListContainer[0].id}${API_KEY}`)) 
        .then(res=>this.setState({mainVideo: res.data, nextVideosList: nextVideosListContainer}))
        .catch(err=>console.log(err));
    }

    componentDidUpdate(_, prevState){
        if (this.props.match.params.videoId && 
            this.props.match.params.videoId !== this.state.mainVideo.id){ // DO NOT RENDER IF THE MAINVIDEO ID is equal to :VIDEOID in the url to prevent eternal loop of state change
            document.querySelector('.video-player').scrollIntoView();
            axios.get(`${LINK}${PATH}/${this.props.match.params.videoId}${API_KEY}`)
            .then(res=>this.setState({mainVideo: res.data}))
            .catch(err=>console.log(err))
        } 
    }

    getFormData = e => {
        axios.post(`https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}/comments?api_key=14730dbf-fa5a-4549-af89-30a311f43d00`, {
            name: 'BrainStation Guy', 
            comment: e.target.comment.value
        })
        .then(res=>axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}?api_key=14730dbf-fa5a-4549-af89-30a311f43d00`))
        .then(res=>this.setState({mainVideo: res.data}))
        .catch(err=>console.log(err));
    }
    render() {
        if (Object.entries(this.state.mainVideo).length){ // check if object is not empty
            let year = new Date(this.state.mainVideo.timestamp).getFullYear();
            let month = new Date(this.state.mainVideo.timestamp).getMonth();    
            let day = new Date(this.state.mainVideo.timestamp).getDate();
            return (
                <section className="video">
                    <VideoPlayer video={this.state.mainVideo} mainVideoUrl={this.state.mainVideoUrl}/>
                    <div className="video__main-container">
                        <div className="video__details">
                            <h2 className="video__title">{this.state.mainVideo.title}</h2>
                            <div className="video__blurb">
                                <div className="video__details--flex">
                                    <span className="video__channel"><strong>{this.state.mainVideo.channel}</strong></span>
                                    <span className="video__timestamp">{`${month}/${day}/${year}`}</span>
                                </div>  
                                <div className="video__stats-container">
                                    <span className="video__stats">
                                        <img className="video__stat-icon" src={views} alt="views icon"/>
                                        <span className="video__stat-value"> {this.state.mainVideo.views} </span>
                                    </span>
                                    <span className="video__stats">
                                        <img className="video__stat-icon" src={likes} alt="likes icon"/>
                                        <span className="video__stat-value"> {this.state.mainVideo.likes} </span>
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <p className="video__description"> {this.state.mainVideo.description} </p>
                            <CommentSection comments={this.state.mainVideo.comments} getFormData={this.getFormData}/>
                        </div>
                        <NextVideoList match={this.props.match} nextVideoList={this.state.nextVideosList} mainVideoId={this.state.mainVideo.id} />
                    </div>
                </section>
            );
        }
        else {
            return (
                <h2>LOADING ASSETS</h2>
            )
        }
    }
}

export default Video;