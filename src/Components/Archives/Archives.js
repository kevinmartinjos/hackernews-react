import React from 'react';
import {Item, Segment} from 'semantic-ui-react';
import styles from './Archives.module.css';
import articleStyles from '../Articles/Articles.module.css';

const Archives = ({articles}) =>
    <div id={styles.Archives}>
        <Item.Group>
            {articles.map(article =>
                <Segment key={article.objectID}>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{article.title}</Item.Header>
                            <Item.Meta className={articleStyles.stats}>Author: {article.author}</Item.Meta>
                            <Item.Meta className={articleStyles.stats}>
                                <span className={styles.spaced}>{article.num_comments} comments</span>
                                <span className={styles.spaced}>{article.points} points</span>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                </Segment>
            )}
        </Item.Group>
    </div>;

export default Archives;