import React, {Component, createRef} from "react";
import {Form, Button} from 'semantic-ui-react';

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
        const {onSubmit, searchTerm, children, onSearchTermChange} = this.props;
        return (
            <Form onSubmit={onSubmit} id="Search">
                <Form.Group>
                    <Form.Input type="text" value={searchTerm} onChange={onSearchTermChange} ref={this.searchBoxRef} placeholder="Search"/>
                    <Button type="submit"> Go! </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default Search;
