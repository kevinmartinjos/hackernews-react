import React from 'react';
import {Item, Segment, Container} from 'semantic-ui-react';
import Button from "../Buttons/Button";

const Articles = ({articles, archivedArticleIDs, onArchive, onViewComments}) =>
    <div id="Articles">
        <Container>
        <Item.Group>
            {articles.map(article =>
                <Segment>
                <Item key={article.objectID}>
                    <Item.Content>
                        <Item.Header as='a'>{article.title}</Item.Header>
                        <Item.Meta>Author: {article.author}</Item.Meta>
                        <Item.Meta>
                            <span>{article.num_comments} comments</span>
                            <span>{article.points} points</span>
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
                    <span><Button onClick={() => onViewComments(article.objectID)}>View comments</Button></span>
                </Item>
                </Segment>
            )}
        </Item.Group>
        </Container>
    </div>;

export default Articles;
