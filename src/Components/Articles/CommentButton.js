import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import styles from './Articles.module.css';

class CommentButton extends Component {
    constructor(props) {
        super(props);
        this.onPressed = this.onPressed.bind(this);
    }
    onPressed() {
        this.props.onViewComments(this.props.article.objectID);
    }
    render() {
        const {isPressed} = this.props;
        const outline = isPressed ? "": "outline";
        return (
            <Icon name={'comment ' + outline} onClick={this.onPressed} className={styles.clickable}/>
        )
    }
}

export default CommentButton;
