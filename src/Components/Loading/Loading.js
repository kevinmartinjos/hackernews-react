import React from 'react';

const Loading = () =>
    <span>Loading ... </span>;

const WithLoading = (Component) => ({isLoading, ...rest}) =>
    isLoading ? <Loading /> : <Component {...rest} />;

export {Loading, WithLoading};
export default Loading;
