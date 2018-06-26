import React from 'react';
import {Button} from 'semantic-ui-react';
import {WithLoading} from "../Loading/Loading";
import styles from './Buttons.module.css';

const MoreButton = ({type="button", onClick, children, className=''}) =>
    <Button type={type} onClick={onClick} className={className} id={styles.MoreButton} size="mini">
        {children}
    </Button>;

const ButtonWithLoading = WithLoading(MoreButton);

export {MoreButton, ButtonWithLoading};
export default MoreButton;
