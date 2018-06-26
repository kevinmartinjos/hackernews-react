import React from 'react';
import {Item, Segment, Container, Icon} from 'semantic-ui-react';
import Button from "../Buttons/Button";
import styles from './Articles.module.css'
const Articles = ({articles, archivedArticleIDs, onArchive, onViewComments}) =>
    <div id={styles.Articles}>
        <Container>
        <Item.Group>
            {articles.map(article =>
                <Segment key={article.objectID}>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{article.title}</Item.Header>
                        <Item.Meta>Author: {article.author}</Item.Meta>
                        <Item.Meta>
                            <span className={styles.spaced}>{article.num_comments} comments</span>
                            <span className={styles.spaced}>{article.points} points</span>
                            <Icon name='comment outline' onClick={() => onViewComments(article.objectID)} className={styles.hover}/>
                        </Item.Meta>
                    </Item.Content>
                    {!archivedArticleIDs.includes(article.objectID) &&
                        <Button
                            onClick={() => onArchive(article)}
                            className="button-inline"
                        >
                            Archive
                        </Button>
                    }
                </Item>
                </Segment>
            )}
        </Item.Group>
        </Container>
    </div>;

export default Articles;
