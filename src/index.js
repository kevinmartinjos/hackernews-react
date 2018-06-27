import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import archiveReducer, {articleReducer} from "./Reducers/Reducers";

const persistedState = localStorage.getItem('hackernews_state') ? JSON.parse(localStorage.getItem('hackernews_state')) : {};
const rootReducer = combineReducers({
    archiveState: archiveReducer,
    articleState: articleReducer
});

const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
   localStorage.setItem('hackernews_state', JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/archives" render={(props) => <App {...props} isArchive={true}/>}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'))
;

if (module.hot) {
    module.hot.accept();
}
