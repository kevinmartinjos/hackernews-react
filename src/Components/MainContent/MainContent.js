import React, {Component} from 'react';
import CommentBrowser from "../Comments/CommentBrowser";
import {Icon} from 'semantic-ui-react';
import Search from "../Search/Search";
import Archives from "../Archives/Archives";
import Articles from "../Articles/Articles";
import {connect} from 'react-redux';
import {ARCHIVE_ADD} from "../../Actions/Actions";
import styles from './MainContent.module.css';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HITS_PER_PAGE = 'hitsPerPage=5';

const mapStateToArticleProps = state => {
    return {
        articles: state.articleState.articles,
        archivedArticleIDs: state.archiveState.articles.map(article => article.objectID)
    };
};

const mapDispatchToArticleProps = dispatch => {
    return {onArchive: article => dispatch({type: ARCHIVE_ADD, article})}
};

const ConnectedArticles = connect(mapStateToArticleProps, mapDispatchToArticleProps)(Articles);

const mapStateToArchivesProps = state => {
    return {
        articles: state.archiveState.articles
    };
};

const mapDispatchToArchivesProps = state => {
    return {

    };
};

const ConnectedArchives = connect(mapStateToArchivesProps, mapDispatchToArchivesProps)(Archives);

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.searchTerm,
            isLoading: false,
            selectedArticle: {children: []},
            isCommentLoading: false
        };

        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.setSearchResult = this.setSearchResult.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.onViewComments = this.onViewComments.bind(this);
    }

    onSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    setSearchResult(result) {
        const page = result.page;
        let hits = result.hits;
        this.setState({isLoading: false});
        this.props.onSearchResult(hits, page, this.state.searchTerm);
    }
    fetchSearchResult(searchTerm, page=0) {
        this.setState({isLoading: true});
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HITS_PER_PAGE}`)
            .then(response => response.json())
            .then(result => this.setSearchResult(result))
            .catch(error => error);
    }
    loadMore() {
        const {searchTerm} = this.state;
        this.fetchSearchResult(searchTerm, this.props.page + 1);
    }
    onSearchSubmit(event) {
        const {searchTerm} = this.state;
        event.preventDefault();
        this.props.onSearchSubmit();
        this.fetchSearchResult(searchTerm);
    }
    onViewComments(objectID) {
        const PATH_BASE = 'http://hn.algolia.com/api/v1/items/';
        this.setState({isCommentLoading: true});
        fetch(`${PATH_BASE}${objectID}`).
        then(response => response.json()).
        then(result => this.setState({
                selectedArticle: result, isCommentLoading: false
            }));
    }
    componentDidMount() {
        const {searchTerm} = this.state;
        if(!this.props.articles.length) {
            this.fetchSearchResult(searchTerm);
        }
    }

    render() {
        const {searchTerm, isLoading, selectedArticle, isCommentLoading} = this.state;
        const {isArchive} = this.props;

        return (
            <div id={styles.MainContent}>
                <Search
                    searchTerm={searchTerm}
                    onSearchTermChange={this.onSearchTermChange}
                    onSubmit={this.onSearchSubmit}
                />
                {isArchive ? <ConnectedArchives/> : <ConnectedArticles onViewComments={this.onViewComments}/>}
                {/*{!isArchive && <ButtonWithLoading onClick={this.loadMore} isLoading={isLoading}>Moar!</ButtonWithLoading>}*/}
                {!isArchive && <Icon name="sync" onClick={this.loadMore} loading={isLoading} id={styles.MoreButton}/>}
                <CommentBrowser parentComment={selectedArticle} isCommentLoading={isCommentLoading}/>
            </div>
        )
    }
}

export default MainContent;
