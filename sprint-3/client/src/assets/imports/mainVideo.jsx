import img from "../images/video-list-0.jpg";
import uuid from './node_modules/uuid/v1';

const mainVideo = {
    id: 123456,
    title: "BMX Rampage: 2018 Highlights",
    description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    channel: "By Red Cow",
    image: img,
    views: '1,001,023',
    likes: '110,985',
    duration: 20000,
    video: "",
    timestamp: 1545109200000,
    comments: [{
      id: uuid(),
      name: "Micheal Lyons",
      comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", 
      timestamp: 1545109200000
    },
    {
      id: uuid(),
      name: "Gary Wong",
      comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!", 
      timestamp: 1545109200000
                
    },
    {
      id: uuid(),
      name: "Theodore Duncan ",
      comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!", 
      timestamp: 1542258000000
    }]
  }

  export default mainVideo;