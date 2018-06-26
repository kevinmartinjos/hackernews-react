import React from 'react';
import {Comment as SemanticComment, Header, Icon} from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import styles from './CommentBrowser.module.css';
import Loading from "../Loading/Loading";

const Comment = ({comment}) =>
    <div className={styles.comment} key={comment.id}>
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
    <div id={styles.CommentBrowser}>
        <Header id={styles.header}>
            <Icon name="comment outline"/>
            <Header.Content>Comments</Header.Content>
        </Header>
        <SemanticComment.Group>
        {isCommentLoading
            ? <Loading/>
            : <SemanticComment.Group>
                {parentComment.children.map(childComment => <Comment comment={childComment}/>)}
            </SemanticComment.Group>
        }
        </SemanticComment.Group>
    </div>;

export default CommentBrowser;
