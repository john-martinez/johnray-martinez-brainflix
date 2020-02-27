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
            comments: [
            {
                name: "Micheal Lyons",
                comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                likes: 0,
                timestamp: 1545162149000
            },
            {
                name: "Gary Wong",
                comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                likes: 0,
                timestamp: 1544595784046
            },
            {
                name: "Theodore Duncan",
                comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
                likes: 0,
                timestamp: 1542262984046
            }
        ]}
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

router
    .get ('/', getAllVideos)
    .post('/', uploadVideo)
    .get ('/:videoId', getOneVideo)
    .put ('/:videoId', incrementLikes)
    .post('/:videoId/comments', postComment)
    .delete('/:videoId/comments/:commentId', deleteComment)

module.exports = router;