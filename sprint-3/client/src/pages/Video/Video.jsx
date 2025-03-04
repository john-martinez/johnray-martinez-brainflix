import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import PacmanLoader from "react-spinners/PacmanLoader";
import views from '../../assets/icons/SVG/Icon-views.svg';
import likes from '../../assets/icons/SVG/Icon-likes.svg';
import axios from 'axios';
import './Video.scss';

// const API_KEY = '?api_key=14730dbf-fa5a-4549-af89-30a311f43d00';
const LINK = 'http://localhost:8080';
const PATH = '/videos';

class Video extends Component {
    state = { mainVideo: {}, nextVideosList: {} }
    stillMounted = false; // flag to check later if component is still mounted. If false, promise will not execute setState which will prevent memory leak bugz
    timer = 0;
    // initialize state after rendering
    componentDidMount() {
        let { videoId } = this.props.match.params;
        this.stillMounted = true;
        let nextVideosListContainer = [];
        axios.get(`${LINK}${PATH}`) // fetch the nextVideoList
        .then(nextVideosList=>nextVideosListContainer=nextVideosList.data) // place the nextVideoList in a container
        .then(nextVideosListContainer=>axios.get(`${LINK}${PATH}/${!videoId ? nextVideosListContainer[0].id : videoId}`)) 
        .then(res=>this.stillMounted ? this.setState({mainVideo: res.data, nextVideosList: nextVideosListContainer}) : '')
        .catch(err=>this.props.history.push('/404/')); //goes to not found;
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.mainVideo.id) {
            if (this.props.match.path === '/' && 
                this.state.mainVideo.id !== this.state.nextVideosList[0].id) {
                this.getRequest(this.state.nextVideosList[0].id);
            } else this.changeMainVideo(); // changes mainVideoState when 

        }
    }
    componentWillUnmount(){ this.stillMounted = false }

    getRequest = id => {
        this.mainVid && this.mainVid.scrollIntoView();
        axios.get(`${LINK}${PATH}/${id}`)
        .then(res=>this.stillMounted ? this.setState({mainVideo: res.data}) : '')
        .catch(err=>this.props.history.push('/404/'))
    }
    changeMainVideo(){
        if (this.props.match.params.videoId && 
            this.props.match.params.videoId !== this.state.mainVideo.id){ // DO NOT RENDER IF THE MAINVIDEO ID is equal to :VIDEOID in the url to prevent eternal loop of state change
            this.getRequest(this.props.match.params.videoId);
            this.refs.mainVideo.scrollIntoView();
        } 
    }
    getFormData = data => {
        axios.post(`${LINK}${PATH}/${this.state.mainVideo.id}/comments`, {
            name: 'BrainStation Guy', 
            comment: data
        })
        .then(res=>axios.get(`${LINK}${PATH}/${this.state.mainVideo.id}`))
        .then(res=>this.stillMounted ? this.setState({mainVideo: res.data}) : '')
        .catch(err=>console.log(err));
    }
    
    deleteComment = id => {
        axios.delete(`${LINK}${PATH}/${this.state.mainVideo.id}/comments/${id}`)
        .then(res=>this.getRequest(this.state.mainVideo.id))
        .catch(err => console.log(err))
    }

    incrementLike = e => {
        let likes = this.refs.likesCounter.innerText;
        likes = likes.split(',');
        likes.reverse();
        for (let i = 0; i < likes.length; i++){
            if(parseInt(likes[i]) === 999) {
                likes[i] = "0";
            } else {
                likes[i] = parseInt(likes[i])+1 + '';
                break;
            }
        }
        likes.reverse();
        axios.put(`${LINK}${PATH}/${this.state.mainVideo.id}`, { likes: likes.join(",") })
        .then(res=>this.getRequest(this.state.mainVideo.id))
        .catch(err => console.log(err))
    }
    render() {
        if (this.state.mainVideo.id){ // check if state is not empty
            let year = new Date(this.state.mainVideo.timestamp).getFullYear();
            let month = new Date(this.state.mainVideo.timestamp).getMonth();    
            let day = new Date(this.state.mainVideo.timestamp).getDate();
            
            return (
                <section className="video" ref="mainVideo">
                    <VideoPlayer video={this.state.mainVideo} mainVideoUrl={this.state.mainVideoUrl} />
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
                                        <span className="video__stat-value" > {this.state.mainVideo.views} </span>
                                    </span>
                                    <span className="video__stats" onClick={this.incrementLike}>
                                        <img className="video__stat-icon" src={likes} alt="likes icon"/>
                                        <span className="video__stat-value" ref="likesCounter"> {this.state.mainVideo.likes} </span>
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <p className="video__description"> {this.state.mainVideo.description} </p>
                            <CommentSection comments={this.state.mainVideo.comments} getFormData={this.getFormData} deleteComment={this.deleteComment} />
                        </div>
                        <NextVideoList match={this.props.match} nextVideoList={this.state.nextVideosList} mainVideoId={this.state.mainVideo.id} />
                    </div>
                </section>
            );
        }
        else {
            return (
                <div className="pacman-loader">
                    <PacmanLoader size={40} color={"#323232"} />
                    <h1 className="pacman-loader-text">LOADING</h1>
                </div>
            )
        }
    }
}

export default Video;