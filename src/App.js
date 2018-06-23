import React, {Component} from 'react';
import './App.css';
import Search from "./Components/Search/Search";
import Articles from "./Components/Articles/Articles";
import {ButtonWithLoading} from "./Components/Buttons/Button";

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            searchTerm: "",
            page: 0,
            isLoading: false
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.setSearchResult = this.setSearchResult.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    onSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }
    onDismiss(objectID) {
        const updatedArticles = this.state.articles.filter(article => article.objectID !== objectID)
        this.setState({articles: updatedArticles})
    }
    setSearchResult(result) {
        const page = result.page;
        let hits = result.hits
        if(page)
            hits = [...this.state.articles, ...hits];
        this.setState({articles: hits, page: result.page, isLoading: false});
    }
    fetchSearchResult(searchTerm, page=0) {
        this.setState({isLoading: true});
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => this.setSearchResult(result))
            .catch(error => error);
    }
    loadMore() {
        const {searchTerm, page} = this.state;
        this.fetchSearchResult(searchTerm, page + 1);
    }
    onSearchSubmit(event) {
        const {searchTerm} = this.state;
        event.preventDefault();
        this.fetchSearchResult(searchTerm);
    }
    componentDidMount() {
        const {searchTerm} = this.state;
        this.fetchSearchResult(searchTerm);
    }
    render() {
        const {searchTerm, articles, isLoading} = this.state;
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        searchTerm={searchTerm}
                        onSearchTermChange={this.onSearchTermChange}
                        onSubmit={this.onSearchSubmit}
                    >
                        Search title:
                    </Search>
                </div>
                {articles.length
                    ? <Articles articles={articles} searchTerm={searchTerm} onDismiss={this.onDismiss}/>
                    :
                    <div> No results </div>
                }
                <ButtonWithLoading onClick={this.loadMore} isLoading={isLoading}>Moar!</ButtonWithLoading>
            </div>
        );
    }
}

export default App;
