const express = require('express');
const videosRoute = require('./routes/videosRoute');
const cors = require('cors');
const app = express();

// app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded())
app.use(cors());

app.use('/videos', videosRoute);

app.listen(8080,function(){
    console.log(`listening to port 8080`);
})