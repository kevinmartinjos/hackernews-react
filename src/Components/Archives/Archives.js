import React from 'react';

const Archives = ({articles}) =>
    <div id="Archives">
        {articles.map(article =>
            <div key={article.objectID}>
                <span><a href={article.url}> {article.title} </a></span>
                <span>{article.author} </span>
                <span>{article.num_comments}</span>
                <span>{article.points}</span>
            </div>
        )}
    </div>;

export default Archives;