import React, {Component} from 'react';
import {Item, Segment, Container, Icon} from 'semantic-ui-react';
import styles from './Articles.module.css'
import CommentButton from "./CommentButton";

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsForArticle: null
        };
        this.onViewComments = this.onViewComments.bind(this);
    }
    onViewComments(objectID){
        this.setState({commentsForArticle: objectID});
        this.props.onViewComments(objectID);
    }
    render() {
        const {articles, archivedArticleIDs, onArchive} = this.props;
        const {commentsForArticle} = this.state;
        return (
            <div id={styles.Articles}>
                <Container>
                    <Item.Group>
                        {articles.map(article =>
                            <Segment key={article.objectID}>
                                <Item>
                                    <Item.Content>
                                        <Item.Header as='a' href={article.url}>{article.title}</Item.Header>
                                        <Item.Meta className={styles.stats}>Author: {article.author}</Item.Meta>
                                        <Item.Meta className={styles.stats}>
                                            <span className={styles.spaced}>{article.num_comments} comments</span>
                                            <span className={styles.spaced}>{article.points} points</span>
                                            <CommentButton article={article} onViewComments={this.onViewComments} isPressed={article.objectID === commentsForArticle}/>
                                            {!archivedArticleIDs.includes(article.objectID) &&
                                                <Icon onClick={() => onArchive(article)} name="file archive outline" className={styles.clickable}/>
                                            }
                                        </Item.Meta>
                                    </Item.Content>

                                </Item>
                            </Segment>
                        )}
                    </Item.Group>
                </Container>
            </div>
        )
    }
}

export default Articles;
