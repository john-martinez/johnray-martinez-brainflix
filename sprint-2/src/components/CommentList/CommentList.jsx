import React from 'react';
import Comment from '../Comment/Comment';

function CommentList (props) {
    return(
        <article className="comment-list"> 
            { props.comments
            .sort((a,b)=>b.timestamp-a.timestamp)
            .map((item)=> <Comment comment={item} key={item.id} />) }
        </article>
    );
}
 
export default CommentList;