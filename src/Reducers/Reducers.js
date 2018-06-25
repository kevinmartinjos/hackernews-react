import {ARCHIVE_ADD, ARCHIVE_DELETE, ARTICLES_ADD, ARTICLES_CLEAR} from "../Actions/Actions";

const archiveReducer = (archiveState={articles: []}, action) => {
    switch(action.type) {
        case ARCHIVE_ADD: {
            return applyAddArchive(archiveState, action);
        }
        case ARCHIVE_DELETE: {
            return applyDeleteArchive(archiveState, action);
        }
        default: return archiveState;
    }
};

const applyAddArchive = (archiveState, action) => {
    return {
        articles: [...archiveState.articles, action.article]
    };
};
const applyDeleteArchive = (archiveState, action) => {
    return {
        articles: archiveState.articles.filter(article => article.objectID !== action.objectID)
    };
};


const articleReducer = (articleState={articles: [], page:0, searchTerm: ""}, action) => {
    switch(action.type) {
        case ARTICLES_ADD: {
            return applyAddArticles(articleState, action);
        }
        case ARTICLES_CLEAR: {
            return applyClearArticles();
        }
        default: return articleState
    }
};

const applyAddArticles = (articleState, action) => {
    return {
        articles: [...articleState.articles, ...action.articles],
        page: action.page,
        searchTerm: action.searchTerm
    };
};

const applyClearArticles = () => {
    return {
        articles: [],
        page: 0
    }
};


export {archiveReducer, articleReducer};

export default archiveReducer;
