import React from 'react';

const Loading = () =>
    <span>Loading ... </span>;

const WithLoading = (Component) => ({isLoading, ...rest}) =>
    isLoading ? <Component children={<Loading/>}/> : <Component {...rest} />;

export {Loading, WithLoading};
export default Loading;
