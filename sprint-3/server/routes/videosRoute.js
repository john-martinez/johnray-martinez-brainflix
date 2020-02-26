const express = require('express');
const uuid = require('uuid/v1');
const nextVideos = require('../data/nextVideos.json');
const mainVideos = require('../data/mainVideos.json');
const router = express.Router();

const retrieveMainVideo = id => mainVideos.find(item=>item.id === id);
const getAllVideos = (req,res) => res.send(nextVideos);
const getOneVideo = (req,res) => res.send(retrieveMainVideo(req.params.videoId));
const postComment = (req,res) => {
    const mainVideo = retrieveMainVideo(req.params.videoId);
    const { name, comment } = req.body;
    const newComment = {
        id: uuid(),
        likes: 0,
        name,
        comment,
        timestamp: Date.now()
    }
    mainVideo.comments.push(newComment);
    res.send(newComment);
}

const deleteComment = (req,res) => {
    const { videoId, commentId } = req.params;
    const video = mainVideos.find(item=>item.id === videoId);
    const newComments = video.comments.filter(item=>item.id !== commentId);
    video.comments = newComments;
    res.send('deleted');
}

const incrementLikes = (req,res)=>{
    const mainVideoLikes = retrieveMainVideo(req.params.videoId).likes = req.body.likes;
    res.send({likes: mainVideoLikes})
}

const uploadVideo = (req,res)=>{
    const { title, channel, image } = req.body;
    const newVideo = {
        id: uuid(),
        title, 
        channel,
        image
    }
    nextVideos.push(newVideo);
    res.send(newVideo);
}

router
    .get ('/', getAllVideos)
    .post('/', uploadVideo)
    .get ('/:videoId', getOneVideo)
    .put ('/:videoId', incrementLikes)
    .post('/:videoId/comments', postComment)
    .delete('/:videoId/comments/:commentId', deleteComment)

module.exports = router;