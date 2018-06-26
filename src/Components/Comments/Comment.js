import React, {Component} from 'react';
import {Comment as SemanticComment, Icon} from 'semantic-ui-react';
import ReactHtmlParser from "react-html-parser";
import styles from './CommentBrowser.module.css'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRevealed: false
        };
        this.onExpand = this.onExpand.bind(this);
    }
    onExpand(){
        this.setState(prevState => {
            return {
                isRevealed: !prevState.isRevealed
            };
        })
    }
    render() {
        const {comment} = this.props;
        const {isRevealed} = this.state;
        const outline = isRevealed ? "" : "outline";
        return (
            <div className={styles.comment} key={comment.id}>
                <SemanticComment>
                    <SemanticComment.Content>
                        <SemanticComment.Author>
                            {comment.author}
                            {comment.children.length &&
                            <Icon name={"plus square " + outline} className={styles.clickable} onClick={this.onExpand}/>}
                        </SemanticComment.Author>
                        <SemanticComment.Metadata>{comment.created_at}</SemanticComment.Metadata>
                        <SemanticComment.Text>{ReactHtmlParser(comment.text)}</SemanticComment.Text>
                    </SemanticComment.Content>
                </SemanticComment>
                {isRevealed && comment.children.map((childComment) => <SemanticComment.Group><Comment comment={childComment} key={childComment.id}/></SemanticComment.Group>)}
            </div>
        )
    }
}

export default Comment;
