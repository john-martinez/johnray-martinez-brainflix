const express = require('express');
const uuid = require('uuid/v4');
const fs = require('fs');
const router = express.Router();
const VIDEO_DETAILS = "videos.json";
const helpers = require('../helpers/helpers');

// functions for routes
const getAllVideos = (_,res) => {
    helpers.fetchData(VIDEO_DETAILS)
    .then(data=>{
        const nextVideoList = data.map(item=>{
            const { id, title, channel, image } = item;
            return { id, title, channel, image }
        })
        return res.send(nextVideoList);
    })
    .catch(console.log);
}
const getOneVideo = (req,res) => helpers.fetchData(VIDEO_DETAILS).then(data=>res.send(data.find(item=>item.id === req.params.videoId))).catch(err=>console.log)
const postComment = (req,res) => {
    helpers.fetchData(VIDEO_DETAILS)
    .then(data=>{
        const video = data.find(item=>item.id === req.params.videoId);
        const { name, comment } = req.body;
        const newComment = { id: uuid(), likes: 0, name, comment, timestamp: Date.now() }
        video.comments.push(newComment); // NEED TO SAVE TO FILE AFTER
        helpers.updateData(data);
        res.send(video);
    })
    .catch(err=>res.send("POST COMMENT FAILED"))
}

const deleteComment = (req,res) => {
    helpers.fetchData(VIDEO_DETAILS)
    .then(data=>{
        const { videoId, commentId } = req.params;
        const video = data.find(item=>item.id === videoId);
        const newComments = video.comments.filter(item=>item.id !== commentId);
        video.comments = newComments;
        helpers.updateData(data);
        res.send('deleted');
    })
    .catch(console.log)  
}

const incrementLikes = (req,res)=>{
    helpers.fetchData(VIDEO_DETAILS)
    .then(data=>{
        const video = data.find(item=>item.id === req.params.videoId);
        video.likes = req.body.likes;
        helpers.updateData(data);
        res.send(video);
    })
    .catch(console.log)
}

const uploadVideo = (req,res)=>{
    helpers.fetchData(VIDEO_DETAILS)
    .then(data=>{   
        const { title, channel, image, description } = req.body;
        const newVideo = { id: uuid(), title, channel, image, description, views: "0", likes: "0", duration: "2:23", video: "https://project-2-api.herokuapp.com/stream", timestamp: Date.now(), comments: []}
        data.push(newVideo);
        helpers.updateData(data);
        res.send(data);
    })
    .catch(console.log) 
}

const resetVideoData = (req,res) => {
    helpers.fetchData('defaultVideos.json')
    .then(data=>{
        helpers.updateData(data);
        res.send({message: 'data has been reset'})
    })
    .catch(console.log)
}

// routes
router.route('/')
    .get (getAllVideos)
    .post(uploadVideo)

router.route('/reset')
    .get (resetVideoData)

router.route('/:videoId')
    .get (getOneVideo)
    .put (incrementLikes)

router.route('/:videoId/comments')
    .post(postComment)

router.route('/:videoId/comments/:commentId')
    .delete(deleteComment)


module.exports = router;