// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './App.module.css';
import Navbar from "./Components/Layouts/Navbar";
import Sidebar from "./Components/Layouts/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import {ARTICLES_ADD, ARTICLES_CLEAR} from "./Actions/Actions";

const mapStateToProps = state => {
    return {
        articles: state.articleState.articles,
        page: state.articleState.page,
        searchTerm: state.articleState.searchTerm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchSubmit: () => dispatch({type: ARTICLES_CLEAR}),
        onSearchResult: (articles, page, searchTerm) => dispatch({type: ARTICLES_ADD, articles, page, searchTerm})
    }
};

const ConnectedMainContent = connect(mapStateToProps, mapDispatchToProps)(MainContent);

type Props = {
    isArchive: boolean
};

class App extends Component<Props> {
    render() {
        return (
            <div id={styles.App}>
                <Navbar />
                <Sidebar />
                <ConnectedMainContent isArchive={this.props.isArchive}/>
            </div>
        );
    }
}

export default App;
