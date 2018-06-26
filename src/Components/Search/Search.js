import React, {Component, createRef} from "react";
import {Form, Button} from 'semantic-ui-react';
import styles from './Search.module.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchBoxRef = createRef();
    }
    componentDidMount() {
        if(this.searchBoxRef.current) {
            this.searchBoxRef.current.focus();
        }
    }
    render() {
        const {onSubmit, searchTerm, onSearchTermChange} = this.props;
        return (
            <form onSubmit={onSubmit} id={styles.Search}>
                <input type="text" value={searchTerm} onChange={onSearchTermChange} ref={this.searchBoxRef} placeholder="Search" className={styles.search_box}/>
                <Button type="submit"> Go! </Button>
            </form>
        );
    }
}

export default Search;
