const express = require('express');
const uuid = require('uuid/v4');
const nextVideos = require('../data/nextVideos.json');
const mainVideos = require('../data/mainVideos.json');
const fs = require('fs');
const router = express.Router();
const VIDEO_DETAILS = "mainVideos.json";
const NEXT_VIDEOS = "nextVideos.json";

const getAllVideos = (_,res) => fetchData(NEXT_VIDEOS).then(data=>res.send(data)).catch(console.log);
const getOneVideo = (req,res) => fetchData(VIDEO_DETAILS).then(data=>res.send(data.find(item=>item.id === req.params.videoId))).catch(err=>console.log)
const postComment = (req,res) => {
    fetchData(VIDEO_DETAILS)
    .then(data=>{
        const video = data.find(item=>item.id === req.params.videoId);
        const { name, comment } = req.body;
        const newComment = {
            id: uuid(),
            likes: 0,
            name,
            comment,
            timestamp: Date.now()
        }
        video.comments.push(newComment); // NEED TO SAVE TO FILE AFTER
        fs.writeFile('./data/mainVideos.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('file saved');
        })
        res.send(video);
    })
    .catch(err=>res.send("POST COMMENT FAILED"))
}

const deleteComment = (req,res) => {
    fetchData(VIDEO_DETAILS)
    .then(data=>{
        const { videoId, commentId } = req.params;
        const video = data.find(item=>item.id === videoId);
        const newComments = video.comments.filter(item=>item.id !== commentId);
        video.comments = newComments;
        fs.writeFile('./data/mainVideos.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('file saved');
        })
        res.send('deleted');
    })
    .catch(console.log)
    
}

const incrementLikes = (req,res)=>{
    const mainVideoLikes = retrieveMainVideo(req.params.videoId).likes = req.body.likes;
    res.send({likes: mainVideoLikes})
}

const uploadVideo = (req,res)=>{
    fetchData(NEXT_VIDEOS)
    .then(data=>{
        res.send(data);
        const { title, channel, image } = req.body;
        const newVideo = {
            id: uuid(),
            title, 
            channel,
            image
        }
        data.push(newVideo);
        fs.writeFile('./data/nextVideos.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('file saved');
        })
        res.send(data);
    })
    .catch(console.log)
    
}

const fetchData = filename => {
    return new Promise((resolve,reject) => {
        fs.readFile(`./data/${filename}`, (err,data)=>{
            if (err) reject(err);
            return resolve(JSON.parse(data));
        })
    })
}

const getVideos = (req,res) => fetchData(NEXT_VIDEOS).then(data=>res.send(data)).catch(err=>res.send(err));

router
    .get ('/', getAllVideos)
    .post('/', uploadVideo)
    .get ('/hotdog', getVideos) // TEST ROUTE
    .get ('/:videoId', getOneVideo)
    .put ('/:videoId', incrementLikes)
    .post('/:videoId/comments', postComment)
    .delete('/:videoId/comments/:commentId', deleteComment)

module.exports = router;