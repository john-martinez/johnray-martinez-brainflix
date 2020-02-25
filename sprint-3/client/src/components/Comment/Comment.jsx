import React from 'react';
import DeleteBar from '../DeleteBar/DeleteBar';
import dynamicTimeStamp from '../../assets/imports/global';
import './Comment.scss';

function Comment(props) {
    return (
        <div className="comment"> 
            <div className="comment__left"> 
                <div className="comment__image"> </div>
            </div>
            <div className="comment__right"> 
                <div className="comment__header">
                    <span className="comment__author"> {props.comment.name} </span>
                    <span className="comment__time-stamp"> {dynamicTimeStamp(props.comment.timestamp)} </span>
                    <div className="comment__blurb"> 
                        <p> {props.comment.comment} </p>
                    </div>
                    <DeleteBar deleteComment={props.deleteComment} commentId={props.comment.id}/>
                </div>
            </div>
        </div>
        );
    }

export default Comment;