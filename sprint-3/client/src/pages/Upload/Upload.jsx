import React from 'react';
import axios from 'axios';
import videoPreviewImg from '../../assets/images/Upload-video-preview.jpg';
import './Upload.scss';

const LINK = 'http://localhost:8080';
const PATH = '/videos';

export default function Upload() {
    const onSubmitHandler = e => {
        e.preventDefault();
        let { title, description } = e.target;
        title.classList.remove('wrong-input');
        if (title.value.trim()) {
            axios.post(`${LINK}${PATH}`, {
                title: title.value, 
                channel: "BrainStation Guy",
                image: "https://i.imgur.com/yFS8EBr.jpg",
                description: description.value
            })
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        } else {
            title.classList.add('shake');
            title.classList.add('wrong-input');
            setTimeout(()=>title.classList.remove('shake'), 200)
        }
        e.target.reset();
    }
    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="upload__main">
                    <div className="upload__flex-container">
                        <div className="upload__left">
                            <div className="upload__item">
                                <h4 className="upload__item-header">Video Thumbnail</h4>    
                                <img className="upload__video" src={videoPreviewImg} alt="blue bike"/>
                            </div>
                        </div>
                        <div className="upload__right">
                            <div className="upload__item">
                                <h4><label className="upload__item-header" htmlFor="title">TITLE OF YOUR VIDEO</label></h4>
                                <input className="upload__input" type="text" name="title" placeholder="Add a title to your video" />
                            </div>
                            <div className="upload__item upload__item--grow">
                                <h4><label className="upload__item-header" htmlFor="description">ADD A VIDEO DESCRIPTION</label></h4>
                                <textarea className="upload__input textarea" name="description" placeholder="Add a description of your video" ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="upload__item--flex">
                    <button className="upload__button">PUBLISH</button>
                    <button className="upload__button--inverted">CANCEL</button>
                </div>
            </form>
        </section>
    );
}

