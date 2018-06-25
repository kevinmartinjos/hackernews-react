import React from 'react';
import {WithLoading} from "../Loading/Loading";

const Button = ({type="button", onClick, children, className=''}) =>
    <button type={type} onClick={onClick} className={className} id="MoreButton">
        {children}
    </button>;

const ButtonWithLoading = WithLoading(Button);

export {Button, ButtonWithLoading};
export default Button;
