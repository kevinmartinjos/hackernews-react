import React from 'react';
import Button from "../Buttons/Button";

const Articles = ({articles, archivedArticleIDs, onArchive, onViewComments}) =>
    <div id="Articles">
        {articles.map(article =>
            <div key={article.objectID}>
                <span><a href={article.url}> {article.title} </a></span>
                <span>{article.author} </span>
                <span>{article.num_comments}</span>
                <span>{article.points}</span>
                {!archivedArticleIDs.includes(article.objectID) &&
                    <span>
                        <Button
                            onClick={() => onArchive(article)}
                            className="button-inline"
                        >
                            Archive
                        </Button>
                    </span>
                }
                <span><Button onClick={() => onViewComments(article.objectID)}>View comments</Button></span>
            </div>
        )}
    </div>;

export default Articles;
