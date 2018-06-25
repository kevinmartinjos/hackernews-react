import React from 'react';
import Loading from "../Loading/Loading";

const Comment = ({comment}) =>
    <div className="comment" key={comment.id}>
        {comment.text}
        {comment.children.map((childComment) => <Comment comment={childComment} key={childComment.id}/>)}
    </div>;

const CommentBrowser = ({parentComment, isCommentLoading}) =>
    <div id="CommentBrowser">
        <h3>Comments</h3>
        {isCommentLoading
            ? <Loading/>
            : <Comment comment={parentComment}/>
        }
    </div>;

export default CommentBrowser;
