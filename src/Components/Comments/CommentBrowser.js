import React from 'react';
import {Comment as SemanticComment} from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

import Loading from "../Loading/Loading";

const Comment = ({comment}) =>
    <div className="comment" key={comment.id}>
        <SemanticComment>
            <SemanticComment.Content>
                <SemanticComment.Author>{comment.author}</SemanticComment.Author>
                <SemanticComment.Metadata>{comment.created_at}</SemanticComment.Metadata>
                <SemanticComment.Text>{ReactHtmlParser(comment.text)}</SemanticComment.Text>
            </SemanticComment.Content>
        </SemanticComment>
        {comment.children.map((childComment) => <SemanticComment.Group><Comment comment={childComment} key={childComment.id}/></SemanticComment.Group>)}
    </div>;

const CommentBrowser = ({parentComment, isCommentLoading}) =>
    <div id="CommentBrowser">
        <h3>Comments</h3>
        <SemanticComment.Group>
        {isCommentLoading
            ? <Loading/>
            : <Comment comment={parentComment}/>
        }
        </SemanticComment.Group>
    </div>;

export default CommentBrowser;
