const express = require('express');
const uuid = require('uuid/v4');
const fs = require('fs');
const router = express.Router();
const VIDEO_DETAILS = "videos.json";

const getAllVideos = (_,res) => {
    fetchData(VIDEO_DETAILS)
    .then(data=>{
        const nextVideoList = data.map(item=>{
            return {
                id: item.id,
                title: item.title, 
                channel: item.channel,
                image: item.image
            }
        })
        return res.send(nextVideoList);
    })
    .catch(console.log);
}
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
        fs.writeFile('./data/videos.json', JSON.stringify(data), err => {
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
        fs.writeFile('./data/videos.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('file saved');
        })
        res.send('deleted');
    })
    .catch(console.log)
    
}

const incrementLikes = (req,res)=>{
    fetchData(VIDEO_DETAILS)
    .then(data=>{
        const video = data.find(item=>item.id === req.params.videoId);
        video.likes = req.body.likes;
        fs.writeFile('./data/videos.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('file saved');
        })
        res.send(video);
    })
}

const uploadVideo = (req,res)=>{
    fetchData(VIDEO_DETAILS)
    .then(data=>{   
        const { title, channel, image, description } = req.body;
        const newVideo = {
            id: uuid(),
            title,      
            channel,
            image,
            description,
            views: "0",
            likes: "0",
            duration: "2:23",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: []}
        data.push(newVideo);
        fs.writeFile('./data/videos.json', JSON.stringify(data), err => {
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

router.route('/')
    .get (getAllVideos)
    .post(uploadVideo)

router.route('/:videoId')
    .get (getOneVideo)
    .put (incrementLikes)

router.route('/:videoId/comments')
    .post(postComment)

router.route('/:videoId/comments/:commentId')
    .delete(deleteComment)

module.exports = router;