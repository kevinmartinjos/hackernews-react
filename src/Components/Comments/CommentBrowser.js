import React from 'react';
import {Comment as SemanticComment, Header, Icon} from 'semantic-ui-react';
import Comment from './Comment';
import styles from './CommentBrowser.module.css';
import Loading from "../Loading/Loading";

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
