import React from 'react';
import Button from "../Buttons/Button";

const Articles = ({articles, searchTerm, onDismiss}) =>
    <div className="table">
        {articles.map(article =>
            <div key={article.objectID}>
                <span><a href={article.url}> {article.title} </a></span>
                <span>{article.author} </span>
                <span>{article.num_comments}</span>
                <span>{article.points}</span>
                <span>
                            <Button
                                onClick={() => onDismiss(article.objectID)}
                                className="button-inline"
                            >
                                Dismiss
                            </Button>
                        </span>
            </div>
        )}
    </div>;

export default Articles;
