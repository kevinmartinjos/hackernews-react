import React, {Component, createRef} from "react";
import Button from "../Buttons/Button";

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
            <form onSubmit={onSubmit} id="Search">
                {children}
                <input type="text" value={searchTerm} onChange={onSearchTermChange} ref={this.searchBoxRef}/>
                <Button type="submit"> Go! </Button>
            </form>
        );
    }
}

export default Search;
