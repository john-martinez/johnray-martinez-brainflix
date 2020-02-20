import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
    render() {
        return(
            <article className="comment-list"> 
                { this.props.comments.comments.sort((a,b)=>b.timestamp-a.timestamp).map((item)=> <Comment comment={item} key={item.id} />) }
            </article>
        );
    }
}
 
export default CommentList;