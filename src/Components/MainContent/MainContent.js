import React, {Component} from 'react';
import CommentBrowser from "../Comments/CommentBrowser";
import {ButtonWithLoading} from "../Buttons/Button";
import Search from "../Search/Search";
import Archives from "../Archives/Archives";
import Articles from "../Articles/Articles";
import {connect} from 'react-redux';
import {ARCHIVE_ADD} from "../../Actions/Actions";

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

const mapStateToArticleProps = state => {
    return {articles: state.articleState.articles};
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
            isLoading: false
        };

        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.setSearchResult = this.setSearchResult.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
        this.loadMore = this.loadMore.bind(this);
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
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
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
    componentDidMount() {
        const {searchTerm} = this.state;
        if(!this.props.articles.length) {
            this.fetchSearchResult(searchTerm);
        }
    }

    render() {
        const {searchTerm, isLoading} = this.state;
        const {isArchive} = this.props;

        return (
            <div id="MainContent">
                <Search
                    searchTerm={searchTerm}
                    onSearchTermChange={this.onSearchTermChange}
                    onSubmit={this.onSearchSubmit}
                >
                    Search title:
                </Search>

                {isArchive ? <ConnectedArchives/> : <ConnectedArticles/>}
                <ButtonWithLoading onClick={this.loadMore} isLoading={isLoading}>Moar!</ButtonWithLoading>
                <CommentBrowser />
            </div>
        )
    }
}

export default MainContent;
