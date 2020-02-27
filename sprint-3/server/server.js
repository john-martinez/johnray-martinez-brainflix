const express = require('express');
const videosRoute = require('./routes/videosRoute');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/videos', videosRoute);

app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
})