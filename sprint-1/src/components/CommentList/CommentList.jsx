import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <article className="comment-list"> 
                { this.props.comments.map((item,i)=> <Comment comment={item} key={i} />) }
            </article>
        );
    }
}
 
export default CommentList;