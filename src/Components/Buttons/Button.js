import React from 'react';
import {Button} from 'semantic-ui-react';
import {WithLoading} from "../Loading/Loading";

const MoreButton = ({type="button", onClick, children, className='', size="mini"}) =>
    <Button type={type} onClick={onClick} className={className} id="MoreButton" size={size}>
        {children}
    </Button>;

const ButtonWithLoading = WithLoading(MoreButton);

export {MoreButton, ButtonWithLoading};
export default MoreButton;
